import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState, useEffect } from "react";
import { HStack, VStack } from "native-base";
import authStore from "../stores/authStore";
import MentorMyInfo from "./Profile/MentorMyInfo";
import Btn from "../components/Btn";
import { Ionicons } from "@expo/vector-icons";
import Schedule from "../components/Schedule";
import conversationStore from "../stores/conversationStore";
//import RegisterForPushNotifications from "../components/RegisterForPushNotifications";

const MentorDetails = ({ route, stars = "5.0", navigation }) => {
  const { mentor } = route.params;

  const user = authStore.user || null;

  //* to change the buttons and Background:
  const [meeting, setMeeting] = useState(true);

  //* handlers (Buttons to change back and forth):
  const handleInfo = () => setInfo(true);
  const handleMeetings = () => setInfo(false);
  const handleMessage = () => {
    if (
      conversationStore.conversations
        .map((conversation) => conversation.members)
        .flat()
        .some((id) => id === mentor._id)
    ) {
      user && user._id, console.log("conversation with this mentor exists");
      return null;
    } else {
      conversationStore.createConversation(
        authStore.user._id,
        mentor,
        navigation
      );
    }
  };

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

        {user && !user.isMentor && (
          <HStack style={{ marginTop: 20, paddingHorizontal: 10 }}>
            <Btn onPress={handleMessage} style={{ flex: 1 }}>
              Message
            </Btn>
            <Btn
              onPress={() => navigation.navigate("MentorsMeetings", { mentor })}
              style={{ flex: 1 }}
            >
              Set Meeting
            </Btn>
          </HStack>
        )}
        {/* ADDED: */}
        <HStack>{/* <RegisterForPushNotifications /> */}</HStack>
      </VStack>

      <VStack style={{ padding: 12 }}>
        <MentorMyInfo profile={mentor} />
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
