import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

export default function WelcomeScreen({ navigation }: any) {
  const { colors } = useTheme();

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.title, { color: colors.text }]}>Bem-vindo</Text>
      <View style={styles.buttons}>
        <Button
          title="Entrar"
          onPress={() => navigation.navigate("Login")}
          color={colors.primary}
        />
        <Button
          title="Cadastrar"
          onPress={() => navigation.navigate("Register")}
          color={colors.primary}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: { fontSize: 26, marginBottom: 40, fontWeight: "bold", color: "#333" },
  buttons: { gap: 10, width: "100%" },
});
