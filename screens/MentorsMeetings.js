import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";
import MeetingCard from "../components/MeetingCard";
import { Ionicons } from "@expo/vector-icons";
import meetingStore from "../stores/meetingStore";

const MentorsMeetings = ({ route, navigation }) => {
  const { mentor } = route.params;

  const meetings = meetingStore.meetings
    .filter((meeting) => meeting.mentor === mentor._id)
    .map((meeting) => (
      <MeetingCard key={meeting._id} meeting={meeting} profile={mentor} />
    ));

  const handleSubmit = () => {};

  return (
    <View>
      <SafeAreaView />
      <Pressable
        style={{
          width: "100%",
          padding: 12,
          borderBottomWidth: 0.3,
          borderBottomColor: "#aaa",
          marginBottom: 12,
        }}
      >
        {/* CANCEL PRESSABLE BUTTON: */}
        <HStack style={{ justifyContent: "space-between" }}>
          <Text style={{ fontSize: 16 }} onPress={() => navigation.goBack()}>
            Back
          </Text>
        </HStack>
      </Pressable>
      <VStack>{meetings}</VStack>
    </View>
  );
};

export default MentorsMeetings;

const styles = StyleSheet.create({
  mentorCard: {
    alignItems: "flex-start",
    margin: 5,
    // marginHorizontal: 12,
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
  },
});
