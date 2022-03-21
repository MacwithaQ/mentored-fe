import { StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import MntBtnPrimary from "../components/MntBtnPrimary";
import React from "react";
import { useState } from "react";
import authStore from "../stores/authStore";

const Login = ({ navigation }) => {
  const [user, setUser] = useState(null);

  const handleSignin = () => {
    authStore.signin(user, navigation);
  };

  return (
    <View style={styles.container}>
      <Text>Login</Text>
      <Input
        placeholder="Email"
        onChangeText={(username) => setUser({ ...user, username })}
      />
      <Input
        placeholder="Password"
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <MntBtnPrimary text="Sign In" onPress={handleSignin} />
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignSelf: "center",
  },
});
