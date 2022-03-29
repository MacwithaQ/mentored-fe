import { ScrollView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import Btn from "../../components/Btn";
import AddMeeting from "./AddMeeting";
import { useNavigation } from "@react-navigation/native";
import meetingStore from "../../stores/meetingStore";
import { VStack } from "native-base";
import MeetingCard from "../../components/MeetingCard";
import { observer } from "mobx-react";

const MyMeetings = ({ profile }) => {
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const myMeetings = profile.isMentor
    ? meetingStore.meetings
        .filter((meeting) => meeting.mentor === profile._id)
        .map((meeting) => (
          <MeetingCard key={meeting._id} meeting={meeting} profile={profile} />
        ))
    : meetingStore.meetings
        .filter((meeting) => meeting.student === profile._id)
        .map((meeting) => (
          <MeetingCard key={meeting._id} meeting={meeting} profile={profile} />
        ));

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        {isOpen ? (
          <AddMeeting handleOpen={handleOpen} />
        ) : (
          profile.isMentor && (
            <Btn onPress={handleOpen} style={{ marginBottom: 5 }}>
              Add New Meeting
            </Btn>
          )
        )}
      </View>
      <VStack>{myMeetings}</VStack>
    </ScrollView>
  );
};

export default observer(MyMeetings);

const styles = StyleSheet.create({});
