import React, { useState } from "react";
import { View, TextInput, Button, Text, StyleSheet } from "react-native";
import useAuth from "../firebase/hooks/useAuth";

export default function RegisterScreen({ navigation }: any) {
  const { registerUser } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleRegister = async () => {
    try {
      await registerUser(email, password);
      alert("Usuário cadastrado com sucesso!");
      navigation.navigate("Books");
    } catch (err) {
  if (err instanceof Error) {
    alert("Erro ao cadastrar: " + err.message);
  } else {
    alert("Erro ao cadastrar.");
  }
}

  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastro</Text>
      <TextInput
        style={styles.input}
        placeholder="E-mail"
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button title="Cadastrar" onPress={handleRegister} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, justifyContent: "center" },
  title: { fontSize: 24, marginBottom: 20, textAlign: "center" },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
  },
});
