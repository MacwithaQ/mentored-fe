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
import { Ionicons } from "@expo/vector-icons";
import { observer } from "mobx-react";
import { useNavigation } from "@react-navigation/native";
import MentorMyInfo from "./MentorMyInfo";

const MentorProfile = ({ profile, setProfile, stars = "5.0" }) => {
  //* declare nav :
  const navigation = useNavigation();

  //* to change the buttons and Background:
  const [info, setInfo] = useState(true);

  //* handlers (Buttons to change back and forth):
  const handleInfo = () => setInfo(true);
  const handleMeetings = () => setInfo(false);

  return (
    <View style={styles.container}>
      <VStack style={styles.header}>
        <SafeAreaView />

        {/* EDIT ICON: */}
        <Ionicons
          name="create-outline"
          size={24}
          color="black"
          style={{ alignSelf: "flex-end", marginRight: 12, color: "#57A0D7" }}
          onPress={() =>
            navigation.navigate("MentorProfileUpdate", { profile, setProfile })
          }
        />

        {/* Show profile img + firstName  - lastName: */}
        <Image
          source={{
            uri:
              profile.image ||
              "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
          }}
          style={styles.headerProfileImg}
        />
        <Text style={styles.headerName}>
          {profile.firstName} {profile.lastName}
        </Text>
      </VStack>

      {/* Show to Buttons(My info - My meeting) to move between them: */}
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
      <VStack style={{ padding: 12 }}>
        {info ? <MentorMyInfo profile={profile} /> : <Text>My Meetings</Text>}
        <Text style={{ marginVertical: 10, fontSize: 18, fontWeight: "bold" }}>
          Reviews ({stars})
        </Text>
      </VStack>
    </View>
  );
};

//* info in the box below the img:

export default observer(MentorProfile);

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
