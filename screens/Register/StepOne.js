import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, Toast, VStack } from "native-base";
//*  CUSTOMIZED COMPONENTS & SVG:
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
      //* TO SHOW THE REQUIREMENT & RULES:
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
      <HStack style={{ alignSelf: "center", marginBottom: 15 }}>
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

      {/* FIRST NAME: */}
      <Input
        placeholder="First Name"
        defaultValue={user.firstName || ""}
        onChangeText={(firstName) => setUser({ ...user, firstName })}
      />

      {/* LAST NAME: */}
      <Input
        placeholder="Last Name"
        defaultValue={user.lastName}
        onChangeText={(lastName) => setUser({ ...user, lastName })}
      />

      {/* EMAIL: */}
      <Input
        placeholder="Email"
        defaultValue={user.email}
        keyboardType="email-address"
        onChangeText={(email) => setUser({ ...user, email })}
      />

      {/* PHONE: */}
      <Input
        placeholder="Phone"
        defaultValue={user.phone}
        keyboardType="number-pad"
        onChangeText={(phone) => setUser({ ...user, phone })}
      />

      {/* PASSWORD: */}
      <Input
        placeholder="Password"
        defaultValue={user.password}
        secureTextEntry
        onChangeText={(password) => setUser({ ...user, password })}
      />
      {/* NEXT BUTTON: */}
      <Btn onPress={handleNext}>Next</Btn>
      <HStack
        style={{
          width: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text>Already User ? </Text>

        {/* SIGNIN BUTTON GO (LOGIN PAGE): */}
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
