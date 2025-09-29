import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, Alert } from "react-native";
import { router } from 'expo-router';

export default function Cadastro() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [confirmarSenha, setConfirmarSenha] = useState('');

  function continuar() {
    Alert.alert('Usuário cadastrado com sucesso');
    router.replace('/inicio');  // Navega para a tela de login (index.tsx)
  }

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>Qhosp</Text>
      <Text style={styles.subtitulo}>gestão e suporte hospitalar</Text>

      <Text style={styles.titulo}>Criar uma conta</Text>
      <Text style={styles.descricao}>Insira seu e-mail e uma senha para se cadastrar neste aplicativo</Text>

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
        autoCapitalize="none"
      />

      <TextInput
        placeholder="Confirmar Senha"
        style={styles.input}
        secureTextEntry={true}
        value={confirmarSenha}
        onChangeText={setConfirmarSenha}
        autoCapitalize="none"
      />

      <TouchableOpacity style={styles.btnContinuar} onPress={continuar}>
        <Text style={styles.btnText}>Continuar</Text>
      </TouchableOpacity>

      <View style={styles.divider}>
        <View style={styles.line} />
        <Text style={styles.dividerText}>ou</Text>
        <View style={styles.line} />
      </View>

      <TouchableOpacity style={[styles.btnSocial, styles.google]}>
        <Image
          source={{ uri: "https://www.svgrepo.com/show/475656/google-color.svg" }}
          style={styles.socialIcon}
        />
        <Text style={styles.btnText}>Continuar com o Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={[styles.btnSocial, styles.apple]}>
        <Image
          source={{ uri: "https://www.svgrepo.com/show/303128/apple-logo.svg" }}
          style={styles.socialIcon}
        />
        <Text style={styles.btnText}>Continuar com a Apple</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
    backgroundColor: "#DB4437",
  },
  apple: {
    backgroundColor: "#000",
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
});
