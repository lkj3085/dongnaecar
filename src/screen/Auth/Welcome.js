import {
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
  Platform,
} from "react-native";
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
          <Pressable style={styles.touchStyle}>
            <Text style={styles.appleText}>Apple로 시작하기</Text>
          </Pressable>
        </View>
        <View style={styles.middleScreen}>
          <Pressable style={styles.touchStyle2}>
            <Text style={styles.kakaoText}>카카오톡으로 시작하기</Text>
          </Pressable>
        </View>
        <View style={styles.textStyle3}>
          <Pressable style={styles.middleContainer2}>
            <Text style={styles.loginText}>Google로 시작하기</Text>
          </Pressable>
        </View>

        <View style={styles.textStyle3}>
          <Pressable
            style={styles.middleContainer2}
            onPress={() => navigation.navigate("로그인")}
          >
            <Text style={styles.loginText}>이메일로 로그인 / 회원가입</Text>
          </Pressable>
        </View>
        <View style={styles.textStyle3}>
          <Pressable
            style={styles.middleContainer2}
            onPress={() => navigation.navigate("Home")}
          >
            <Text style={styles.loginText}>둘러보기</Text>
          </Pressable>
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
  imageContainer: {},
  middleContainer: {
    margin: 10,
    alignContent: "center",
    marginLeft: 20,
  },
  textStyle: {
    color: "#111827",
    fontSize: 25,
    fontWeight: "bold",
    marginBottom: 10,
  },
  textStyle2: { color: "#111827", fontSize: 20, fontWeight: "bold" },
  middleContainer2: {
    flex: 1,
    justifyContent: "center",

    alignItems: "center",
  },
  middleScreen: {
    width: 350,
    height: 50,
    borderWidth: 1,
    marginBottom: 5,
  },
  touchStyle: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#000000",
  },
  touchStyle2: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    flex: 1,
    backgroundColor: "#FEE500",
  },
  textStyle3: {
    width: 350,
    height: 50,
    borderWidth: 1,
    marginBottom: 10,
  },
  imageStyle: { width: "100%", height: 350 },
  appleText: { color: "white", fontWeight: "bold" },
  kakaoText: { color: "black", fontWeight: "bold" },
  loginText: { color: "#000000" },
});
