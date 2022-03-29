import {
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useEffect } from "react";
import { HStack, VStack } from "native-base";
import MeetingCard from "../components/MeetingCard";
import { Ionicons } from "@expo/vector-icons";
import meetingStore from "../stores/meetingStore";
import { observer } from "mobx-react";

const MentorsMeetings = ({ route, navigation }) => {
  const { mentor } = route.params;

  let meetings = meetingStore.meetings
    .filter((meeting) => meeting.mentor === mentor._id)
    .map((meeting) => (
      <MeetingCard
        key={meeting._id}
        meeting={meeting}
        profile={mentor}
        navigation={navigation}
      />
    ));

  useEffect(() => {
    meetings = meetingStore.meetings
      .filter((meeting) => meeting.mentor === mentor._id)
      .map((meeting) => (
        <MeetingCard
          key={meeting._id}
          meeting={meeting}
          profile={mentor}
          navigation={navigation}
        />
      ));
  }, [meetingStore.meetings]);

  const handleSubmit = () => {};

  return (
    <View style={{ flex: 1 }}>
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
      <ScrollView>
        {meetings.length <= 0 ? (
          <Text
            style={{ textAlign: "center", fontWeight: "bold", fontSize: 20 }}
          >
            No Meetings Available
          </Text>
        ) : (
          <VStack style={{ flex: 1, height: "100%" }}>{meetings}</VStack>
        )}
      </ScrollView>
    </View>
  );
};

export default observer(MentorsMeetings);

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
