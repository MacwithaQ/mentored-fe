import { StyleSheet } from "react-native";
import React from "react";
//*Screen:
import Home from "../../screens/Home";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//? import from native-stack^^
const { Navigator, Screen } = createNativeStackNavigator();

const HomeNavigator = () => {
  return (
    <Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Screen component={Home} name="Home" />
    </Navigator>
  );
};

export default HomeNavigator;

const styles = StyleSheet.create({});
