import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Ask() {
  return (
    <View>
      <View>
        <Text>자주 묻는 질문</Text>
      </View>
      <View>
        <TextInput placeholder="제목 또는 내용을 검색" />
      </View>
      <View>{/* {자주묻는질문 , 서비스 안내,쿠폰/적립 } */}</View>
      <View>{/* {랜더링} */}</View>
    </View>
  );
}

const styles = StyleSheet.create({});
