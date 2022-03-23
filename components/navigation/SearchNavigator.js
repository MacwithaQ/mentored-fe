import { StyleSheet } from "react-native";
import React from "react";
//* Screen:
import Search from "../../screens/Search";
//* native stack:
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const { Navigator, Screen } = createNativeStackNavigator();

const SearchNavigator = () => {
  return (
    <Navigator
      initialRouteName="Search"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Screen component={Search} name="Search" />
    </Navigator>
  );
};

export default SearchNavigator;

const styles = StyleSheet.create({});
