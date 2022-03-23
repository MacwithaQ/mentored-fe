import { StyleSheet } from "react-native";
import React from "react";
import { VStack } from "native-base";
//* Customized tags components :
import Input from "../../components/Input";
import MntBtnPrimary from "../../components/MntBtnPrimary";
import MntBtnSecondary from "../../components/MntBtnSecondary";

const StepMentor = ({ step, setStep, setUser, user, handleRegister }) => {
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
        placeholder="Major"
        onChangeText={(major) => setUser({ ...user, major })}
      />
      <Input
        placeholder="Facility"
        onChangeText={(employer) => setUser({ ...user, employer })}
      />
      <VStack>
        <MntBtnPrimary text="Register" onPress={handleRegister} />
        <MntBtnSecondary text="Back" onPress={() => setStep(step - 1)} />
      </VStack>
    </VStack>
  );
};

export default StepMentor;

const styles = StyleSheet.create({});
