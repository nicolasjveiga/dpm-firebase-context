import React from "react";
import { View, Text, FlatList, Button, StyleSheet } from "react-native";
import useCollection from "../firebase/hooks/useCollection";
import { Book } from "../../types/Book";
import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import useAuth from "../firebase/hooks/useAuth";
import { TouchableOpacity } from "react-native";

export default function BookListScreen({ navigation }: any) {
  const {
    data: books,
    loading,
    remove,
    refreshData,
  } = useCollection<Book>("books");
  const { logout } = useAuth();

  useFocusEffect(
    useCallback(() => {
      refreshData();
    }, [])
  );

  if (loading) return <Text>Carregando livros...</Text>;

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={logout}
        style={{ alignSelf: "flex-end", marginBottom: 10 }}
      >
        <Text style={{ color: "red", fontWeight: "bold" }}>Sair</Text>
      </TouchableOpacity>

      <FlatList
        data={books}
        keyExtractor={(item) => item.id || Math.random().toString()}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <View style={styles.cardContent}>
              <View style={styles.textContent}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.pages}>{item.pages} páginas</Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate("EditBook", { book: item })}
                style={styles.editButton}
              >
                <Text style={styles.editText}>Editar</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
      />

      <Button
        title="Novo Livro"
        onPress={() => navigation.navigate("NewBook")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 24,
    backgroundColor: "#f0f2f5",
  },
  card: {
    backgroundColor: "#ffffff",
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 20,
    fontWeight: "600",
    color: "#333",
    marginBottom: 8,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 12,
  },
  cardContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  textContent: {
    flex: 1,
  },
  pages: {
    color: "#555",
    fontSize: 14,
  },
  editButton: {
    backgroundColor: "#007bff",
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 6,
  },
  editText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
