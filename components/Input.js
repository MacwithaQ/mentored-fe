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
        padding: 10,
        marginBottom: 10,
        borderRadius: 100,
      }}
    />
  );
};

export default Input;

const styles = StyleSheet.create({});
