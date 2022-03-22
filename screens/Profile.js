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
import mentorStore from "../stores/mentorStore";
import { Ionicons } from "@expo/vector-icons";

const Profile = () => {
  const [user, setUser] = useState(authStore.user);
  const [info, setInfo] = useState(true);
  const [profile, setProfile] = useState(
    user.isMentor
      ? mentorStore.mentors.find((mentor) => mentor.user._id === user._id)
      : null
  );
  console.log(profile);

  const handleInfo = () => setInfo(true);
  const handleMeetings = () => setInfo(false);
  return (
    <View style={styles.container}>
      <VStack style={styles.header}>
        <SafeAreaView />
        <Ionicons
          name="create-outline"
          size={24}
          color="black"
          style={{ alignSelf: "flex-end", marginRight: 12, color: "#57A0D7" }}
          onPress={() => {}}
        />
        <Image
          source={{
            uri: profile.image
              ? profile.image
              : "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
          }}
          style={styles.headerProfileImg}
        />
        <Text style={styles.headerName}>
          {profile.firstName} {profile.lastName}
        </Text>
      </VStack>
      <HStack>
        <Pressable onPress={handleInfo} style={styles.switcherItem}>
          <Text style={{ color: info ? "#57A0D7" : "#4F4F4F" }}>My Info</Text>
        </Pressable>
        <Pressable onPress={handleMeetings} style={styles.switcherItem}>
          <Text style={{ color: !info ? "#57A0D7" : "#4F4F4F" }}>
            My Meetings
          </Text>
        </Pressable>
      </HStack>
      {info ? <MyInfo profile={profile} /> : <Text>My Meetings</Text>}
    </View>
  );
};

const MyInfo = ({ profile }) => {
  return (
    <VStack>
      <VStack>
        <VStack>
          <Text>Major:</Text>
          <Text>{profile.major}</Text>
        </VStack>
        <VStack>
          <Text>Employer:</Text>
          <Text>{profile.employer}</Text>
        </VStack>
        <VStack>
          <Text>Bio:</Text>
          <Text>{profile.bio}</Text>
        </VStack>
      </VStack>
    </VStack>
  );
};

export default Profile;

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
