import { Tabs } from 'expo-router';
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons'; // Importe outros ícones se necessário

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{ 
        headerShown: false,
        // (Mantenha ou remova as suas estilizações aqui)
        tabBarActiveTintColor: '#3498db',
        tabBarStyle: { backgroundColor: '#2c3e50', height: 100, borderTopWidth: 0 },
        tabBarLabelStyle: { fontSize: 12, fontWeight: '600', marginBottom: 5 },
      }}
    >

      {/* 1. ABA: INÍCIO */}
      <Tabs.Screen
        name="inicio" 
        options={{
          title: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="home" size={size} color={color} />
          ),
        }}
      />

      {/* 4. ABA: CONFIGURAÇÃO  */}
      <Tabs.Screen
        name="configuracao" 
        options={{
          title: 'Configurações',
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="settings" size={size} color={color} />
          ),
        }}
      />

      {/* 3. ABA: SOBRE */}
      <Tabs.Screen
        name="sobre" 
        options={{
          title: 'Sobre',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />

      {/* 4. ABA: CONTATO */}
      <Tabs.Screen
        name="contato" 
        options={{
          title: 'Contato', 
          tabBarIcon: ({ color, size }) => (
            <MaterialIcons name="email" size={size} color={color} />
          ),
        }}
      />
      
      
      
      
    </Tabs>
  );
}