import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo</Text>
      <View style={styles.buttons}>
        <Button title="Entrar" onPress={() => navigation.navigate("Login")} />
        <Button
          title="Cadastrar"
          onPress={() => navigation.navigate("Register")}
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
