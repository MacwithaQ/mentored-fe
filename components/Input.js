import { StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";

const Input = ({
  placeholder,
  value,
  onChangeText,
  keyboardType,
  secureTextEntry,
  defaultValue,
}) => {
  return (
    <TextInput
      autoCapitalize="none"
      autoComplete="off"
      autoCorrect={false}
      placeholder={placeholder}
      value={value}
      defaultValue={defaultValue}
      secureTextEntry={secureTextEntry}
      keyboardType={keyboardType}
      onChangeText={onChangeText}
      style={{
        backgroundColor: "#F5F4F9",
        paddingVertical: 10,
        paddingHorizontal: 15,
        marginVertical: 5,
        borderRadius: 100,
      }}
    />
  );
};

export default Input;

const styles = StyleSheet.create({});
