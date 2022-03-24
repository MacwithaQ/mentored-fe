import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { HStack, Toast, VStack } from "native-base";
//* Customized tags components :
import Input from "../../components/Input";

import Btn from "../../components/Btn";

const StepOne = ({ step, setStep, setUser, user, navigation }) => {

  const handleNext = () => {
    if (
      user.password === "" ||
      user.firstName === "" ||
      user.lastName === "" ||
      user.email === "" ||
      user.phone === ""
    ) {
      Toast.show({
        title: "One of the fields is empty",
        placement: "top",
      });
    } else if (Number.isInteger(parseInt(user.phone)) === false) {
      Toast.show({
        title: "Phone field should be a number",
        placement: "top",
      });
    } else {
      setStep(step + 1);
    }
  };
  return (
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
        placeholder="First Name"
        defaultValue={user.firstName || ""}
        onChangeText={(firstName) => setUser({ ...user, firstName })}
      />
      <Input
        placeholder="Last Name"
        defaultValue={user.lastName}
        onChangeText={(lastName) => setUser({ ...user, lastName })}
      />
      <Input
        placeholder="Email"
        defaultValue={user.email}
        keyboardType="email-address"
        onChangeText={(email) => setUser({ ...user, email })}
      />
      <Input
        placeholder="Phone"
        defaultValue={user.phone}
        keyboardType="number-pad"
        onChangeText={(phone) => setUser({ ...user, phone })}
      />
      <Input
        placeholder="Password"
        defaultValue={user.password}
        secureTextEntry
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <Btn onPress={handleNext}>Next</Btn>
      <HStack
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Already User ? </Text>

        <Pressable
          onPress={() => {
            navigation.navigate("Login");
          }}
        >

          <Text style={styles.link}>Login</Text>
        </Pressable>
      </HStack>
    </VStack>
  );
};

export default StepOne;

const styles = StyleSheet.create({
  link: {
    color: "#57A0D7",
  },
});
