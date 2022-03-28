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
import Btn from "../components/Btn";
import { Ionicons } from "@expo/vector-icons";
import Schedule from "../components/Schedule";

const MentorDetails = ({ route, stars = "5.0", navigation }) => {
  const { mentor } = route.params;

  let isMentor = true;
  if (authStore.user) {
    isMentor = authStore.user.isMentor;
  }

  //* to change the buttons and Background:
  const [meeting, setMeeting] = useState(true);

  //* handlers (Buttons to change back and forth):
  const handleInfo = () => setInfo(true);
  const handleMeetings = () => setInfo(false);

  return (
    <View style={styles.container}>
      <VStack style={styles.header}>
        <View style={{ padding: 12, alignSelf: "flex-start", marginTop: 20 }}>
          <Ionicons
            name="close-outline"
            size={24}
            color="black"
            onPress={() => navigation.navigate("Search")}
          />
        </View>
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
        <HStack style={{ marginTop: 20 }}>
          <Btn style={{ flex: 1 }}>Message</Btn>
          <Btn
            onPress={() => navigation.navigate("MentorsMeetings", { mentor })}
            style={{ flex: 1 }}
          >
            Set Meeting
          </Btn>
          {/* {meeting ? (
            <Btn
              outline
              style={{ flex: 1 }}
              onPress={() => {
                setMeeting(!meeting);
              }}
            >
              {" "}
              Schedule Meeting
            </Btn>
          ) : (
            <Btn
              outline
              style={{ flex: 1 }}
              onPress={() => {
                setMeeting(!meeting);
              }}
            >
              {" "}
              Mentor Info
            </Btn>
          )} */}
        </HStack>
      </VStack>

      {meeting ? (
        <VStack style={{ padding: 12 }}>
          <MentorMyInfo profile={mentor} />
          <Text
            style={{ marginVertical: 10, fontSize: 18, fontWeight: "bold" }}
          >
            Reviews ({stars})
          </Text>
        </VStack>
      ) : (
        <Schedule />
      )}
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
