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
import StudentMtInfo from "./StudentMtInfo";
//* STORES:
import { baseURL } from "../../stores/instance";
import MyMeetings from "./MyMeetings";

const StudentProfile = ({ profile, setProfile }) => {
  //* DECLARE NAV :
  const navigation = useNavigation();

  //* TO CHANGE THE BUTTON & BACKGROUND:
  const [info, setInfo] = useState(true);

  //* HANDLERS:
  const handleInfo = () => setInfo(true);
  const handleMeetings = () => setInfo(false);

  // //* TO MAKE THE USER DEFAULT IMAGE APPEAR :
  // const [image, setImage] = useState(
  //   <Image
  //     source={{
  //       uri: "https://www.kindpng.com/picc/m/22-223965_no-profile-picture-icon-circle-member-icon-png.png",
  //     }}
  //   />
  // );

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
            navigation.navigate("StudentProfileUpdate", { profile, setProfile })
          }
        />

        {/* STUDENT IMAGE: */}
        <Image
          source={{
            uri: profile.image
              ? baseURL + profile.image
              : "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
          }}
          style={styles.headerProfileImg}
          resizeMode="cover"
        />

        {/* FIRST + LAST > NAME */}
        <Text style={styles.headerName}>
          {profile.firstName} {profile.lastName}
        </Text>
      </VStack>

      {/* SHOW THE BUTTONS(MY INFO - MY MEETING) TO MOVE BETWEEN THEM: */}
      <HStack>
        {/*  MY INFO BUTTON OR TITLE */}
        <Pressable onPress={handleInfo} style={styles.switcherItem}>
          <Text style={{ color: info ? "#57A0D7" : "#4F4F4F" }}>My Info</Text>
        </Pressable>

        {/*  MY MEETING BUTTON OR TITLE */}
        <Pressable onPress={handleMeetings} style={styles.switcherItem}>
          <Text style={{ color: !info ? "#57A0D7" : "#4F4F4F" }}>
            My Meetings
          </Text>
        </Pressable>
      </HStack>

      {/*  MY INFO BODY */}
      <VStack style={{ padding: 12, flex: 1 }}>
        {info ? (
          <StudentMtInfo profile={profile} />
        ) : (
          <MyMeetings profile={profile} />
        )}
      </VStack>
    </View>
  );
};

export default observer(StudentProfile);

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
