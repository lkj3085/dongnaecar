import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView } from "react-native";
import Navigation from "./src/navigation";
import { AuthProvider } from "./src/screen/Auth/AuthContext";

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={{ flex: 1, paddingTop: 20 }}>
        {/* <AuthProvider> */}
        <Navigation />
        {/* </AuthProvider> */}
      </SafeAreaView>
    </>
  );
}
