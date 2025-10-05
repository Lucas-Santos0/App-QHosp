import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { router } from 'expo-router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from "../conexaoFirebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z.object({
  email: z.string().email("Email inválido"),
  senha: z.string().min(6, "Senha deve ter no mínimo 6 caracteres"),
});

type FormData = z.infer<typeof schema>;

export default function Login() {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  // Ir para cadastro
  function IrParaCadastro() {
    router.replace("/cadastro");
  }

  function IrParaEsqueceuSenha() {
    router.replace("/esqueceuSenha");
  }

  // Função de verificação e login
  async function Verificacao(data: FormData) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, data.email, data.senha);
      const user = userCredential.user;

      const docRef = doc(db, "Usuarios", user.uid);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        const dadosUsuario = docSnap.data();

        if (dadosUsuario.adm === true) {
          Alert.alert("Atenção", "Você está tentando entrar como Administrador. Por favor, entre pelo nosso site.");
        } else {
          router.push("/inicio");
        }
      } else {
        Alert.alert("Erro", "Usuário não encontrado no banco.");
      }
    } catch (error: any) {
      console.error("Erro ao fazer login:", error);
      if (error.code === "auth/wrong-password" || error.code === "auth/user-not-found") {
        Alert.alert("Erro", "Email ou senha inválidos.");
      } else {
        Alert.alert("Erro", "Erro ao fazer login. Verifique suas credenciais ou tente novamente mais tarde.");
      }
    }
  }


  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
          <Text style={styles.logo}>QHosp</Text>
          <Text style={styles.subtitulo}>gestão e suporte hospitalar</Text>

          <Text style={styles.titulo}>Login</Text>
          <Text style={styles.descricao}>Insira seu e-mail e senha para logar neste aplicativo</Text>

          <Controller
            control={control}
            name="email"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="email@dominio.com"
                style={styles.input}
                keyboardType="email-address"
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          {errors.email && <Text style={{ color: "red" }}>{errors.email.message}</Text>}


          <Controller
            control={control}
            name="senha"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Senha"
                style={styles.input}
                secureTextEntry
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          {errors.senha && <Text style={{ color: "red" }}>{errors.senha.message}</Text>}

          <TouchableOpacity onPress={IrParaEsqueceuSenha}>
            <Text style={styles.descricao}>
              Esqueceu sua senha?
            </Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.btnContinuar} onPress={handleSubmit(Verificacao)}>
            <Text style={styles.btnText}>Continuar</Text>
          </TouchableOpacity>

          <View style={styles.linhaCadastro}>
            <Text>Não tem uma conta? </Text>
            <TouchableOpacity onPress={IrParaCadastro}>
              <Text style={styles.btnTextCadastro}>Cadastre-se</Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: "#fff",
    justifyContent: "center",
  },
  logo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
  },
  subtitulo: {
    textAlign: "center",
    fontSize: 14,
    color: "#7f8c8d",
    marginBottom: 24,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  btnContinuar: {
    backgroundColor: "#2c3e50",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  btnCadastro: {
    borderRadius: 8,
    alignItems: "center",
    top: 200,
  },
  btnTextCadastro: {
    color: "#2c3e50",
    fontSize: 16,
    fontWeight: "600",
  },
  linhaCadastro: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
  },


});
