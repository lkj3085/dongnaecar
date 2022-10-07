import { Button, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

export default function Coupon() {
  return (
    <View>
      <Text>Coupon</Text>

      <View>
        <TextInput placeholder="쿠폰 코드" />
        <Button title="쿠폰등록" />
      </View>
      <View>
        <Text>보유 쿠폰</Text>
      </View>
      <View>{/* {보유쿠폰랜더링} */}</View>
      <View>{/* {더보기} */}</View>
    </View>
  );
}

const styles = StyleSheet.create({});
