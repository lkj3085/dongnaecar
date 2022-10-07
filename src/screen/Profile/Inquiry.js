import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Inquiry() {
  return (
    <View>
      <View>
        <Text>1:1 문의</Text>
        <Button title="문의하기" />
      </View>
      <View>{/* {문의 내용} */}</View>
      <View>{/* {더보기} */}</View>
    </View>
  );
}

const styles = StyleSheet.create({});
