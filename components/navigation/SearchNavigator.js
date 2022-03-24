import { StyleSheet } from "react-native";
import React from "react";
//* Screen:
import Search from "../../screens/Search";
//* native stack:
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import MentorDetails from "../../screens/MentorDetails";
const { Navigator, Screen } = createNativeStackNavigator();

const SearchNavigator = () => {
  return (
    <Navigator
      initialRouteName="Search"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Screen component={Search} name="Search" />
      <Screen component={MentorDetails} name="MentorDetails" />
    </Navigator>
  );
};

export default SearchNavigator;

const styles = StyleSheet.create({});
