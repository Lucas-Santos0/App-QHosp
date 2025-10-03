import React from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard, Image,} from "react-native";

import { router } from "expo-router";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth, db } from "../conexaoFirebase/firebase";
import { doc, setDoc } from "firebase/firestore";

import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

const schema = z
  .object({
    nome: z.string().min(3, "Nome obrigatório"),
    cpf: z.string().min(11, "CPF inválido"),
    email: z.string().email("Email inválido"),
    senha: z.string().min(6, "Mínimo 6 caracteres"),
    confirmarSenha: z.string().min(6, "Confirme sua senha"),
  })
  .refine((data) => data.senha === data.confirmarSenha, {
    path: ["confirmarSenha"],
    message: "As senhas não coincidem",
  });

type FormData = z.infer<typeof schema>;

export default function Cadastro() {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  async function cadastrarUsuario(data: FormData) {
    try {
      const cpfLimpo = data.cpf.replace(/\D/g, ""); // remove pontuação

      const userCredential = await createUserWithEmailAndPassword(
        auth,
        data.email,
        data.senha
      );
      const user = userCredential.user;

      await setDoc(doc(db, "Usuarios", user.uid), {
        Nome: data.nome,
        CPF: cpfLimpo,
        Email: data.email,
        adm: false,
      });

      Alert.alert("Sucesso", "Cadastro realizado com sucesso!");
      reset();
      router.replace("/");
    } catch (e: any) {
      console.error("Erro ao cadastrar:", e);
      if (e.code === "auth/email-already-in-use") {
        Alert.alert("Erro", "Este e-mail já está em uso.");
      } else {
        Alert.alert("Erro", "Erro ao cadastrar. Tente novamente.");
      }
    }
  }
  function voltar(){
        router.replace("/");
    
  }
  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.container}
          keyboardShouldPersistTaps="handled"
        >
          <TouchableOpacity style={[styles.btnContinuar, { backgroundColor: '#34495e' }]} onPress={voltar}>
                      <Text style={styles.btnText}>Voltar</Text>
          </TouchableOpacity>
          <Text style={styles.logo}>Qhosp</Text>
          <Text style={styles.subtitulo}>gestão e suporte hospitalar</Text>

          <Text style={styles.titulo}>Criar uma conta</Text>
          <Text style={styles.descricao}>
            Insira seus dados para se cadastrar neste aplicativo
          </Text>

          {/* Nome */}
          <Controller
            control={control}
            name="nome"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Nome completo"
                style={styles.input}
                value={value}
                onChangeText={onChange}
                autoCapitalize="words"
              />
            )}
          />
          {errors.nome && (
            <Text style={styles.errorText}>{errors.nome.message}</Text>
          )}

          {/* CPF */}
          <Controller
            control={control}
            name="cpf"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="CPF"
                style={styles.input}
                value={value}
                onChangeText={onChange}
                keyboardType="numeric"
                maxLength={14} // pode formatar se quiser
              />
            )}
          />
          {errors.cpf && (
            <Text style={styles.errorText}>{errors.cpf.message}</Text>
          )}

          {/* Email */}
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
          {errors.email && (
            <Text style={styles.errorText}>{errors.email.message}</Text>
          )}

          {/* Senha */}
          <Controller
            control={control}
            name="senha"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Senha"
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          {errors.senha && (
            <Text style={styles.errorText}>{errors.senha.message}</Text>
          )}

          {/* Confirmar Senha */}
          <Controller
            control={control}
            name="confirmarSenha"
            render={({ field: { onChange, value } }) => (
              <TextInput
                placeholder="Confirmar Senha"
                style={styles.input}
                secureTextEntry
                autoCapitalize="none"
                value={value}
                onChangeText={onChange}
              />
            )}
          />
          {errors.confirmarSenha && (
            <Text style={styles.errorText}>{errors.confirmarSenha.message}</Text>
          )}

          <TouchableOpacity
            style={styles.btnContinuar}
            onPress={handleSubmit(cadastrarUsuario)}
          >
            <Text style={styles.btnText}>Continuar</Text>
          </TouchableOpacity>

          {/* Aqui você pode deixar os botões sociais ou remover */}

          <View style={styles.divider}>
            <View style={styles.line} />
            <Text style={styles.dividerText}>ou</Text>
            <View style={styles.line} />
          </View>

          <TouchableOpacity style={[styles.btnSocial, styles.google]}>
            <Image
              source={{
                uri: "https://www.svgrepo.com/show/475656/google-color.svg",
              }}
              style={styles.socialIcon}
            />
            <Text style={styles.btnText}>Continuar com o Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btnSocial, styles.apple]}>
            <Image
              source={{
                uri: "https://www.svgrepo.com/show/303128/apple-logo.svg",
              }}
              style={styles.socialIcon}
            />
            <Text style={styles.btnText}>Continuar com a Apple</Text>
          </TouchableOpacity>
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
    textAlign: "center",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 8,
  },
  errorText: {
    color: "red",
    marginBottom: 8,
    marginLeft: 4,
  },
  btnContinuar: {
    backgroundColor: "#2c3e50",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginVertical: 16,
  },
  btnText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
  divider: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 16,
  },
  line: {
    flex: 1,
    height: 1,
    backgroundColor: "#ccc",
  },
  dividerText: {
    marginHorizontal: 8,
    color: "#7f8c8d",
  },
  btnSocial: {
    flexDirection: "row",
    alignItems: "center",
    padding: 12,
    borderRadius: 8,
    marginBottom: 12,
  },
  google: {
    borderColor: "#18ad51",
    borderWidth: 3,
  },
  apple: {
    borderColor: "#000",
    borderWidth: 3,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
});
