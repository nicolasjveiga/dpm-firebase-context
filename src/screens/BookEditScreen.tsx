import React from "react";
import useCollection from "../firebase/hooks/useCollection";
import { Book } from "../../types/Book";
import BookForm from "../components/BookForm";

export default function BookEditScreen({ route, navigation }: any) {
  const { book } = route.params || {};
  const { create, update } = useCollection<Book>("books", false);

  const handleSubmit = async (newBook: Book) => {
    if (book?.id) {
      await update(book.id, newBook);
    } else {
      await create(newBook);
    }
    navigation.goBack();
  };

  return (
    <BookForm
      initial={book}
      onSubmit={handleSubmit}
      submitLabel={book ? "Atualizar" : "Cadastrar"}
    />
  );
}
