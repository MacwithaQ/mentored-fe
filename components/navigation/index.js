import { Pressable, StyleSheet } from "react-native";
import React from "react";

import Register from "../../screens/Register/Register";
import TabNavigator from "./TabNavigation";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Login from "../../screens/Login";
import MentorProfileUpdate from "../../screens/MentorProfileUpdate";
import StudentProfileUpdate from "../../screens/StudentProfileUpdate";
const { Navigator, Screen } = createNativeStackNavigator();

const RootNavigator = () => {
  return (
    <Navigator initialRouteName="App">
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
      <Screen name="Login" component={Login} options={{ headerShown: false }} />
    </Navigator>
  );
};

export default RootNavigator;

const styles = StyleSheet.create({});
