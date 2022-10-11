import { useNavigation } from "@react-navigation/native";
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import Footer from "../Footer/Footer";
import { Ionicons } from "@expo/vector-icons";

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
      <View style={{ marginBottom: 70 }}>
        <View style={styles.middleContainer}>
          <TouchableOpacity
            style={styles.middleTouch}
            onPress={() => navigation.navigate("ServiceGuide")}
          >
            <View style={{ marginTop: -10, marginLeft: 20 }}>
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 18 }}
              >
                동네세차
              </Text>
              <Text style={styles.textStyle4}>서비스 가이드</Text>
            </View>
            <View style={{ marginRight: 15 }}>
              <Image source={require("../../../assets/Frame.png")} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.middleContainer}>
          <TouchableOpacity
            style={styles.middleTouch}
            onPress={() => navigation.navigate("Area")}
          >
            <View style={{ marginTop: -10, marginLeft: 20 }}>
              <Text
                style={{ color: "black", fontWeight: "bold", fontSize: 18 }}
              >
                서비스 이용
              </Text>
              <Text style={styles.textStyle4}>지역 안내 </Text>
            </View>
            <View style={{ marginRight: 15 }}>
              <Image source={require("../../../assets/Frame-2.png")} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={styles.middleContainer}>
          <TouchableOpacity
            style={styles.middleTouch}
            onPress={() => navigation.navigate("Detailer")}
          >
            <View style={{ marginTop: -10, marginLeft: 20 }}>
              <Text
                style={{
                  color: "black",
                  fontWeight: "bold",
                  fontSize: 18,
                  marginBottom: 5,
                }}
              >
                디테일러 지원하기
              </Text>
              <Text style={{ color: "grey" }}>일주일만에 디테일러 되기 </Text>
            </View>
            <View style={{ marginRight: 15 }}>
              <Ionicons
                name="chevron-forward-circle-outline"
                size={35}
                color={"grey"}
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Footer />
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  flexScreen: { flex: 1 },
  rootContainer: {
    flex: 1,
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
    marginBottom: 70,
  },
  imageContainer3: {
    justifyContent: "center",
    backgroundColor: "#E5E7EB",
  },
  middleContainer: {
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "#F3F4F6",
  },
  middleTouch: {
    height: 95,
    width: 350,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "space-between",
    borderWidth: 1,
    borderColor: "grey",
    backgroundColor: "white",
    flexDirection: "row",
  },
  textStyle4: { color: "#6C26F9", fontWeight: "bold", fontSize: 16 },
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
