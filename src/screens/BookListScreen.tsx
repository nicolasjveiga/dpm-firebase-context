import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import useCollection from "../firebase/hooks/useCollection";
import { Book } from "../../types/Book";

export default function BookListScreen({ navigation }: any) {
  const { data: books, loading, remove } = useCollection<Book>("books");

  if (loading) return <Text>Carregando livros...</Text>;

  return (
    <View style={styles.container}>
      <FlatList
        data={books}
        keyExtractor={(item) => item.id || Math.random().toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.title}>{item.title}</Text>
            <Text>{item.pages} páginas</Text>
            <View style={styles.buttons}>
              <Button title="Editar" onPress={() => navigation.navigate("EditBook", { book: item })} />
              <Button title="Remover" onPress={() => remove(item.id!)} />
            </View>
          </View>
        )}
      />
      <Button title="Novo Livro" onPress={() => navigation.navigate("NewBook")} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  card: {
    borderWidth: 1,
    borderRadius: 8,
    padding: 15,
    marginBottom: 10,
    backgroundColor: "#f5f5f5",
  },
  title: { fontSize: 18, fontWeight: "bold" },
  buttons: { flexDirection: "row", justifyContent: "space-between", marginTop: 10 },
});
