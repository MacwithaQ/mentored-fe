import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../../screens/Home";
import Register from "../../screens/Register";
import TabNavigator from "./TabNavigation";
const { Navigator, Screen } = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="Register">
      <Screen
        name="App"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      <Screen
        name="Register"
        component={Register}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
