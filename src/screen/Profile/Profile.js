import React, { createRef, useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Image,
  Platform,
  StyleSheet,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import Footer from "../Footer/Footer";

const Profile = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Pressable style={styles.profileImage}>
          <Image
            source={require("../../../assets/profile.png")}
            resizeMode="cover"
            style={{ width: "100%", height: "100%" }}
          />
        </Pressable>

        <View>
          <Text style={styles.profileName}>김새차님</Text>
        </View>
        <View style={styles.middleContainer}>
          <Pressable
            style={styles.reservationContainer}
            onPress={() => navigation.navigate("예약내역")}
          >
            <Text style={styles.reservationText}>예약내역</Text>
          </Pressable>
          <Pressable
            style={styles.mycarContainer}
            onPress={() => navigation.navigate("나의 차량")}
          >
            <Text style={styles.mycarText}>나의 차량</Text>
          </Pressable>
        </View>
        <View style={styles.middleContainer1}>
          <Pressable
            style={styles.couponContainer}
            onPress={() => navigation.navigate("Coupon")}
          >
            <Text style={styles.couponText}>쿠폰</Text>
            <Text style={styles.couponNumber}>11장</Text>
          </Pressable>
          <Pressable
            style={styles.rewordContainer}
            onPress={() => navigation.navigate("Reward")}
          >
            <Text style={styles.rewordText}>적립금</Text>
            <Text style={styles.rewordNumber}>4,500원</Text>
          </Pressable>
        </View>
      </View>

      <ScrollView
        style={styles.scrollviewContainer}
        showsVerticalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
        pagingEnabled
      >
        <View style={styles.scrollviewContainer1}>
          <View
            style={{
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: "lightgrey",
            }}
          >
            <TouchableOpacity
              style={{ margin: 12 }}
              onPress={() => navigation.navigate("Correction")}
            >
              <Text>개인 정보 수정</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 12 }}
              onPress={() => navigation.navigate("Coupon")}
            >
              <Text>보유 쿠폰</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 12 }}
              onPress={() => navigation.navigate("Reward")}
            >
              <Text>보유 적립금</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 12 }}
              onPress={() => navigation.navigate("Review")}
            >
              <Text>작성한 리뷰</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 12 }}
              onPress={() => navigation.navigate("Inquiry")}
            >
              <Text>1:1 문의</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              marginBottom: 10,
              borderBottomWidth: 1,
              borderBottomColor: "lightgrey",
            }}
          >
            <TouchableOpacity
              style={{ margin: 12 }}
              onPress={() => navigation.navigate("Notice")}
            >
              <Text>공지사항</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 12 }}
              onPress={() => navigation.navigate("Ask")}
            >
              <Text>자주 묻는 질문</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{ margin: 12 }}
              onPress={() => navigation.navigate("ServiceCenter")}
            >
              <Text>고객센터</Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={{ margin: 12 }}>
            <Text style={{ letterSpacing: 1, color: "red" }}>로그아웃</Text>
          </TouchableOpacity>
        </View>
        <Footer />
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    justifyContent: "center",
    alignContent: "center",
  },
  container1: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
  profileImage: {
    flex: 1,
    height: 100,
    width: 120,
    marginLeft: 135,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  gearContainer: {
    height: 100,
    width: 100,
    borderRadius: 60,
    backgroundColor: "white",
  },
  gearContainer1: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 80,
    marginLeft: 85,
    backgroundColor: "white",
    borderRadius: 20,
    marginRight: 1,
  },
  profileName: {
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 22,
    marginLeft: Platform.OS === "android" ? 15 : -20,
    marginTop: Platform.OS === "android" ? 15 : 25,
  },
  middleContainer: {
    flex: 1,
    justifyContent: "space-evenly",
    alignContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },
  reservationContainer: {
    height: 60,
    width: 150,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#fff",
    backgroundColor: "black",
  },
  reservationText: {
    textAlign: "center",
    fontSize: 16,
    color: "white",
    margin: 18,
    fontWeight: "bold",
  },
  mycarContainer: {
    height: 60,
    width: 150,
    borderRadius: 50,
    backgroundColor: "white",
  },
  mycarText: {
    textAlign: "center",
    fontSize: 17,
    margin: 17,
    fontWeight: "bold",
  },
  middleContainer1: {
    justifyContent: "space-evenly",
    flexDirection: "row",
    color: "grey",
  },
  couponContainer: {
    width: 90 * 1.8,
    height: 80,
    backgroundColor: "white",
    justifyContent: "center",
  },
  couponText: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 25,
    fontSize: 17,
  },
  couponNumber: {
    fontWeight: "bold",
    textAlign: "center",
    margin: 12,
  },
  rewordContainer: {
    justifyContent: "center",
    width: 90 * 1.8,
    height: 80,
    backgroundColor: "white",
  },
  rewordText: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 24,
    fontSize: 17,
  },
  rewordNumber: {
    fontWeight: "bold",
    textAlign: "center",
    margin: 12,
  },
  scrollviewContainer: {
    flex: 1,
    margin: 5,
  },
  scrollviewContainer1: {
    marginHorizontal: 5,
    backgroundColor: "white",
  },
});
