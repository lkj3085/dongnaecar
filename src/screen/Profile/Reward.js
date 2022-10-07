import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Reward({ navigation }) {
  return (
    <View>
      <Text>적립금</Text>
      <View>
        <TextInput placeholder="사용 가능 적립금" />
        <Text>10.500원</Text>
      </View>
      <View>{/* {적립금 내역 랜더링} */}</View>
      <View>{/* {더보기} */}</View>
    </View>
  );
}

const styles = StyleSheet.create({});
