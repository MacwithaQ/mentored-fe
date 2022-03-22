import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import Input from "../components/Input";
import MntBtnPrimary from "../components/MntBtnPrimary";
import { VStack, HStack } from "native-base";
import { useState } from "react";
import authStore from "../stores/authStore";
import login from "../assets/login.svg";
import { Ionicons } from "@expo/vector-icons";
import LoginSVG from "../assets/login.svg";

const Login = ({ navigation }) => {
  const [user, setUser] = useState(null);

  const handleSignin = () => {
    authStore.signin(user, navigation);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView />
      <View style={{ padding: 12 }}>
        <Ionicons
          name="close-outline"
          size={24}
          color="black"
          onPress={() => navigation.navigate("App")}
        />
      </View>
      <VStack flex={1} alignItems="center" justifyContent="center">
        <LoginSVG width={300} />
      </VStack>
      <VStack
        style={{
          width: "100%",
          padding: 12,
          paddingBottom: 50,
          paddingTop: 20,
          backgroundColor: "#fff",
          borderTopRightRadius: 30,
          borderTopLeftRadius: 30,
        }}
      >
        <Input
          placeholder="Email"
          onChangeText={(username) => setUser({ ...user, username })}
        />
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setUser({ ...user, password })}
        />
        <VStack>
          <MntBtnPrimary text="Login" onPress={handleSignin} />
        </VStack>

        <HStack
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Dont Have an Account? </Text>
          <Pressable
            onPress={() => {
              navigation.navigate("Register");
            }}
          >
            <Text style={styles.link}>Register</Text>
          </Pressable>
        </HStack>
      </VStack>
    </KeyboardAvoidingView>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    margin: 0,
    backgroundColor: "#F5F4F9",
    // padding: 12,
  },
  link: {
    color: "#57A0D7",
  },
});
