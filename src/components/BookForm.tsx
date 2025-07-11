import React, { useState } from "react";
import { View, TextInput, Button, StyleSheet, Text } from "react-native";
import { Book } from "../../types/Book";
import { useTheme } from "../contexts/ThemeContext";

type Props = {
  initial?: Book;
  onSubmit: (book: Book) => void;
  submitLabel: string;
};

export default function BookForm({ initial, onSubmit, submitLabel }: Props) {
  const { colors } = useTheme();
  const [title, setTitle] = useState(initial?.title || "");
  const [pages, setPages] = useState(String(initial?.pages || ""));

  const handleSubmit = () => {
    const book: Book = { ...initial, title, pages: Number(pages) };
    onSubmit(book);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text style={[styles.label, { color: colors.text }]}>Título</Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: colors.card,
            color: colors.text,
            borderColor: colors.border,
          },
        ]}
        placeholder="Título"
        placeholderTextColor={colors.text}
        value={title}
        onChangeText={setTitle}
      />

      <Text style={[styles.label, { color: colors.text }]}>Páginas</Text>
      <TextInput
        style={[
          styles.input,
          {
            backgroundColor: colors.card,
            color: colors.text,
            borderColor: colors.border,
          },
        ]}
        placeholder="Páginas"
        placeholderTextColor={colors.text}
        value={pages}
        onChangeText={setPages}
        keyboardType="numeric"
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
  container: {
    padding: 24,
    flex: 1,
    justifyContent: "center",
  },
  label: {
    fontSize: 16,
    marginBottom: 4,
  },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 16,
    padding: 12,
    fontSize: 16,
  },
});
