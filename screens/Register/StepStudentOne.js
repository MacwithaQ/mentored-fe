import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";
import Input from "../../components/Input";
import { Picker } from "@react-native-picker/picker";
//* Customized tags components :
import Btn from "../../components/Btn";

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
    educationLevel: "Diploma",
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

const StepStudentOne = ({ step, setStep, setUser, user, handleRegister }) => {
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
        <Picker.Item label="Select level" />
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
        <Btn onPress={handleRegister}>Register</Btn>
        <Btn outline onPress={() => setStep(step - 1)}>
          Back
        </Btn>
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
