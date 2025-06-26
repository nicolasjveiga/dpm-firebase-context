import React, { useState, useEffect } from "react";
import { View, TextInput, Button, StyleSheet } from "react-native";
import { Book } from "../../types/Book";

type Props = {
  initial?: Book;
  onSubmit: (book: Book) => void;
  submitLabel: string;
};

export default function BookForm({ initial, onSubmit, submitLabel }: Props) {
  const [title, setTitle] = useState(initial?.title || "");
  const [pages, setPages] = useState(String(initial?.pages || ""));

  const handleSubmit = () => {
    const book: Book = { ...initial, title, pages: Number(pages) };
    onSubmit(book);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Título"
        value={title}
        onChangeText={setTitle}
      />
      <TextInput
        style={styles.input}
        placeholder="Páginas"
        value={pages}
        onChangeText={setPages}
        keyboardType="numeric"
      />
      <Button title={submitLabel} onPress={handleSubmit} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { marginVertical: 20 },
  input: {
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    padding: 10,
    fontSize: 16,
  },
});
