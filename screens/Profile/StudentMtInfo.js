import { StyleSheet, Text } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const StudentMtInfo = ({ profile }) => {
  return (
    <VStack style={{ backgroundColor: "#fff", padding: 12, borderRadius: 20 }}>
      <HStack style={{ alignItems: "center" }}>
        <Ionicons
          name="calendar-outline"
          size={30}
          color="#57A0D7"
          style={{ marginRight: 12 }}
        />
        <VStack style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16 }}>Age:</Text>
          <Text style={{ color: "#828282" }}>{profile.age}</Text>
        </VStack>
      </HStack>
      <HStack style={{ alignItems: "center" }}>
        <Ionicons
          name="school-outline"
          size={30}
          color="#57A0D7"
          style={{ marginRight: 12 }}
        />
        <VStack style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16 }}>EducationLevel:</Text>
          <Text style={{ color: "#828282" }}>{profile.educationLevel}</Text>
        </VStack>
      </HStack>
      {/* <VStack style={{ marginVertical: 10 }}>
        <Text style={{ fontSize: 16,  }}>Balance:</Text>
        <Text style={{ color: "#828282" }}>{profile.balance}</Text>
      </VStack> */}
      <HStack style={{ alignItems: "center" }}>
        <Ionicons
          name="call-outline"
          size={30}
          color="#57A0D7"
          style={{ marginRight: 12 }}
        />
        <VStack style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16 }}>Phone:</Text>
          <Text style={{ color: "#828282" }}>{profile.phone}</Text>
        </VStack>
      </HStack>
      {/* <HStack style={{ alignItems: "center" }}>
        <Ionicons
          name="mail-outline"
          size={30}
          color="#57A0D7"
          style={{ marginRight: 12 }}
        />
        <VStack style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16 }}>Email:</Text>
          <Text style={{ color: "#828282" }}>{authStore.user.email}</Text>
        </VStack>
      </HStack> */}
      <HStack style={{ alignItems: "center" }}>
        <Ionicons
          name="people-outline"
          size={30}
          color="#57A0D7"
          style={{ marginRight: 12 }}
        />
        <VStack style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 16 }}>Guardian:</Text>
          <Text style={{ color: "#828282" }}>{profile.guardian}</Text>
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
          <Text style={{ fontSize: 16 }}>Guardian Phone:</Text>
          <Text style={{ color: "#828282" }}>{profile.gPhone}</Text>
        </VStack>
      </HStack>
    </VStack>
  );
};

export default StudentMtInfo;

const styles = StyleSheet.create({});
