import { StyleSheet } from "react-native";
import React from "react";
import { VStack } from "native-base";
//* Customized tags components :
import MntBtnPrimary from "../../components/MntBtnPrimary";
import MntBtnSecondary from "../../components/MntBtnSecondary";

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
        <MntBtnPrimary text="I am a Mentor" onPress={handleMentor} />
        <MntBtnPrimary text="I am a Student" onPress={handleStudent} />
        <MntBtnSecondary text="Back" onPress={() => setStep(step - 1)} />
      </VStack>
    </VStack>
  );
};

export default StepTwo;

const styles = StyleSheet.create({});
