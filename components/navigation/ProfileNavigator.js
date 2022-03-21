import { StyleSheet, Text, View } from "react-native";
import React from "react";

import Profile from "../../screens/Profile";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Screen component={Profile} name="Profile" />
    </Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({});
