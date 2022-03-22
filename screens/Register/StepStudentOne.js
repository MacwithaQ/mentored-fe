import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";
import Input from "../../components/Input";
import { Picker } from "@react-native-picker/picker";
import MntBtnPrimary from "../../components/MntBtnPrimary";
import MntBtnSecondary from "../../components/MntBtnSecondary";

const StepStudentOne = ({ step, setStep, setUser, user, handleRegister }) => {
  const OPTIONS = [
    {
      id: 1,
      educationLevel: "Grade 9",
    },
    {
      id: 2,
      educationLevel: "Grade 10",
    },
    {
      id: 3,
      educationLevel: "Grade 11",
    },
    {
      id: 4,
      educationLevel: "Grade 12",
    },
    {
      id: 5,
      educationLevel: "Deploma",
    },
    {
      id: 6,
      educationLevel: "Bachelor",
    },
    {
      id: 7,
      educationLevel: "Master",
    },
    {
      id: 8,
      educationLevel: "PHD",
    },
  ];
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
        placeholder="Age"
        keyboardType="number-pad"
        onChangeText={(age) => setUser({ ...user, age })}
      />
      <Picker
        style={{
          backgroundColor: "#F5F4F9",
          height: 70,
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: 20,
          marginVertical: 5,
          textAlign: "left",
        }}
        itemStyle={{ fontSize: 14, textAlign: "left" }}
        selectedValue={user.educationLevel}
        onValueChange={(itemValue) => {
          setUser({ ...user, educationLevel: itemValue });
        }}
      >
        {OPTIONS.map((option) => (
          <Picker.Item
            key={option.id}
            value={option.educationLevel}
            label={option.educationLevel}
          />
        ))}
      </Picker>
      <Input
        placeholder="Guardian"
        onChangeText={(guardian) => setUser({ ...user, guardian })}
      />
      <Input
        placeholder="Phone Number"
        onChangeText={(gPhone) => setUser({ ...user, gPhone })}
      />
      <VStack>
        <MntBtnPrimary text="Register" onPress={handleRegister} />
        <MntBtnSecondary text="Back" onPress={() => setStep(step - 1)} />
      </VStack>
    </VStack>
  );
};

export default StepStudentOne;

const styles = StyleSheet.create({
  link: {
    color: "#57A0D7",
  },
});
