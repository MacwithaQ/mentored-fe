import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";

const Profile = () => {
  return (
    <View style={styles.container}>
      <SafeAreaView />
      <Text>Profile</Text>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F4F9",
  },
});
