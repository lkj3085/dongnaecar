import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Notice() {
  return (
    <View>
      <View>
        <Text>공지사항</Text>
      </View>
      <View>
        <TextInput placeholder="신규고객" />
      </View>
      <View>
        <Text>검색결과</Text>
      </View>
      <View>{/* {공지사항 내역} */}</View>
    </View>
  );
}

const styles = StyleSheet.create({});
