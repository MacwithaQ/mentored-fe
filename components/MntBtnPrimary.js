import { StyleSheet, Text } from "react-native";
import React from "react";
import { Button } from "native-base";

const MntBtnPrimary = ({ text, onPress }) => {
  return (
    <Button
      style={{
        width: "100%",
        // flex: 1,
        borderRadius: 100,
        backgroundColor: "#57A0D7",
        padding: 12,
        marginVertical: 5,
      }}
      onPress={onPress}
    >
      <Text style={{ color: "#fff", fontSize: 16 }}>{text}</Text>
    </Button>
  );
};

export default MntBtnPrimary;

const styles = StyleSheet.create({});
