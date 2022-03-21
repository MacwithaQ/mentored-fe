import { StyleSheet, Text, View } from "react-native";
import React from "react";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Messages from "../../screens/Messages";
const { Navigator, Screen } = createNativeStackNavigator();

const MessagesNavigator = () => {
  return (
    <Navigator
      initialRouteName="Messages"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Screen component={Messages} name="Messages" />
    </Navigator>
  );
};

export default MessagesNavigator;

const styles = StyleSheet.create({});
