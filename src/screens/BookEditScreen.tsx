import React from "react";
import useCollection from "../firebase/hooks/useCollection";
import { Book } from "../../types/Book";
import BookForm from "../components/BookForm";
import { View, StyleSheet } from "react-native";
import { useTheme } from "../contexts/ThemeContext";
import Header from "../components/Header";

export default function BookEditScreen({ route, navigation }: any) {
  const { book } = route.params || {};
  const { create, update } = useCollection<Book>("books", false);
  const { colors } = useTheme();

  const handleSubmit = async (newBook: Book) => {
    if (book?.id) {
      await update(book.id, newBook);
    } else {
      await create(newBook);
    }
    navigation.goBack();
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header
        title={book ? "Editar Livro" : "Cadastrar Livro"}
        onBack={() => navigation.goBack()}
      />
      
      <BookForm
        initial={book}
        onSubmit={handleSubmit}
        submitLabel={book ? "Atualizar" : "Cadastrar"}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
