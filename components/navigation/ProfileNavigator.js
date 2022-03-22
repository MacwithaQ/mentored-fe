import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../screens/Profile";
import MentorProfileUpdate from "../../screens/MentorProfileUpdate";
import StudentProfileUpdate from "../../screens/StudentProfileUpdate";
const { Navigator, Screen } = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Screen component={Profile} name="Profile" />
      <Screen
        name="MentorProfileUpdate"
        component={MentorProfileUpdate}
        options={{ headerShown: false }}
      />
      <Screen
        name="StudentProfileUpdate"
        component={StudentProfileUpdate}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({});
