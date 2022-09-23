import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

export default function Welcome() {
  const navigation = useNavigation();

  return (
    <View style={styles.rootScreen}>
      <View style={styles.imageContainer}>
        <Image
          source={require("../../../assets/welcome.png")}
          resizeMode="cover"
          style={styles.imageStyle}
        />
      </View>
      <View style={styles.middleContainer}>
        <Text style={styles.textStyle}>동네세차</Text>
        <Text style={styles.textStyle2}>로그인 / 회원가입</Text>
      </View>
      <View style={styles.middleContainer2}>
        <View style={styles.middleScreen}>
          <TouchableOpacity style={styles.touchStyle}>
            <Text style={styles.kakaoText}>카카오톡으로 시작하기</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.textStyle3}>
          <TouchableOpacity
            style={styles.middleContainer2}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.loginText}>이메일로 로그인/회원가입</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
    backgroundColor: "white",
  },
  imageContainer: {
    marginBottom: 30,
  },
  middleContainer: {
    justifyContent: "center",
    alignContent: "center",
    marginLeft: 20,
  },
  textStyle: {
    color: "#111827",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textStyle2: { color: "#111827", fontSize: 25, fontWeight: "bold" },
  middleContainer2: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  middleScreen: {
    width: 350,
    height: 50,
    borderWidth: 1,
    marginBottom: 15,
  },
  touchStyle: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#000000",
  },
  textStyle3: {
    width: 350,
    height: 50,
    borderWidth: 1,
  },
  imageStyle: { width: "100%", height: 400 },
  kakaoText: { color: "white" },
  loginText: { color: "#000000" },
});
