import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Review() {
  return (
    <View>
      <Text>작성한 리뷰</Text>
      <View>
        <TextInput placeholder="내가 쓴 리뷰" />
        <Text>총 12개</Text>
      </View>
      <View>
        {/* {프로필,차종류} */}
        {/* {별점} */}
        {/* {서비스 받은 내용} */}
        <Button title="삭제" />
        <View>{/* {더보기} */}</View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
