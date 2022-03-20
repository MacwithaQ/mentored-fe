import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../../screens/Home";
import Register from "../../screens/Register";

const Tab = createBottomTabNavigator();

function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{ headerShown: false, tabBarShowLabel: false }}
    >
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Register" component={Register} />
    </Tab.Navigator>
  );
}

export default TabNavigator;
