import React from "react";
import TabNavigator from "./TabNavigation";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
//* Screens:
import Login from "../../screens/Login";
import Register from "../../screens/Register/Register";
import Schedule from "../../screens/Schedule";

// ?import from native-stack ^^:
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
      <Screen
        name="Schedule"
        component={Schedule}
        options={{ headerShown: false }}
      />
    </Navigator>
  );
};

export default RootNavigator;
