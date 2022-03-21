import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Messages = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text>Messages</Text>
    </View>
  );
};

export default Messages;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F4F9",
  },
});
