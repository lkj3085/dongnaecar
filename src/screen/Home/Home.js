import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const Home = () => {
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.flexScreen}>
      <View style={styles.rootContainer}>
        <View style={styles.container}>
          <Text style={styles.textStyle}>동네세차,</Text>
          <Text style={styles.textStyle2}>가성비 서비스</Text>
          <Text style={styles.textStyle3}>
            추가적인 세차가 필요할 때 합리적인 가격으로 이용하세요
          </Text>
          <TouchableOpacity
            style={styles.touchContainer}
            onPress={() => navigation.navigate("Service")}
          >
            <Text style={styles.textService}>서비스 신청</Text>
          </TouchableOpacity>
        </View>
        <Image
          source={require("../../../assets/best.png")}
          style={styles.imageStyle}
        />
      </View>

      <View style={styles.flexScreen}>
        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/Group28.png")}
            style={styles.imageStyle2}
          />
        </View>
      </View>

      <View style={styles.flexScreen}>
        <View style={styles.imageContainer2}>
          <Image
            source={require("../../../assets/Group22.png")}
            style={styles.imageStyle3}
          />
        </View>
      </View>

      <View style={styles.flexScreen2}>
        <View style={styles.imageContainer3}>
          <Image
            source={require("../../../assets/Group29.png")}
            style={styles.imageStyle4}
          />
        </View>
      </View>
      <View style={styles.middleContainer}>
        <TouchableOpacity
          style={styles.middleTouch}
          onPress={() => navigation.navigate("ServiceGuide")}
        >
          <Text style={styles.textStyle4}>서비스 가이드</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.middleContainer2}>
        <TouchableOpacity
          style={styles.middleTouch2}
          onPress={() => navigation.navigate("Area")}
        >
          <Text style={styles.textStyle4}>지역 안내</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.middleContainer3}>
        <TouchableOpacity
          style={styles.middleTouch3}
          onPress={() => navigation.navigate("Detailer")}
        >
          <Text style={styles.textStyle5}>디테일러 지원하기</Text>
        </TouchableOpacity>
      </View>

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
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flexScreen: { flex: 1 },
  rootContainer: {
    flex: 2 / 1,
    backgroundColor: "#6C26F9",
    justifyContent: "flex-end",
    alignContent: "center",
    alignItems: "flex-end",
  },
  container: {
    flex: 1,
    paddingTop: 20,
    marginRight: 150,
  },
  textStyle: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
  },
  textStyle2: {
    color: "white",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 20,
  },
  textStyle3: {
    fontSize: 15,
    color: "lightgrey",
    fontWeight: "bold",
    marginBottom: 25,
  },
  touchContainer: {
    height: 50,
    width: 150,
    borderRadius: 50,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 2,
    borderColor: "white",
  },
  imageContainer: {
    justifyContent: "center",
  },
  imageContainer2: {
    justifyContent: "center",
    backgroundColor: "#374151",
  },
  flexScreen2: {
    flex: 1,
    marginBottom: 20,
  },
  imageContainer3: {
    justifyContent: "center",
    backgroundColor: "#E5E7EB",
  },
  middleContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#F3F4F6",
  },
  middleTouch: {
    height: 90,
    width: 350,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
  },
  textStyle4: { color: "#6C26F9", fontWeight: "bold" },
  middleContainer2: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 10,
  },
  middleTouch2: {
    height: 90,
    width: 350,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
  },
  middleContainer3: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
    marginBottom: 40,
  },
  middleTouch3: {
    height: 90,
    width: 350,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
  },
  textStyle5: { color: "black", fontWeight: "bold" },
  footContainer: {
    flex: 1,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  footContainer2: {
    flex: 1,
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
  imageStyle2: {
    width: "100%",
    height: 220,
    resizeMode: "contain",
    marginLeft: 130,
  },

  imageStyle3: {
    width: "100%",
    height: 220,
    resizeMode: "contain",
    marginLeft: 130,
  },

  imageStyle4: {
    width: "100%",
    height: 220,
    resizeMode: "contain",
    marginLeft: 140,
  },
});
