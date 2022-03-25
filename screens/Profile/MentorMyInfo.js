import { StyleSheet, Text } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const MentorMyInfo = ({ profile }) => {
  return (
    <VStack style={{ backgroundColor: "#fff", padding: 12, borderRadius: 20 }}>
      {/* MAJOR ICON & TEXT : */}
      <HStack style={{ alignItems: "center" }}>
        <Ionicons
          name="briefcase-outline"
          size={30}
          color="#57A0D7"
          style={{ marginRight: 12 }}
        />
        <VStack style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16 }}>Major:</Text>
          <Text style={{ color: "#828282" }}>{profile.major}</Text>
        </VStack>
      </HStack>

      {/* EMPLOYER ICON & TEXT : */}
      <HStack style={{ alignItems: "center" }}>
        <Ionicons
          name="business-outline"
          size={30}
          color="#57A0D7"
          style={{ marginRight: 12 }}
        />
        <VStack style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16 }}>Employer:</Text>
          <Text style={{ color: "#828282" }}>{profile.employer}</Text>
        </VStack>
      </HStack>

      {/* BIO: */}
      <HStack style={{ alignItems: "center" }}>
        <Ionicons
          name="information-circle-outline"
          size={30}
          color="#57A0D7"
          style={{ marginRight: 12 }}
        />
        <VStack style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16 }}>Bio:</Text>
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

        {/* PHONE: */}
        <VStack style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16 }}>Phone:</Text>
          <Text style={{ color: "#828282" }}>{profile.phone}</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default MentorMyInfo;

const styles = StyleSheet.create({});
