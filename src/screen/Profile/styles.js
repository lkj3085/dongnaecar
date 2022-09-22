import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  container1: {
    flex: 1,
    backgroundColor: "black",
    padding: 10,
  },
  profileImage: {
    flex: 1,
    marginLeft: 140,
    height: 120,
    width: 120,
    borderRadius: 50,
    justifyContent: "center",
    marginTop: 20,
  },
  gearContainer: {
    height: 110,
    width: 110,
    borderRadius: 60,
    backgroundColor: "white",
  },
  gearContainer1: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 70,
    marginLeft: 85,
    backgroundColor: "white",
    borderRadius: 20,
    marginRight: 1,
  },
  profileName: {
    color: "white",
    marginTop: 25,
    textAlign: "center",
    justifyContent: "center",
    alignItems: "center",
    fontWeight: "bold",
    fontSize: 25,
  },
  middleContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    marginTop: 50,
  },
  reservationContainer: {
    height: 60,
    width: 150,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: "#fff",
    marginRight: 30,
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
    justifyContent: "space-between",
    alignItems: "center",
    flexDirection: "row",
    borderBottomWidth: 1,
    color: "black",
  },
  couponContainer: {
    marginTop: -13,
    width: 115 * 1.8,
    height: 95,
    backgroundColor: "white",
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
    marginTop: -13,
    width: 115 * 1.8,
    height: 95,
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
