import React, { useEffect, useState } from "react";
import { View, ActivityIndicator } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../services/firebaseConfig"; // Ensure this path is correct


import { auth } from "../services/firebaseConfig"; // Update this path based on your structure
import TabNavigator from "./tabNavigator"; // Main Tab Navigator
import SignIn from "../app/(tabs)/signIn"; // Correct path to the SignIn screen

export default function RootNavigator() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    });
    return unsubscribe; // Cleanup on unmount
  }, []);

  // Show a loading spinner while determining authentication status
  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // Show the appropriate navigator based on authentication status
  return (
    <NavigationContainer>
      {user ? <TabNavigator /> : <SignIn />}
    </NavigationContainer>
  );
}