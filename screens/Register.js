import {
  StyleSheet,
  Text,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
} from "react-native";
import authStore from "../stores/authStore";
import { Button, VStack, Stack, HStack } from "native-base";
import RegisterSVG from "../assets/register.svg";
import MntBtnPrimary from "../components/MntBtnPrimary";
import MntBtnSecondary from "../components/MntBtnSecondary";
import Input from "../components/Input";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

const Register = ({ navigation }) => {
  const [step, setStep] = useState(1);
  const [user, setUser] = useState(null);
  console.log(user);

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView />
      <View style={{ padding: 12 }}>
        <Ionicons
          name="close-outline"
          size={24}
          color="black"
          onPress={() => navigation.navigate("App")}
        />
      </View>
      <VStack flex={1} alignItems="center" justifyContent="center">
        <RegisterSVG width={300} height={300} />
      </VStack>
      {step === 1 && (
        <StepOne step={step} setStep={setStep} setUser={setUser} user={user} />
      )}
      {step === 2 && (
        <StepTwo step={step} setStep={setStep} setUser={setUser} user={user} />
      )}
      {step === 3 && (
        <StepThree
          step={step}
          setStep={setStep}
          setUser={setUser}
          user={user}
        />
      )}
      {step === 4 && (
        <StepFour step={step} setStep={setStep} setUser={setUser} user={user} />
      )}
    </KeyboardAvoidingView>
  );
};

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

const StepTwo = ({ step, setStep, setUser, user }) => {
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
        placeholder="Email"
        keyboardType="email-address"
        onChangeText={(email) => setUser({ ...user, email })}
      />
      <Input
        placeholder="Phone"
        keyboardType="number-pad"
        onChangeText={(phone) => setUser({ ...user, phone })}
      />
      <VStack>
        <MntBtnPrimary text="Next" onPress={() => setStep(step + 1)} />
        <MntBtnSecondary text="Back" onPress={() => setStep(step - 1)} />
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

const StepThree = ({ step, setStep, setUser, user }) => {
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
        placeholder="Password"
        secureTextEntry={true}
        onChangeText={(password) => setUser({ ...user, password })}
      />
      <Input
        placeholder="Confirm Password"
        secureTextEntry={true}
        onChangeText={(cPassword) => setUser({ ...user, cPassword })}
      />
      <VStack>
        <MntBtnPrimary text="Next" onPress={() => setStep(step + 1)} />
        <MntBtnSecondary text="Back" onPress={() => setStep(step - 1)} />
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

const StepFour = ({ step, setStep, setUser, user, navigation }) => {
  const handleMentor = () => {
    setUser({ ...user, isMentor: true });
    // setStep(step - 1);
    authStore.signup(user, navigation);
  };

  const handleStudent = () => {
    setUser({ ...user, isMentor: false });
    // setStep(step - 1);
    authStore.signup(user, navigation);
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
      <VStack>
        <MntBtnPrimary text="I am a Mentor" onPress={handleMentor} />
        <MntBtnPrimary text="I am a Student" onPress={handleStudent} />
        <MntBtnSecondary text="Back" onPress={() => setStep(step - 1)} />
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

export default Register;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    margin: 0,
    backgroundColor: "#F5F4F9",
    // padding: 12,
  },
  link: {
    color: "#57A0D7",
  },
});
