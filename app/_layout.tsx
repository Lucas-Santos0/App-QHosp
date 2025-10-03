import { Stack } from "expo-router";

export default function RootLayout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* Telas fora das Tabs */}
      <Stack.Screen name="index" />
      <Stack.Screen name="cadastro" />

      {/* Tabs, só acessíveis após login */}
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
