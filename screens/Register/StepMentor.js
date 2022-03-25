import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";
//*  CUSTOMIZED COMPONENTS & SVG:
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
      </HStack>

      {/* MAJOR: */}
      <Input
        placeholder="Major"
        onChangeText={(major) => {
          setUser({ ...user, major });
        }}
      />

      {/* EMPLOYER: */}
      <Input
        placeholder="Employer"
        onChangeText={(employer) => setUser({ ...user, employer })}
      />
      {/* REGISTER BUTTON: */}
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
