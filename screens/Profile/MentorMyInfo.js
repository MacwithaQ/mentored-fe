import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const MentorMyInfo = ({ profile }) => {
  return (
    <VStack style={{ backgroundColor: "#fff", padding: 12, borderRadius: 20 }}>
      <HStack style={{ alignItems: "center" }}>
        <Ionicons
          name="briefcase-outline"
          size={30}
          color="#57A0D7"
          style={{ marginRight: 12 }}
        />
        <VStack style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Major:</Text>
          <Text style={{ color: "#828282" }}>{profile.major}</Text>
        </VStack>
      </HStack>
      <HStack style={{ alignItems: "center" }}>
        <Ionicons
          name="business-outline"
          size={30}
          color="#57A0D7"
          style={{ marginRight: 12 }}
        />
        <VStack style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Employer:</Text>
          <Text style={{ color: "#828282" }}>{profile.employer}</Text>
        </VStack>
      </HStack>
      <HStack style={{ alignItems: "center" }}>
        <Ionicons
          name="information-circle-outline"
          size={30}
          color="#57A0D7"
          style={{ marginRight: 12 }}
        />
        <VStack style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Bio:</Text>
          <Text style={{ color: "#828282" }}>{profile.bio}</Text>
        </VStack>
      </HStack>
      <HStack style={{ alignItems: "center" }}>
        <Ionicons
          name="call-outline"
          size={30}
          color="#57A0D7"
          style={{ marginRight: 12 }}
        />
        <VStack style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16, fontWeight: "bold" }}>Phone:</Text>
          <Text style={{ color: "#828282" }}>{profile.phone}</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default MentorMyInfo;

const styles = StyleSheet.create({});
