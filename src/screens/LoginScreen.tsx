import React from "react";
import { View, StyleSheet } from "react-native";
import useAuth from "../firebase/hooks/useAuth";
import { useTheme } from "../contexts/ThemeContext";
import Header from "../components/Header";
import { useNavigation } from "@react-navigation/native";
import AuthForm from "../components/AuthForm";

export default function LoginScreen() {
  const { login } = useAuth();
  const { colors } = useTheme();
  const navigation = useNavigation();

  const handleLogin = async (email: string, password: string) => {
    try {
      await login(email, password);
    } catch (err) {
      if (err instanceof Error) {
        alert("Erro ao entrar: " + err.message);
      } else {
        alert("Erro ao entrar.");
      }
    }
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header title="Entrar" onBack={() => navigation.goBack()} />
      <AuthForm onSubmit={handleLogin} submitLabel="Entrar" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
