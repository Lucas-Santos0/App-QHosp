import { View, Text, StyleSheet, Pressable } from 'react-native'
import { router } from 'expo-router'

export default function Inicio() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à tela Inicial</Text>
      <Pressable onPress={() => router.replace('/')} style={styles.button}>
        <Text style={styles.buttonText}>Sair (Logout)</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center', padding: 20 },
  title: { fontSize: 24, marginBottom: 20, textAlign: 'center' },
  button: { backgroundColor: 'red', padding: 12, borderRadius: 6 },
  buttonText: { color: '#fff', fontWeight: 'bold' }
})
