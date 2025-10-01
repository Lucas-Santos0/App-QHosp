import React from "react";
import { View, Text, StyleSheet, KeyboardAvoidingView, ScrollView, Platform, TouchableWithoutFeedback, Keyboard } from "react-native";

export default function Configuracao() {
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
          <Text style={styles.titulo}>Ficha médica</Text>

          <View style={styles.divider}>
            <View style={styles.line} />
          </View>

          <Text style={styles.subtitulo}>Funcionários:</Text>
          <Text style={styles.descricao}>5 cirurgiões, 3 ortopedistas</Text>

          <View style={styles.divider}>
            <View style={styles.line} />
          </View>

          <Text style={styles.subtitulo}>Horário:</Text>
          <Text style={styles.descricao}>Seg - Dom</Text>
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
  titulo: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#000",
    textAlign: "center",
  },
  subtitulo: {
    textAlign: "center",
    fontSize: 14,
    color: "#000",
    marginBottom: 8,
  },
  descricao: {
    fontSize: 14,
    color: "#555",
    marginBottom: 16,
    textAlign: "center",
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
});
