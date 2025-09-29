import { Tabs } from 'expo-router'
import { MaterialIcons } from '@expo/vector-icons'

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarLabel: route.name === 'Inicio' ? 'Início' : route.name,
        tabBarIcon: ({ color, size }) => {
          if (route.name === 'Inicio') {
            return <MaterialIcons name="home" size={size} color={color} />
          }
          return null
        }
      })}
    />
  )
}
