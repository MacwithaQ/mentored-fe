import { StyleSheet } from "react-native";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//* Screen:
import Messages from "../../screens/Messages";
import MessagingPage from "../../screens/MessagingPage";

const { Navigator, Screen } = createNativeStackNavigator();

const MessagesNavigator = () => {
  return (
    <Navigator
      initialRouteName="Messages"
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Screen component={Messages} name="Messages" />
      <Screen component={MessagingPage} name="MessagingPage" />
    </Navigator>
  );
};

export default MessagesNavigator;

const styles = StyleSheet.create({});
