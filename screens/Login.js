import {
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Pressable,
  KeyboardAvoidingView,
} from "react-native";
import { VStack, HStack } from "native-base";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
//* Customized tags components & SVG:
import Input from "../components/Input";
import LoginSVG from "../assets/login.svg";
//* Stores:
import authStore from "../stores/authStore";
import Btn from "../components/Btn";

const Login = ({ navigation }) => {
  //* To store the user info in it:
  const [user, setUser] = useState(null);

  //* Handler:
  const handleSignin = () => {
    authStore.signin(user, navigation);
  };

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView />
      {/*  ICON: */}
      <View style={{ padding: 12 }}>
        <Ionicons
          name="close-outline"
          size={24}
          color="black"
          onPress={() => navigation.navigate("App")}
        />
      </View>

      {/* SVG IMG: */}
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
        {/* EMAIL: */}
        <Input
          placeholder="Email"
          onChangeText={(username) => setUser({ ...user, username })}
        />

        {/* PASSWORD: */}
        <Input
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(password) => setUser({ ...user, password })}
        />
        {/* LOGIN BUTTON: */}
        <Btn onPress={handleSignin}>Login</Btn>

        <HStack
          style={{
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text>Dont Have an Account? </Text>
          {/* REGISTER TEXT */}
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
  },
  link: {
    color: "#57A0D7",
  },
});
