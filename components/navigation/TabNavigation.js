import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
//* Navigators:
import HomeNavigator from "./HomeNavigator";
import MessagesNavigator from "./MessagesNavigator";
import ProfileNavigator from "./ProfileNavigator";
import SearchNavigator from "./SearchNavigator";

//? import from ^^
const Tab = createBottomTabNavigator();

function TabNavigator() {
  // const getTabBarVisibility = (route) => {
  //   const routeName = route.state
  //     ? route.state.routes[route.state.index].name
  //     : "";
  //   if (routeName == "MessagesNavigator") {
  //     return false;
  //   }
  //   {
  //     return true;
  //   }
  // };
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarActiveTintColor: "#57A0D7",
        tabBarInactiveTintColor: "#4F4F4F",
      }}
      initialRouteName="HomeNavigator"
    >
      <Tab.Screen
        name="HomeNavigator"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="SearchNavigator"
        component={SearchNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="search" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="MessagesNavigator"
        component={MessagesNavigator}
        tabBar
        options={{
          // tabBarVisible: getTabBarVisibility(route),
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="chatbubble-ellipses" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="ProfileNavigator"
        component={ProfileNavigator}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="person" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

export default TabNavigator;
