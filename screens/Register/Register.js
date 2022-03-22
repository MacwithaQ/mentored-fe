import {
  StyleSheet,
  Text,
  Pressable,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { Button, VStack, Stack, HStack } from "native-base";
import RegisterSVG from "../../assets/register.svg";
import MntBtnPrimary from "../../components/MntBtnPrimary";
import MntBtnSecondary from "../../components/MntBtnSecondary";
import Input from "../../components/Input";
import { useRef, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { Picker } from "@react-native-picker/picker";
import authStore from "../../stores/authStore";
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepMentor from "./StepMentor";
import StepStudentOne from "./StepStudentOne";

const Register = ({ navigation }) => {
  // authStore.user && navigation.navigate("Home");

  const [step, setStep] = useState(1);
  const [user, setUser] = useState(null);
  console.log(user);

  const handleRegister = () => {
    authStore.signup(user, navigation);
    setUser(null);
    setStep(1);
  };

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
        <RegisterSVG width={300} />
      </VStack>
      {step === 1 && (
        <StepOne step={step} setStep={setStep} setUser={setUser} user={user} />
      )}
      {step === 2 && (
        <StepTwo step={step} setStep={setStep} setUser={setUser} user={user} />
      )}
      {step === 3 && user.isMentor === true && (
        <StepMentor
          step={step}
          setStep={setStep}
          setUser={setUser}
          user={user}
          handleRegister={handleRegister}
        />
      )}
      {step === 3 && user.isMentor === false && (
        <StepStudentOne
          step={step}
          setStep={setStep}
          setUser={setUser}
          user={user}
          handleRegister={handleRegister}
        />
      )}
    </KeyboardAvoidingView>
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
