import {
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  View,
} from "react-native";
import { Toast, VStack } from "native-base";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";

//* STEPS FROM REGISTER FOLDER  :
import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepStudentOne from "./StepStudentOne";
import StepMentor from "./StepMentor";

//*  CUSTOMIZED SVG:
import RegisterSVG from "../../assets/register.svg";
//* STORES:
import authStore from "../../stores/authStore";

const Register = ({ navigation }) => {
  //TODO: alkarji don't for get to make if else statement HERE!! authStore.user && navigation.navigate("Home");

  const [step, setStep] = useState(1);
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    major: "",
    employer: "",
    age: "",
    educationLevel: "",
    guardian: "",
    gPhone: "",
  });
  //* REGISTER HANDLER:
  const handleRegister = () => {
    if (user.isMentor) {
      if (user.major === "" || user.employer === "") {
        Toast.show({
          title: "One of the fields is empty",
          placement: "top",
        });
      } else {
        authStore.signup(user, navigation);
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          major: "",
          employer: "",
          age: "",
          educationLevel: "",
          guardian: "",
          gPhone: "",
        });
        setStep(1);
      }
    } else {
      if (
        user.age === "" ||
        user.educationLevel === "" ||
        user.guardian === "" ||
        user.gPhone === ""
      ) {
        //* TOAST TO SHOW THE REQUIREMENT & RULES:
        Toast.show({
          title: "One of the fields is empty",
          placement: "top",
        });
      } else {
        authStore.signup(user, navigation);
        setUser({
          firstName: "",
          lastName: "",
          email: "",
          phone: "",
          password: "",
          major: "",
          employer: "",
          age: "",
          educationLevel: "",
          guardian: "",
          gPhone: "",
        });
        setStep(1);
      }
    }
  };

  const steps = [
    //* STEP ONE:
    <StepOne
      step={step}
      setStep={setStep}
      setUser={setUser}
      user={user}
      navigation={navigation}
    />,

    //* STEP TWO(MENTOR || STUDENT):
    <StepTwo step={step} setStep={setStep} setUser={setUser} user={user} />,
    user.isMentor ? (
      <StepMentor
        step={step}
        setStep={setStep}
        setUser={setUser}
        user={user}
        handleRegister={handleRegister}
      />
    ) : (
      <StepStudentOne
        step={step}
        setStep={setStep}
        setUser={setUser}
        user={user}
        handleRegister={handleRegister}
      />
    ),
  ];

  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <SafeAreaView />

      {/* ICON:  */}
      <View style={{ padding: 12 }}>
        <Ionicons
          name="close-outline"
          size={24}
          color="black"
          onPress={() => navigation.navigate("App")}
        />
      </View>

      {/*  IF TRUE DO THE STEPS: */}
      <VStack flex={1} alignItems="center" justifyContent="center">
        <RegisterSVG width={300} />
      </VStack>
      {steps[step - 1]}
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
