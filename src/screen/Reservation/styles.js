import { StyleSheet } from "react-native";

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
    marginTop: 12,
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

export default styles;
