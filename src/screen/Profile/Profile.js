import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { Octicons } from "@expo/vector-icons";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <View style={styles.container1}>
        {/*  */}
        <View style={styles.profileImage}>
          <View style={styles.gearContainer}>
            <TouchableOpacity
              style={styles.gearContainer1}
              onPress={() => navigation.navigate("프로필 상세")}
            >
              <Octicons name="gear" size={28} color="black" />
            </TouchableOpacity>
            <Text style={styles.profileName}>김새차님</Text>
          </View>
          {/*  */}
          <View style={styles.middleContainer}>
            <TouchableOpacity
              style={styles.reservationContainer}
              onPress={() => navigation.navigate("예약내역")}
            >
              <Text style={styles.reservationText}>예약내역</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.mycarContainer}
              onPress={() => navigation.navigate("나의 차량")}
            >
              <Text style={styles.mycarText}>나의 차량</Text>
            </TouchableOpacity>
          </View>
          {/*  */}
        </View>
      </View>
      {/*  */}
      <View style={styles.middleContainer1}>
        <View style={styles.couponContainer}>
          <Text style={styles.couponText}>쿠폰</Text>
          <Text style={styles.couponNumber}>11장</Text>
        </View>
        <View style={styles.rewordContainer}>
          <Text style={styles.rewordText}>적립금</Text>
          <Text style={styles.rewordNumber}>4,510원</Text>
        </View>
      </View>
      {/*  */}
      <View style={styles.scrollviewContainer}>
        <ScrollView
          style={styles.scrollviewContainer1}
          showsVerticalScrollIndicator={false}
        >
          <TouchableOpacity style={{ margin: 12 }}>
            <Text>개인 정보 수정</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 12 }}>
            <Text>보유 쿠폰</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 12 }}>
            <Text>보유 적립금</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 12 }}>
            <Text>작성한 리뷰</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 12 }}>
            <Text>1:1 문의</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 12 }}>
            <Text>공지사항</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 12 }}>
            <Text>자주 묻는 질문</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 12 }}>
            <Text>고객센터</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ margin: 12 }}>
            <Text>로그아웃</Text>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  );
};

export default Profile;
