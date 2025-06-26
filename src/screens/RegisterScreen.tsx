import React from "react";
import { View, StyleSheet } from "react-native";
import useAuth from "../firebase/hooks/useAuth";
import { useTheme } from "../contexts/ThemeContext";
import Header from "../components/Header";
import AuthForm from "../components/AuthForm";

export default function RegisterScreen({ navigation }: any) {
  const { registerUser, login } = useAuth();
  const { colors } = useTheme();

  const handleRegister = async (email: string, password: string) => {
    try {
      await registerUser(email, password);
      await login(email, password);
      alert("Usuário cadastrado com sucesso!");
    } catch (err) {
      if (err instanceof Error) {
        alert("Erro ao cadastrar: " + err.message);
      } else {
        alert("Erro ao cadastrar.");
      }
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header title="Cadastro" onBack={() => navigation.goBack()} />
      <AuthForm onSubmit={handleRegister} submitLabel="Cadastrar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
