import { StyleSheet } from "react-native";
import React from "react";
import { VStack } from "native-base";
//* Customized tags components :
import Btn from "../../components/Btn";

const StepTwo = ({ step, setStep, setUser, user }) => {
  //* Handler for mentor:
  const handleMentor = () => {
    setUser({ ...user, isMentor: true });
    setStep(step + 1);
    // authStore.signup(user, navigation);
  };

  //* Handler for Student:
  const handleStudent = () => {
    setUser({ ...user, isMentor: false });
    setStep(step + 1);
    // authStore.signup(user, navigation);
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
      {/*  MAIN two buttons: */}
      <VStack>
        <Btn onPress={handleMentor}>I am a Mentor</Btn>
        <Btn onPress={handleStudent}>I am a Student</Btn>
        <Btn outline onPress={() => setStep(step - 1)}>
          Back
        </Btn>
      </VStack>
    </VStack>
  );
};

export default StepTwo;

const styles = StyleSheet.create({});
