import { Pressable, StyleSheet, Text } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";
//* Customized tags components :
import Input from "../../components/Input";
import MntBtnPrimary from "../../components/MntBtnPrimary";

const StepOne = ({ step, setStep, setUser, user }) => {
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
        onChangeText={(firstName) => setUser({ ...user, firstName })}
      />
      <Input
        placeholder="Last Name"
        onChangeText={(lastName) => setUser({ ...user, lastName })}
      />
      <Input
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(email) => setUser({ ...user, email })}
      />
      <Input
        placeholder="Phone"
        keyboardType="number-pad"
        onChangeText={(phone) => setUser({ ...user, phone })}
      />
      <Input
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <VStack>
        <MntBtnPrimary text="Next" onPress={() => setStep(step + 1)} />
      </VStack>
      <HStack
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Already User ? </Text>
        <Pressable>
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
