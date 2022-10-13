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
  const [name, setName] = useState(null);
  const [phone, setPhone] = useState(null);
  const val = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={{ flex: 1 / 2, marginTop: 50, marginLeft: 20 }}>
        <Text style={{ marginBottom: 10, color: "grey", fontWeight: "bold" }}>
          STEP 2
        </Text>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>회원가입</Text>
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
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="이름"
        />
        <TextInput
          style={styles.input}
          value={phone}
          onChangeText={(text) => setPhone(text)}
          placeholder="인증번호"
        />
        <Button title="인증하기" />
        <Text>서비스 이용약관 동의</Text>
        <Text>개인정보 처리방침 동의</Text>
        <Text>마케팅 정보수신 동의</Text>
        <View style={styles.registerContainer}>
          <Pressable
            onPress={() => {
              navigation.navigate("Home");
            }}
          >
            <Text style={styles.link}>가입하기</Text>
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
