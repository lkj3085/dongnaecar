import { StyleSheet, Dimensions, View } from "react-native";
import React from "react";
import MapView from "react-native-maps";

export default function Service() {
  return (
    <View style={styles.container}>
      <MapView
        followsUserLocation={true}
        style={styles.map}
        showsMyLocationButton
        showsUserLocation={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  map: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height,
  },
});
