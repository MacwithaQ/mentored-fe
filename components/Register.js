import { StyleSheet, Text, View, Pressable } from "react-native";
import { Button, VStack, Stack, Input } from "native-base";
import RegisterSVG from "../assets/register.svg";

const Register = () => {
  return (
    <View style={styles.container}>
      <RegisterSVG height={300} width={300} />
      <Text>Register</Text>
      <Stack width={300}>
        <Input variant="rounded" placeholder="First Name"></Input>
        <Input variant="rounded" placeholder="Last Name"></Input>
      </Stack>
      <Button variant="solid">
        <Text>Next</Text>
      </Button>
      <Button variant="outline">
        <Text>Back</Text>
      </Button>
      <Text>
        Already User?
        <Pressable onPress={() => {}}>
          <Text>Login</Text>
        </Pressable>
      </Text>
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  link: {
    color: "blue",
  },
});
