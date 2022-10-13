import { StatusBar } from "expo-status-bar";
import React from "react";
import { SafeAreaView, View } from "react-native";
import Navigation from "./src/navigation";
import { AuthProvider } from "./src/screen/Auth/AuthContext";
import { LogBox } from "react-native";
import { StyleSheet } from "react-native";

LogBox.ignoreLogs(["Sending"]);

export default function App() {
  return (
    <>
      <StatusBar style="auto" />
      <SafeAreaView style={styles.screen}>
        <Navigation />
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
});
