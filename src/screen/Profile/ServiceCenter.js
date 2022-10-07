import { Button, StyleSheet, Text, View } from "react-native";
import React from "react";

export default function ServiceCenter() {
  return (
    <View>
      <View>
        <Text>고객센터</Text>
      </View>
      <View>
        <Text>구금한 점이 있으신가요</Text>
        <Text>1:1 문의 남겨주시면 답변</Text>
      </View>
      <Button title="1:1 온라인 문의" />
      <View>{/* {쳇봇} */}</View>
    </View>
  );
}

const styles = StyleSheet.create({});
