import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";

export default function Sobre() {
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
          <Text style={styles.titulo}>Informações</Text>
          <View style={styles.divider} />

          <Text style={styles.subtitulo}>Funcionamento Hospitalar</Text>
          <Text style={styles.descricao}>
            TEXTO
          </Text>

          <View style={styles.divider} />

          <Text style={styles.subtitulo}>Sobre nós</Text>
          <Text style={styles.descricao}>
            O Qhosp é um projeto desenvolvido com o objetivo principal de contribuir para 
            a melhoria da organização hospitalar, reduzindo a superlotação e facilitando o 
            dia a dia de quem precisa frequentar esses ambientes. A proposta visa melhorar o
            direcionamento dos usuários ao sistema de saúde e promover mais transparência 
            na relação entre pacientes e hospitais.
          </Text>

          <Text style={styles.descricao}>
            A plataforma é composta por um site e um aplicativo integrados, cada um com 
            funções específicas: o site é voltado à gestão hospitalar, permitindo maior 
            controle e planejamento por parte das instituições, enquanto o aplicativo é 
            direcionado ao suporte ao paciente, oferecendo informações úteis para uma 
            tomada de decisão mais consciente.
          </Text>

          <Text style={styles.descricao}>
            A ideia surgiu diante da crescente superlotação nos hospitais públicos, que 
            afeta a qualidade do atendimento e a eficiência dos serviços de saúde. Com o 
            Qhosp, pretende-se reduzir deslocamentos desnecessários, aumentar a satisfação 
            dos usuários, otimizar a gestão hospitalar e oferecer dados atualizados sobre 
            ocupação, localização de hospitais, número de funcionários disponíveis, serviços 
            oferecidos, horários de pico, comentários de usuários, entre outros.
          </Text>

          <Text style={styles.descricao}>
            O público-alvo inclui tanto os usuários do SUS quanto gestores e profissionais 
            das instituições hospitalares, tornando o projeto relevante e aplicável ao 
            contexto atual da saúde pública brasileira.
          </Text>

          <Text style={styles.descricao}>
            Com o Qhosp, as visitas aos hospitais tornam-se menos estressantes e muito mais informadas!
          </Text>

          <Text style={styles.subtitulo}>Desenvolvido por:</Text>
          <Text style={styles.autores}>• Lucas Maurício</Text>
          <Text style={styles.autores}>• Lucas Santos</Text>
          <Text style={styles.autores}>• Mariana Patrício</Text>
          <Text style={styles.autores}>• Olivia Atanagildo</Text>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 24,
    backgroundColor: "#f9f9f9",
    justifyContent: "flex-start",
  },
  titulo: {
    fontSize: 34,
    fontWeight: "bold",
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 20,
  },
  subtitulo: {
    textAlign: "center",
    fontSize: 20,
    fontWeight: "600",
    color: "#34495e",
    marginBottom: 12,
    marginTop: 16,
  },
  descricao: {
    fontSize: 15,
    color: "#555",
    marginBottom: 16,
    lineHeight: 22,
    textAlign: "justify",
  },
  autores: {
    fontSize: 15,
    color: "#2c3e50",
    textAlign: "center",
    marginBottom: 6,
    fontWeight: "500",
  },
  divider: {
    height: 1,
    backgroundColor: "#dcdcdc",
    marginVertical: 16,
  },
});
