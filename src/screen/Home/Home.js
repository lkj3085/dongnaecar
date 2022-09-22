import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import React from "react";

const Home = () => {
  return (
    <ScrollView style={{ flex: 1 }}>
      <View
        style={{
          flex: 2 / 1,
          backgroundColor: "#6C26F9",
          justifyContent: "flex-end",
          alignContent: "center",
          alignItems: "flex-end",
        }}
      >
        <View
          style={{
            flex: 1,
            paddingTop: 20,
            marginRight: 150,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "bold",
            }}
          >
            동네세차,
          </Text>
          <Text
            style={{
              color: "white",
              fontSize: 30,
              fontWeight: "bold",
              marginBottom: 20,
            }}
          >
            가성비 서비스
          </Text>
          <Text
            style={{
              fontSize: 15,
              color: "lightgrey",
              fontWeight: "bold",
              marginBottom: 25,
            }}
          >
            추가적인 세차가 필요할 때 합리적인 가격으로 이용하세요
          </Text>
          <TouchableOpacity
            style={{
              height: 50,
              width: 150,
              borderRadius: 50,
              alignItems: "center",
              justifyContent: "center",
              borderWidth: 1,
              borderColor: "white",
            }}
          >
            <Text style={{ color: "white", fontWeight: "bold" }}>
              서비스 신청
            </Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../../../assets/best.png")}
          style={{
            width: "65%",
            height: 250,
          }}
        />
      </View>

      <View
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            justifyContent: "center",
          }}
        >
          <Image
            source={require("../../../assets/Group28.png")}
            style={{
              width: "100%",
              height: 220,
              resizeMode: "contain",
              marginLeft: 130,
            }}
          />
        </View>
      </View>

      <View style={{ flex: 1 }}>
        <View
          style={{
            justifyContent: "center",
            backgroundColor: "#374151",
          }}
        >
          <Image
            source={require("../../../assets/Group22.png")}
            style={{
              width: "100%",
              height: 220,
              resizeMode: "contain",
              marginLeft: 130,
            }}
          />
        </View>
      </View>

      <View
        style={{
          flex: 1,
          marginBottom: 20,
        }}
      >
        <View
          style={{
            justifyContent: "center",
            backgroundColor: "#E5E7EB",
          }}
        >
          <Image
            source={require("../../../assets/Group29.png")}
            style={{
              width: "100%",
              height: 220,
              resizeMode: "contain",
              marginLeft: 140,
            }}
          />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{
            height: 90,
            width: 350,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "grey",
            backgroundColor: "white",
          }}
        >
          <Text style={{ color: "#6C26F9", fontWeight: "bold" }}>
            서비스 가이드
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginBottom: 10,
        }}
      >
        <TouchableOpacity
          style={{
            height: 90,
            width: 350,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "grey",
            backgroundColor: "white",
          }}
        >
          <Text style={{ color: "#6C26F9", fontWeight: "bold" }}>
            지역 안내
          </Text>
        </TouchableOpacity>
      </View>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
          marginBottom: 40,
        }}
      >
        <TouchableOpacity
          style={{
            height: 90,
            width: 350,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "grey",
            backgroundColor: "white",
          }}
        >
          <Text style={{ color: "black", fontWeight: "bold" }}>
            디테일러 지원하기
          </Text>
        </TouchableOpacity>
      </View>

      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            flex: 1,
            height: 250,
            width: 350,
            borderRadius: 10,
            alignItems: "center",
            justifyContent: "center",
            borderWidth: 1,
            borderColor: "grey",
            backgroundColor: "white",
          }}
        >
          <View style={{ marginBottom: 20, marginTop: -50 }}>
            <Text
              style={{
                color: "9CA3AF",
                fontWeight: "bold",
                fontSize: 20,
                marginBottom: 10,
              }}
            >
              동네세차
            </Text>
            <View style={{ marginBottom: 20 }}>
              <Text style={{ color: "grey", fontSize: 13 }}>
                (주) 하늘타래 대표이사 : 한지오
              </Text>
              <Text style={{ color: "grey", fontSize: 13 }}>
                개인정보책임자 : 윤석진
              </Text>
              <Text style={{ color: "grey", fontSize: 13 }}>
                서울시 구로구 중앙로 6길 16, DMMC 캠퍼스타운 106호
              </Text>
            </View>
            <View>
              <Text style={{ color: "grey", fontSize: 13 }}>
                사업자번호 : 176-88-02002
              </Text>
              <Text style={{ color: "grey", fontSize: 13 }}>
                통신판매업신고번호 : 제 2022-서울서구로-1065호
              </Text>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Home;
