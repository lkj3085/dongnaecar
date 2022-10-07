import { View, Text, TextInput, Button } from "react-native";
import React from "react";

const Mycar = () => {
  return (
    <View>
      <View>
        <Text>나의 차량</Text>
      </View>
      <View>
        <TextInput placeholder="등록 차량" />
        <Text>8대</Text>
      </View>
      <View>{/* {보유 차량 랜더} */}</View>
      <Button title="차량 등록하기" />
    </View>
  );
};

export default Mycar;
