import {
  Image,
  KeyboardAvoidingView,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { HStack, VStack } from "native-base";
import { observer } from "mobx-react";
//* EXPO:
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
//*  CUSTOMIZED COMPONENT :
import Input from "../../components/Input";
//* STORES:
import mentorStore from "../../stores/mentorStore";
import authStore from "../../stores/authStore";
import { baseURL } from "../../stores/instance";
import userStore from "../../stores/userStore";
import { LogBox } from "react-native";

LogBox.ignoreLogs([
  "Non-serializable values were found in the navigation state",
]);

const MentorProfileUpdate = ({ navigation, route }) => {
  //*  TAKE PROFILE FROM PARAMS:
  const { profile } = route.params;

  //* TO CATCH & CHANGE THE MENTOR INFO || BODY:
  const [updatedMentor, setUpdatedMentor] = useState({
    major: profile.mentorProfile.major,
    employer: profile.mentorProfile.employer,
    bio: profile.mentorProfile.bio,
  });
  const [updatedUser, setUpdatedUser] = useState(null);

  //* TO CATCH & CHANGE THE IMAGE :
  const [image, setImage] = useState(null);

  //* USE PICK IMG TO TAKE IMG FROM THE PHONE LIBRARY:
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setImage(result);
      setUpdatedUser(result);
    }
  };

  // *  HANDLER TO UPDATE & NAVIGATE:
  const handleSubmit = async () => {
    if (updatedUser) {
      await userStore.updateUser(
        updatedUser,
        image,
        profile._id,
        updatedMentor,
        profile.mentorProfile._id
      );
      setUpdatedUser(null);
    } else if (updatedMentor) {
      await mentorStore.updateMentor(updatedMentor, profile.mentorProfile._id);
    }
    //* IMG CHANGER:
    // const mentorsFind = mentorStore.mentors.find(   //check if the image update working delete this. ALRASHED
    //   (mentor) => mentor._id === profile._id
    // );
    // route.params.setProfile(mentorsFind);
    navigation.navigate("Profile");
  };
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container}>
      <VStack style={styles.header}>
        <SafeAreaView />

        <Pressable
          style={{
            width: "100%",
            padding: 12,
            borderBottomWidth: 0.3,
            borderBottomColor: "#aaa",
            marginBottom: 12,
          }}
        >
          {/* CANCEL PRESSABLE BUTTON: */}
          <HStack style={{ justifyContent: "space-between" }}>
            <Text
              style={{ fontWeight: "600", fontSize: 16 }}
              onPress={() => navigation.navigate("Profile")}
            >
              Cancel
            </Text>

            {/* DONE PRESSABLE BUTTON: */}
            <Text
              style={{ fontWeight: "bold", color: "#57A0D7", fontSize: 16 }}
              onPress={handleSubmit}
            >
              Done
            </Text>
          </HStack>
        </Pressable>

        {/* SHOW PROFILE IMG: */}
        <Pressable onPress={pickImage}>
          {!image ? (
            <Image
              source={{
                uri: profile.image
                  ? baseURL + profile.image
                  : "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
              }}
              style={styles.headerProfileImg}
              resizeMode="cover"
            />
          ) : (
            <Image
              source={{
                uri: image.uri,
              }}
              style={styles.headerProfileImg}
              resizeMode="cover"
            />
          )}
        </Pressable>

        {/* FIRST NAME: */}
        <HStack style={{ padding: 7 }}>
          <Input
            style={{ flex: 1, marginHorizontal: 5 }}
            placeholder={"First Name"}
            defaultValue={profile.firstName}
            onChangeText={(value) =>
              setUpdatedUser({ ...updatedUser, firstName: value })
            }
          />

          {/* LAST NAME: */}
          <Input
            style={{ flex: 1, marginHorizontal: 5 }}
            placeholder={"Last Name"}
            defaultValue={profile.lastName}
            onChangeText={(value) =>
              setUpdatedUser({ ...updatedUser, lastName: value })
            }
          />
        </HStack>
      </VStack>
      <ScrollView>
        {/* MAJOR ICON + TEXT : */}
        <VStack style={{ padding: 12 }}>
          <VStack
            style={{
              backgroundColor: "#fff",
              padding: 12,
              borderRadius: 20,
              width: "100%",
            }}
          >
            <VStack style={{ alignItems: "center", marginBottom: 12 }}>
              <HStack
                style={{
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="briefcase-outline"
                  size={30}
                  color="#57A0D7"
                  style={{ marginRight: 12 }}
                />
                <Text style={{ fontSize: 16 }}>Major:</Text>
              </HStack>

              <Input
                placeholder={"Major"}
                style={{ width: "100%" }}
                defaultValue={profile.mentorProfile.major}
                onChangeText={(value) =>
                  setUpdatedMentor({ ...updatedMentor, major: value })
                }
              />
            </VStack>

            {/* EMPLOYER ICON + TEXT : */}
            <VStack style={{ alignItems: "center", marginBottom: 12 }}>
              <HStack
                style={{
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="business-outline"
                  size={30}
                  color="#57A0D7"
                  style={{ marginRight: 12 }}
                />
                <Text style={{ fontSize: 16 }}>Employer:</Text>
              </HStack>
              <Input
                placeholder={"Employer"}
                style={{ width: "100%" }}
                defaultValue={profile.mentorProfile.employer}
                onChangeText={(value) =>
                  setUpdatedMentor({ ...updatedMentor, employer: value })
                }
              />
            </VStack>

            {/* BIO ICON + TEXT : */}
            <VStack style={{ alignItems: "center", marginBottom: 12 }}>
              <HStack
                style={{
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="information-circle-outline"
                  size={30}
                  color="#57A0D7"
                  style={{ marginRight: 12 }}
                />
                <Text style={{ fontSize: 16 }}>Bio:</Text>
              </HStack>
              <Input
                placeholder={"Bio"}
                style={{ width: "100%" }}
                defaultValue={profile.mentorProfile.bio}
                onChangeText={(value) =>
                  setUpdatedMentor({ ...updatedMentor, bio: value })
                }
              />
            </VStack>

            {/* PHONE ICON + TEXT : */}
            <VStack style={{ alignItems: "center" }}>
              <HStack
                style={{
                  width: "100%",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="call-outline"
                  size={30}
                  color="#57A0D7"
                  style={{ marginRight: 12 }}
                />
                <Text style={{ fontSize: 16 }}>Phone:</Text>
              </HStack>
              <Input
                placeholder={"Phone"}
                style={{ width: "100%" }}
                defaultValue={profile.phone}
                onChangeText={(value) =>
                  setUpdatedMentor({ ...updatedMentor, phone: value })
                }
              />
            </VStack>
          </VStack>
        </VStack>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default observer(MentorProfileUpdate);

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
    paddingTop: 60,
  },
  headerProfileImg: {
    width: 120,
    height: 120,
    borderRadius: 150,
    backgroundColor: "#ddd",
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
