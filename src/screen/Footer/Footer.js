import { StyleSheet, Text, View } from "react-native";
import React from "react";

export default function Footer() {
  return (
    <View style={styles.footContainer}>
      <View style={styles.footContainer2}>
        <View style={styles.footContainer3}>
          <Text style={styles.textStyle6}>동네세차</Text>
          <View style={styles.footContainer4}>
            <Text style={styles.textStyle7}>
              (주) 하늘타래 대표이사 : 한지오
            </Text>
            <Text style={styles.textStyle7}>개인정보책임자 : 윤석진</Text>
            <Text style={styles.textStyle7}>
              서울시 구로구 중앙로 6길 16, DMMC 캠퍼스타운 106호
            </Text>
          </View>
          <View>
            <Text style={styles.textStyle7}>사업자번호 : 176-88-02002</Text>
            <Text style={styles.textStyle7}>
              통신판매업신고번호 : 제 2022-서울서구로-1065호
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footContainer: {
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  footContainer2: {
    height: 250,
    width: 430,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "grey",
    marginBottom: 10,
    backgroundColor: "#F3F4F6",
  },
  footContainer3: { marginBottom: 20, marginTop: -30 },
  textStyle6: {
    color: "9CA3AF",
    fontWeight: "bold",
    fontSize: 20,
    marginBottom: 20,
  },
  footContainer4: { marginBottom: 20 },
  textStyle7: { color: "grey", fontSize: 13 },
  textService: { color: "white", fontWeight: "bold" },
  imageStyle: {
    width: "65%",
    height: 250,
  },
});
