import { StyleSheet, Text } from "react-native";
import React from "react";
import { Button } from "native-base";

const MntBtnSecondary = ({ text, onPress }) => {
  return (
    <Button
      style={{
        width: "100%",
        // flex: 1,
        borderRadius: 100,
        backgroundColor: "#fff",
        borderColor: "#57A0D7",
        borderWidth: 2,
        padding: 12,
        marginVertical: 5,
      }}
      onPress={onPress}
    >
      <Text
        style={{
          color: "#57A0D7",
          fontSize: 16,
          width: "100%",
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </Button>
  );
};

export default MntBtnSecondary;

const styles = StyleSheet.create({});
