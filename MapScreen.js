import React from "react";
import { StyleSheet, View } from "react-native";
import MapView from "react-native-maps";

// Map View Component
const MapScreen = () => {
  return (
    <View style={styles.container}>
      <MapView style={styles.map}></MapView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  map: {
    width: "100%",
    height: "100%",
  },
});

export default MapScreen;
