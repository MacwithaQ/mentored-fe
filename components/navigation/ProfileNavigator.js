import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Profile from "../../screens/Profile/Profile";
//* Screens:
import MentorProfileUpdate from "../../screens/Profile/MentorProfileUpdate";
import StudentProfileUpdate from "../../screens/Profile/StudentProfileUpdate";
import MeetingDetail from "../../screens/MeetingDetail";

//? import from native stack^^
const { Navigator, Screen } = createNativeStackNavigator();

const ProfileNavigator = () => {
  return (
    <Navigator
      initialRouteName="Profile"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Screen component={Profile} name="Profile" />
      <Screen component={MentorProfileUpdate} name="MentorProfileUpdate" />
      <Screen component={StudentProfileUpdate} name="StudentProfileUpdate" />
      <Screen component={MeetingDetail} name="MeetingDetail" />
    </Navigator>
  );
};

export default ProfileNavigator;

const styles = StyleSheet.create({});
