import {
  View,
  Text,
  TextInput,
  Button,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import React, { useContext, useState } from "react";
import { AuthContext } from "./AuthContext";

const Register = ({ navigation }) => {
  const [name, setName] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);

  const { register } = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <View style={styles.wrapper}>
        <Text>{val}</Text>
        <TextInput
          style={styles.input}
          value={name}
          onChangeText={(text) => setName(text)}
          placeholder="Name"
        />

        <TextInput
          style={styles.input}
          value={email}
          onChangeText={(text) => setEmail(text)}
          placeholder="Email"
        />

        <TextInput
          style={styles.input}
          value={password}
          onChangeText={(text) => setPassword(text)}
          placeholder="Password"
          secureTextEntry
        />

        <Button
          title="로그인"
          onPress={() => {
            register(name, email, password);
          }}
        />

        <View style={styles.registerContainer}></View>
      </View>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  wrapper: {
    width: "80%",
  },
  input: {
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#bbb",
    borderRadius: 5,
    paddingHorizontal: 14,
  },
  registerContainer: {
    flexDirection: "row",
    marginTop: 20,
  },
  link: {
    color: "blue",
  },
});
