import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  ScrollView,
  Pressable,
  Image,
} from "react-native";
import { Octicons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        <Pressable
          style={styles.profileImage}
          onPress={() => console.log("click")}
        >
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
            onPress={() => navigation.navigate("Reservation")}
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
      {/*  */}
      <ScrollView
        style={styles.scrollviewContainer}
        showsVerticalScrollIndicator={false}
        alwaysBounceHorizontal={false}
        alwaysBounceVertical={false}
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
            <Text style={{ letterSpacing: 2, color: "red" }}>로그아웃</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;
