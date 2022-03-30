import { Pressable, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, Toast, VStack } from "native-base";
import Btn from "../components/Btn";
import authStore from "../stores/authStore";
import meetingStore from "../stores/meetingStore";
import { observer } from "mobx-react";
import mentorStore from "../stores/mentorStore";
import userStore from "../stores/userStore";

const MeetingDetail = ({ navigation, route }) => {
  const { profile, meeting } = route.params;
  const mentor = userStore.users.find((user) => user._id === meeting.mentor);
  const handleBook = () => {
    meetingStore.bookMeeting(meeting._id, (price = 20));

    navigation.goBack();
    Toast.show({
      title: "Meeting Booked",
      placement: "top",
    });
  };
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
      <View
        style={{
          flex: 1,
          alignItems: "center",
          padding: 12,
        }}
      >
        <VStack
          style={{
            backgroundColor: "#fff",
            width: "100%",
            padding: 12,
            borderRadius: 20,
          }}
        >
          <VStack style={{ marginBottom: 12 }}>
            <Text
              style={{ alignSelf: "center", fontWeight: "bold", fontSize: 18 }}
            >
              {mentor.firstName} {mentor.lastName}
            </Text>
            <Text
              style={{ alignSelf: "center", color: "#828282", fontSize: 14 }}
            >
              {mentor.major}
            </Text>
          </VStack>
          <HStack>
            <VStack
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: 16 }}>Date</Text>
              <Text style={{ color: "#828282" }}>
                {new Date(meeting.date).getDate().toString()}/
                {new Date(meeting.date).getMonth().toString()}/
                {new Date(meeting.date).getFullYear().toString()}
              </Text>
            </VStack>
            <VStack
              style={{
                flex: 1,
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Text style={{ fontWeight: "500", fontSize: 16 }}>Time</Text>
              <Text style={{ color: "#828282" }}>
                {new Date(meeting.date).getHours().toString()}:
                {new Date(meeting.date).getMinutes().toString()}
              </Text>
            </VStack>
          </HStack>
          {meeting.isAvailable ? (
            <VStack>
              <View
                style={{
                  backgroundColor: "#27AE6050",
                  height: 40,
                  justifyContent: "center",
                  alignItems: "center",
                  borderRadius: 10,
                  margin: 12,
                  marginBottom: 7,
                  marginHorizontal: 5,
                  borderColor: "#27AE6060",
                  borderWidth: 1,
                }}
              >
                <Text>available</Text>
              </View>
              {!authStore.user.isMentor && <Btn onPress={handleBook}>Book</Btn>}
            </VStack>
          ) : (
            <View
              style={{
                backgroundColor: "#EB575750",
                height: 40,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 10,
                marginTop: 12,
                borderColor: "#EB575760",
                borderWidth: 1,
              }}
            >
              <Text> Booked</Text>
            </View>
          )}
        </VStack>
      </View>
    </View>
  );
};

export default observer(MeetingDetail);

const styles = StyleSheet.create({});
