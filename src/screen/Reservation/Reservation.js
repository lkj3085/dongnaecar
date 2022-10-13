import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
} from "react-native";

const Reservation = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.myreservationContainer}>
        <Text style={styles.myreservationText}>나의 예약</Text>
      </View>
      <View style={styles.reservatingContainer}>
        <Text style={styles.reservatingText}>진행중인 예약</Text>
        <Text style={styles.reservatingNumber}>1</Text>
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
      </ScrollView>
    </View>
  );
};

export default Reservation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  myreservationContainer: {
    marginTop: 35,
    marginLeft: 15,
  },
  myreservationText: {
    fontWeight: "bold",
    fontSize: 30,
  },
  reservatingContainer: {
    marginTop: 20,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    height: 60,
  },
  reservatingText: {
    marginTop: 15,
    marginLeft: 45,
    fontWeight: "bold",
  },
  reservatingNumber: {
    marginTop: 9,
    marginRight: 50,
    fontSize: 20,
    color: "#5628F4",
    fontWeight: "bold",
  },
  cardContainer: {
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  cardViewContainer: {
    marginTop: 25,
    width: 120 * 2.5,
    height: 130,
    backgroundColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    borderColor: "#5628F4",
  },
});
