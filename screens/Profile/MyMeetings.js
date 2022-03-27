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
  const navigation = useNavigation();
  const [isOpen, setIsOpen] = useState(false);
  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  const myMeetings = meetingStore.meetings
    .filter((meeting) => meeting.mentor === profile.user._id)
    .map((meeting) => <MeetingCard meeting={meeting} profile={profile} />);

  return (
    <ScrollView style={{ flex: 1 }}>
      <View>
        {isOpen ? (
          <AddMeeting handleOpen={handleOpen} />
        ) : (
          <Btn onPress={handleOpen} style={{ marginBottom: 5 }}>
            Add New Meeting
          </Btn>
        )}
      </View>
      <VStack>{myMeetings}</VStack>
    </ScrollView>
  );
};

export default observer(MyMeetings);

const styles = StyleSheet.create({});
