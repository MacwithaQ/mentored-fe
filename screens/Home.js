import { StatusBar } from "expo-status-bar";
import { HStack, VStack } from "native-base";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import Logo from "../assets/Logo.svg";
import authStore from "../stores/authStore";
import { observer } from "mobx-react";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <VStack style={styles.header}>
        <SafeAreaView />
        <HStack style={styles.headerWrapper}>
          <HStack style={styles.headerLogo}>
            <Logo style={styles.headerLogoImg} />
            <Text style={styles.headerLogoText}>Mentored</Text>
          </HStack>
          {authStore.user ? (
            // <Text>{authStore.user.firstName}</Text>
            <Pressable onPress={() => authStore.signout()}>
              <Image
                source={{
                  uri: "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
                }}
                style={styles.headerProfileImg}
              />
            </Pressable>
          ) : (
            <HStack>
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: "#57A0D7" }}>Login</Text>
              </Pressable>
              <Text style={{ color: "#828282" }}> / </Text>
              <Pressable onPress={() => navigation.navigate("Register")}>
                <Text style={{ color: "#57A0D7" }}>Register</Text>
              </Pressable>
            </HStack>
          )}
        </HStack>
      </VStack>
      <VStack style={styles.body}>
        <Text>Home</Text>
      </VStack>
    </View>
  );
};
export default observer(Home);
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F4F9",
  },
  header: {
    backgroundColor: "#fff",
    borderBottomWidth: 0.3,
    borderBottomColor: "#aaa",
  },
  headerWrapper: {
    padding: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLogo: { alignItems: "center" },
  headerLogoImg: { width: 40, height: 40 },
  headerLogoText: { marginLeft: 5, fontWeight: "bold", fontSize: 20 },
  headerProfileImg: { width: 50, height: 50, borderRadius: 50 },
  body: {
    padding: 12,
  },
});
