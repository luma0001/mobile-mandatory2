import React from "react";
import { StyleSheet, View, Text, Button } from "react-native";
// import MapView from "react-native-maps";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MapScreen from "./MapScreen";

/*
TO DO:

Create Components for Map

Long-In... site

"Calender View"
- Fetch calender data if there is any....

DAY - MAP VIEW
- Display all TO'DO MARKERS and their status
- Click on TO'DO for info, and to make satus...
-> Click to create a new TO'DO

DAY - LIST
- Display all TO'DO EVENTS...
- Click on TO'DO for info and to change staus
-> Click to create a new TO'DO
   -- Set a marker for it OR set a LOCATION...
API that gives the LOCATION-coordinates


*/

// Create a Tab Navigator
const Tab = createBottomTabNavigator();

// Menu View Component
function MenuScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Menu Screen</Text>
      <Button title="Go to Map" onPress={() => navigation.navigate("Map")} />
    </View>
  );
}

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Map" component={MapScreen} />
        <Tab.Screen name="Menu" component={MenuScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  text: {
    fontSize: 24,
    fontWeight: "bold",
  },
});
