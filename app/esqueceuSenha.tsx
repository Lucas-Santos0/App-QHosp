import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { router } from "expo-router";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../conexaoFirebase/firebase";
import { MaterialIcons } from "@expo/vector-icons"; // ✅ Import do ícone

export default function EsqueceuSenha() {
  const [email, setEmail] = useState("");

  async function handleReset() {
    if (!email) {
      Alert.alert("Atenção", "Por favor, insira seu e-mail.");
      return;
    }

    try {
      await sendPasswordResetEmail(auth, email);
      Alert.alert(
        "Verifique seu e-mail 📩",
        "Enviamos um link para redefinir sua senha. Acesse seu e-mail para continuar."
      );
      router.replace("/"); // volta pra tela de login
    } catch (error: any) {
      console.error(error);
      if (error.code === "auth/user-not-found") {
        Alert.alert("Erro", "Usuário não encontrado.");
      } else if (error.code === "auth/invalid-email") {
        Alert.alert("Erro", "E-mail inválido.");
      } else {
        Alert.alert("Erro", "Não foi possível enviar o e-mail.");
      }
    }
  }

  function voltar() {
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
          <TouchableOpacity style={styles.btnIconVoltar} onPress={voltar}>
            <MaterialIcons size={24} name="arrow-back-ios" color="#2c3e50" />
          </TouchableOpacity>

          <Text style={styles.titulo}>Redefinir senha</Text>
          <Text style={styles.descricao}>
            Digite o e-mail da sua conta para receber o link de redefinição.
          </Text>

          <TextInput
            placeholder="email@dominio.com"
            style={styles.input}
            keyboardType="email-address"
            autoCapitalize="none"
            value={email}
            onChangeText={setEmail}
          />

          <TouchableOpacity style={styles.btnEnviar} onPress={handleReset}>
            <Text style={styles.btnText}>Enviar link</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={[styles.btnVoltar, { marginTop: 12 }]}
            onPress={voltar}
          >
            <Text style={styles.btnText}>Voltar</Text>
          </TouchableOpacity>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    padding: 24,
  },
  btnIconVoltar: {
    position: "absolute",
    top: 50,
    left: 20,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "600",
    marginBottom: 8,
    textAlign: "center",
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
    marginBottom: 16,
  },
  btnEnviar: {
    backgroundColor: "#2c3e50",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  btnVoltar: {
    backgroundColor: "#7f8c8d",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
  },
  btnText: {
    color: "#fff",
    fontWeight: "600",
  },
});
