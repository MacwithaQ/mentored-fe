import { StyleSheet, TextInput } from "react-native";
import React from "react";

const Input = ({ ...props }) => {
  return (
    <TextInput
      {...props}
      style={styles.input}
      autoCapitalize="none"
      autoComplete="off"
      autoCorrect={false}
    />
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "#F5F4F9",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 5,
    borderRadius: 100,
  },
});
