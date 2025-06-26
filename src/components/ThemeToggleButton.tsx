import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import { Ionicons } from "@expo/vector-icons";

export default function ThemeToggleButton() {
  const { toggleTheme, theme, colors } = useTheme();

  return (
    <TouchableOpacity
      onPress={toggleTheme}
      style={[
        styles.button,
        { backgroundColor: colors.primary, borderColor: colors.border },
      ]}
    >
      <Ionicons
        name={theme === "light" ? "moon" : "sunny"}
        size={20}
        color={colors.text}
      />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
  },
});
