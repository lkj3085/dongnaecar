import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import Navigation from "./src/navigation";
import { AuthProvider } from "./src/screen/Auth/AuthContext";
import { LogBox } from "react-native";
LogBox.ignoreLogs(["Sending"]);

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
        <Navigation />
        <AuthProvider></AuthProvider>
      </SafeAreaView>
    </>
  );
}
