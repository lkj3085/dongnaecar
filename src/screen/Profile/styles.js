import { Platform, StyleSheet } from "react-native";

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
  },
  scrollviewContainer1: {
    marginHorizontal: 5,
    backgroundColor: "white",
    margin: 10,
  },
});

export default styles;
