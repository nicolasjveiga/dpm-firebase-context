import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { useTheme } from "../contexts/ThemeContext";

type Props = {
  onSubmit: (email: string, password: string) => void;
  submitLabel: string;
};

export default function AuthForm({ onSubmit, submitLabel }: Props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { colors } = useTheme();

  const handleSubmit = () => {
    onSubmit(email, password);
  };

  return (
    <View style={styles.formWrapper}>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: colors.card,
            color: colors.text,
            borderColor: colors.border,
          },
        ]}
        placeholder="E-mail"
        placeholderTextColor={colors.text}
        onChangeText={setEmail}
        value={email}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: colors.card,
            color: colors.text,
            borderColor: colors.border,
          },
        ]}
        placeholder="Senha"
        placeholderTextColor={colors.text}
        onChangeText={setPassword}
        value={password}
        secureTextEntry
      />
      <Button
        title={submitLabel}
        onPress={handleSubmit}
        color={colors.primary}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  formWrapper: {
    flex: 1,
    justifyContent: "center",
    padding: 24,
    gap: 16,
  },
  input: {
    borderWidth: 1,
    borderRadius: 10,
    padding: 12,
    fontSize: 16,
  },
});
