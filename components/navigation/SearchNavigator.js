import { StyleSheet } from "react-native";
import React from "react";
//* Screen:
import Search from "../../screens/Search";
//* native stack:
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MentorDetails from "../../screens/MentorDetails";
import MentorsMeetings from "../../screens/MentorsMeetings";
const { Navigator, Screen } = createNativeStackNavigator();

const SearchNavigator = () => {
  return (
    <Navigator
      initialRouteName="Search"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Screen component={Search} name="Search" />
      <Screen component={MentorDetails} name="MentorDetails" />
      <Screen component={MentorsMeetings} name="MentorsMeetings" />
    </Navigator>
  );
};

export default SearchNavigator;

const styles = StyleSheet.create({});
