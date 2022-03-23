import { StyleSheet, Text, View } from "react-native";
import React from "react";
import NotUserSVG from "../assets/NotUser.svg";
import { VStack } from "native-base";

const NotUserPage = () => {
  return (
    <VStack style={styles.container}>
      <NotUserSVG width="100%" />
    </VStack>
  );
};

export default NotUserPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
