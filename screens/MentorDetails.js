import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { HStack, VStack } from "native-base";
import authStore from "../stores/authStore";
import MentorMyInfo from "./Profile/MentorMyInfo";

const MentorDetails = ({ route, stars = "5.0" }) => {
  const { mentor } = route.params;

  let isMentor = true;
  if (authStore.user) {
    isMentor = authStore.user.isMentor;
  }

  //* to change the buttons and Background:
  const [info, setInfo] = useState(true);

  //* handlers (Buttons to change back and forth):
  const handleInfo = () => setInfo(true);
  const handleMeetings = () => setInfo(false);

  return (
    // <View style={styles.container}>
    //   <Text>
    //     {mentor.firstName} {mentor.lastName}
    //   </Text>
    // </View>
    <View style={styles.container}>
      <VStack style={styles.header}>
        <SafeAreaView />

        <Image
          source={{
            uri:
              //   mentor.image ||  //profile have an image but isnt working
              "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
          }}
          style={styles.headerProfileImg}
        />
        <Text style={styles.headerName}>
          {mentor.firstName} {mentor.lastName}
        </Text>
      </VStack>

      <HStack>
        <Pressable onPress={handleInfo} style={styles.switcherItem}>
          <Text style={{ color: info ? "#57A0D7" : "#4F4F4F" }}>My Info</Text>
        </Pressable>
        {isMentor === false ? (
          <Pressable onPress={handleMeetings} style={styles.switcherItem}>
            <Text style={{ color: !info ? "#57A0D7" : "#4F4F4F" }}>
              Set a Meeting
            </Text>
          </Pressable>
        ) : null}
      </HStack>
      <VStack style={{ padding: 12 }}>
        {info ? <MentorMyInfo profile={mentor} /> : <Text>My Meetings</Text>}
        <Text style={{ marginVertical: 10, fontSize: 18, fontWeight: "bold" }}>
          Reviews ({stars})
        </Text>
      </VStack>
    </View>
  );
};

export default MentorDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F4F9",
  },
  header: {
    backgroundColor: "#fff",
    borderBottomWidth: 0.3,
    borderBottomColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 70,
    paddingBottom: 20,
  },
  headerProfileImg: {
    width: 120,
    height: 120,
    borderRadius: 150,
  },
  headerName: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
  },
  switcherItem: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 40,
    borderColor: "#f5f4f9",
    borderWidth: 1,
    borderBottomColor: "#ddd",
  },
});
