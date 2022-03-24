import { StyleSheet } from "react-native";
import React from "react";
import { VStack } from "native-base";
//* Customized tags components :
import Input from "../../components/Input";
import Btn from "../../components/Btn";

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
        onChangeText={(major) => {
          setUser({ ...user, major });
        }}
      />
      <Input
        placeholder="Employer"
        onChangeText={(employer) => setUser({ ...user, employer })}
      />
      <VStack>
        <Btn onPress={handleRegister}>Register</Btn>
        <Btn outline onPress={() => setStep(step - 1)}>
          Back
        </Btn>
      </VStack>
    </VStack>
  );
};

export default StepMentor;

const styles = StyleSheet.create({});
