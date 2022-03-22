import { StyleSheet, Text, View } from "react-native";
import React from "react";

import MentorProfile from "../../screens/MentorProfile";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Navigator
      initialRouteName="MentorProfile"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Screen component={MentorProfile} name="MentorProfile" />
    </Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({});
