import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, StyleSheet, KeyboardAvoidingView, ScrollView, Platform } from "react-native";

export default function Contato() {
  const [email, setEmail] = useState('');
  const [assunto, setAssunto] = useState('');
  const [mensagem, setMensagem] = useState('');

  const limparCampos = () => {
    setEmail('');
    setAssunto('');
    setMensagem('');
  };

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ScrollView contentContainerStyle={styles.container} keyboardShouldPersistTaps="handled">
        <Text style={styles.logo}>Contato</Text>
        <Text style={styles.subtitulo}>Mande um Email para nós</Text>

        <Text style={styles.descricao}>
          Preencha os respectivos campos para nos contatar
        </Text>

        <TextInput
          placeholder="email@dominio.com"
          style={styles.input}
          keyboardType="email-address"
          value={email}
          onChangeText={setEmail}
          autoCapitalize="none"
        />

        <TextInput
          placeholder="Assunto"
          style={styles.input}
          value={assunto}
          onChangeText={setAssunto}
        />

        <TextInput
          placeholder="Mensagem"
          style={styles.inputMensagem}
          value={mensagem}
          onChangeText={setMensagem}
          multiline={true}
          numberOfLines={6}
          textAlignVertical="top"
        />

        <TouchableOpacity style={styles.btnEnviar}>
          <Text style={styles.btnText}>Enviar</Text>
        </TouchableOpacity>

        <TouchableOpacity 
          style={[styles.btnLimpar, { backgroundColor: '#34495e' }]} 
          onPress={limparCampos}
        >
          <Text style={styles.btnText}>Limpar</Text>
        </TouchableOpacity>
      </ScrollView>
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
  descricao: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
    textAlign: "left",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
  },
  inputMensagem: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    padding: 12,
    marginBottom: 16,
    textAlign: "left",
    height: 120,
  },
  btnEnviar: {
    backgroundColor: "#2c3e50",
    padding: 14,
    borderRadius: 8,
    alignItems: "center",
    marginBottom: 16,
  },
  btnLimpar: {
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
