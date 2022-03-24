import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { Button } from "native-base";

const Btn = ({ children, outline, ...props }) => {
  return (
    <Button
      {...props}
      style={[props.style, styles.btn, outline && styles.outline]}
    >
      <Text style={outline ? { color: "#57a0d7" } : { color: "#fff" }}>
        {children}
      </Text>
    </Button>
  );
};

export default Btn;

const styles = StyleSheet.create({
  btn: {
    borderRadius: 100,
    padding: 12,
    marginVertical: 5,
    backgroundColor: "#57A0D7",
  },
  outline: {
    backgroundColor: "#fff",
    borderColor: "#57a0d7",
    borderWidth: 2,
  },
});
