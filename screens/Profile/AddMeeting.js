import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { HStack, VStack } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import Btn from "../../components/Btn";
import { Ionicons } from "@expo/vector-icons";
import meetingStore from "../../stores/meetingStore";
import { observer } from "mobx-react";

const AddMeeting = ({ handleOpen }) => {
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState(new Date());

  console.log(date);

  const handleDate = (e, theDate) => {
    const currDate = theDate || date;
    setDate(currDate);
  };
  const handleTime = (e, theTime) => {
    const currTime = theTime;
    setTime(currTime);
  };

  const handleAdd = () => {
    meetingStore.addMeeting(date);
    handleOpen();
  };
  return (
    // <View style={styles.container}>
    <>
      <VStack style={styles.header}>
        <Text
          style={{
            fontSize: 20,
            alignSelf: "center",
            fontWeight: "bold",
            margin: 10,
          }}
        >
          Add New Meeting
        </Text>

        <HStack style={{ alignItems: "center", marginBottom: 15 }}>
          <Text>Schedule</Text>
          <DateTimePicker
            mode="time"
            display="compact"
            style={{ flex: 1, backgroundColor: "#fff" }}
            value={date}
            onChange={handleDate}
          />
        </HStack>
        <HStack style={{ alignItems: "center", marginBottom: 15 }}>
          <Text>Schedule</Text>
          <DateTimePicker
            mode="date"
            display="default"
            style={{ flex: 1, backgroundColor: "#fff" }}
            value={date}
            onChange={handleDate}
            minimumDate={Date.now()}
          />
        </HStack>
        <Btn onPress={handleAdd}>Save</Btn>
        <Btn onPress={handleOpen} outline>
          Cancel
        </Btn>
      </VStack>
    </>
    // </View>
  );
};

export default observer(AddMeeting);

const styles = StyleSheet.create({
  container: {
    // height: "100%",
    backgroundColor: "#F5F4F9",
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "center",
    padding: 12,
  },

  header: {
    width: "100%",
    backgroundColor: "#fff",
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.62,
    elevation: 4,
    padding: 12,
  },
});
