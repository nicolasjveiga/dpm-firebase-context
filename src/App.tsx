import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import firebaseConfig from "./firebase/config/firebaseConfig";
import useFirebase from "./firebase/hooks/useFirebase";
import useAuth from "./firebase/hooks/useAuth";

import WelcomeScreen from "./screens/WelcomeScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import BookListScreen from "./screens/BookListScreen";
import BookEditScreen from "./screens/BookEditScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const app = useFirebase(firebaseConfig);
  const { user, loading } = useAuth();

  if (!app || loading) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {!user ? (
          <>
            <Stack.Screen name="Welcome" component={WelcomeScreen} />
            <Stack.Screen name="Login" component={LoginScreen} />
            <Stack.Screen name="Register" component={RegisterScreen} />
          </>
        ) : (
          <>
            <Stack.Screen name="Books" component={BookListScreen} />
            <Stack.Screen name="NewBook" component={BookEditScreen} />
            <Stack.Screen name="EditBook" component={BookEditScreen} />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}
