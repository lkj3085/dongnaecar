import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function AreaGuide() {
  return (
    <View>
      <Text>AreaGuide</Text>
      <Text> 모달로 가능 지역 안내</Text>
      <Text>
        서울 : 마포구,서대문구,송파구,강남구,중구,은평구,강동구,중랑구,동대문구
      </Text>
      <Text> 인천 : 계양구,연수구,미추홀구</Text>
    </View>
  );
}

const styles = StyleSheet.create({});
