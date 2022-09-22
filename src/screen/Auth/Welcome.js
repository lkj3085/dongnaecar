import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Welcome() {
  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <View style={{ marginBottom: 30 }}>
        <Image
          source={require("../../../assets/welcome.png")}
          resizeMode="cover"
          style={{ width: "100%", height: 400 }}
        />
      </View>
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          marginLeft: 20,
        }}
      >
        <Text
          style={{
            color: "#111827",
            fontSize: 25,
            fontWeight: "bold",
            marginBottom: 10,
          }}
        >
          동네세차
        </Text>
        <Text style={{ color: "#111827", fontSize: 25, fontWeight: "bold" }}>
          로그인 / 회원가입
        </Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
