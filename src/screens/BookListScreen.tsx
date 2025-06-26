import React, { useCallback } from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import useCollection from "../firebase/hooks/useCollection";
import { Book } from "../../types/Book";
import useAuth from "../firebase/hooks/useAuth";
import { useFocusEffect } from "@react-navigation/native";
import { useTheme } from "../contexts/ThemeContext";
import Header from "../components/Header";

export default function BookListScreen({ navigation }: any) {
  const { data: books, loading, refreshData } = useCollection<Book>("books");
  const { logout } = useAuth();
  const { colors } = useTheme();

  useFocusEffect(
    useCallback(() => {
      refreshData();
    }, [])
  );

  if (loading)
    return <Text style={{ color: colors.text }}>Carregando livros...</Text>;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Header title="Meus Livros" onLogout={logout} />

      <FlatList
        data={books}
        keyExtractor={(item) => item.id || Math.random().toString()}
        renderItem={({ item }) => (
          <View
            style={[
              styles.card,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
          >
            <Text style={[styles.title, { color: colors.text }]}>
              {item.title}
            </Text>
            <View style={styles.row}>
              <Text style={{ color: colors.text }}>{item.pages} páginas</Text>
              <View style={styles.buttons}>
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("EditBook", { book: item })
                  }
                >
                  <Text style={{ color: colors.primary, fontWeight: "bold" }}>
                    Editar
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      />

      <TouchableOpacity
        style={[styles.newBookButton, { backgroundColor: colors.primary }]}
        onPress={() => navigation.navigate("NewBook")}
      >
        <Text
          style={{
            color: colors.text,
            fontWeight: "bold",
            textAlign: "center",
          }}
        >
          Novo Livro
        </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    borderRadius: 12,
    padding: 16,
    margin: 16,
    borderWidth: 1,
  },
  newBookButton: {
    padding: 12,
    borderRadius: 8,
    margin: 16,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 6,
  },
  buttons: {
    marginTop: 12,
  },
});
