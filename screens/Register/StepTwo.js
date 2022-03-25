import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";
//*  CUSTOMIZED COMPONENTS & SVG:
import Btn from "../../components/Btn";

const StepTwo = ({ step, setStep, setUser, user }) => {
  //* MENTOR HANDLER:
  const handleMentor = () => {
    setUser({ ...user, isMentor: true });
    setStep(step + 1);
    // authStore.signup(user, navigation);
  };

  //* STUDENT HANDLER:
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
      <HStack style={{ alignSelf: "center", marginBottom: 15 }}>
        <View
          style={{
            width: 7,
            height: 7,
            borderRadius: 7 / 2,
            backgroundColor: "#b2b2b2",
            marginHorizontal: 5,
          }}
        >
          <Text> </Text>
        </View>
        <View
          style={{
            width: 14,
            height: 7,
            borderRadius: 7 / 2,
            backgroundColor: "#57A0D7",
            marginHorizontal: 5,
          }}
        >
          <Text> </Text>
        </View>
        <View
          style={{
            width: 7,
            height: 7,
            borderRadius: 7 / 2,
            backgroundColor: "#b2b2b2",
            marginHorizontal: 5,
          }}
        >
          <Text> </Text>
        </View>
      </HStack>
      {/* MAIN TWO BUTTON GO TO (MENTOR || STUDENT): */}
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
