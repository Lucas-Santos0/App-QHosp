import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";
import { router } from 'expo-router';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  function continuar() {
    if(email === 'usuario@gmail.com' && senha === '123456'){
      router.replace('/(tabs)/inicio');
    } else {
      Alert.alert('Erro', 'Email ou senha incorretos');
    }
  }

  function irParaCadastro() {
    router.push('/cadastro');
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

          <TextInput
            placeholder="email@dominio.com"
            style={styles.input}
            keyboardType="email-address"
            value={email}
            onChangeText={setEmail}
            autoCapitalize="none"
          />

          <TextInput
            placeholder="Senha"
            style={styles.input}
            secureTextEntry={true}
            value={senha}
            onChangeText={setSenha}
          />

          <TouchableOpacity style={styles.btnContinuar} onPress={continuar}>
            <Text style={styles.btnText}>Continuar</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.btnContinuar, {backgroundColor: '#34495e'}]} onPress={irParaCadastro}>
            <Text style={styles.btnText}>Cadastre-se</Text>
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
});
