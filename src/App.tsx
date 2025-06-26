import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import firebaseConfig from "./firebase/config/firebaseConfig";
import useFirebase from "./firebase/hooks/useFirebase";

import RegisterScreen from "./screens/RegisterScreen";
import BookListScreen from "./screens/BookListScreen";
import BookEditScreen from "./screens/BookEditScreen";

const Stack = createNativeStackNavigator();

export default function App() {
  const app = useFirebase(firebaseConfig);

  if (!app) return null;

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Register">
        <Stack.Screen name="Register" component={RegisterScreen} />
        <Stack.Screen name="Books" component={BookListScreen} />
        <Stack.Screen name="NewBook" component={BookEditScreen} />
        <Stack.Screen name="EditBook" component={BookEditScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
