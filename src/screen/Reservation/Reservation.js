import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import styles from "./styles";

const Reservation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.myreservationContainer}>
        <Text style={styles.myreservationText}>나의 예약</Text>
      </View>
      <View style={styles.reservatingContainer}>
        <Text style={styles.reservatingText}>진행중인 예약</Text>
        <Text style={styles.reservatingNumber}>3</Text>
      </View>
      {/* <Text
        style={{ letterSpacing: 5, textAlign: "center", color: "lightgrey" }}
      >
        ----------------------------------
      </Text> */}
      <ScrollView showsVerticalScrollIndicator={false}>
        <TouchableOpacity
          style={styles.cardContainer}
          onPress={() => navigation.navigate("예약 상세")}
        >
          <View style={styles.cardViewContainer}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={styles.cardViewContainer}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={styles.cardViewContainer}></View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.cardContainer}>
          <View style={styles.cardViewContainer}></View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Reservation;
