import React from "react";
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet } from "react-native";

export default function Sobre() {
    return(
      <View style={styles.container}>
            
            <Text style={styles.titulo}>Sobre</Text>
            <View style={styles.divider}>
              <View style={styles.line} />
            </View>
            <Text style={styles.subtitulo}>Funcionarios:</Text>
            <Text style={styles.descricao}>5 cirurgiões, 3 ortopedistas</Text>


            <View style={styles.divider}>
              <View style={styles.line} />
            </View>

            <Text style={styles.subtitulo}>Horario:</Text>
            <Text style={styles.descricao}>Seg - Dom</Text>
           
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
        titulo: {
          fontSize: 32,
          fontWeight: "bold",
          color: "#000000ff",
          textAlign: "center",
        },
        subtitulo: {
          textAlign: "center",
          fontSize: 14,
          color: "#000000ff",
        },
        
        descricao: {
          fontSize: 14,
          color: "#555",
          marginBottom: 16,
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