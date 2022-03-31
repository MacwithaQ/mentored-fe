import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { HStack, Toast, VStack } from "native-base";
import DateTimePicker from "@react-native-community/datetimepicker";
import Btn from "../../components/Btn";
import { Ionicons } from "@expo/vector-icons";
import meetingStore from "../../stores/meetingStore";
import { observer } from "mobx-react";

const AddMeeting = ({ handleOpen }) => {
  const [date, setDate] = useState(new Date());

  const handleDate = (e, theDate) => {
    const currDate = theDate || date;
    setDate(currDate);
  };
  // Changed meeting to availability
  const handleAdd = () => {
    meetingStore.addMeeting(date);
    handleOpen();
    Toast.show({
      title: "Availability Added",
      placement: "top",
    });
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
          Add Availability
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
