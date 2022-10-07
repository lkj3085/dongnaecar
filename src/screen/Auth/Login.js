import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
  Pressable,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const val = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 / 2, marginTop: 50, marginLeft: 20 }}>
        <Text style={{ marginBottom: 10, color: "grey", fontWeight: "bold" }}>
          STEP 1
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
          이메일로 로그인
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <Text>{val}</Text>
        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="이메일을 입력해주세요"
        />

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="비밀번호를 입력해주세요"
          secureTextEntry
        />

        <View style={{ width: 150 }}>
          <Button
            title="로그인"
            color={"#5628F5"}
            onPress={() => navigation.navigate("Home")}
          />
        </View>

        <View style={styles.registerContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate("회원가입");
            }}
          >
            <Text style={styles.link}>회원가입</Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

  input: {
    // width: 350,
    // height: 50,
    // marginBottom: 15,
    // borderWidth: 1,
    // borderColor: "#bbb",
    // borderRadius: 5,
    // paddingHorizontal: 14,
    width: 300,
    borderBottomWidth: 1,
    borderBottomColor: "grey",
    marginBottom: 25,
  },
  registerContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  link: {
    color: "blue",
  },
});

export default Login;
