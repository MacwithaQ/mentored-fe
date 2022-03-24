import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { HStack, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";
import { observer } from "mobx-react";
//* Customized tags components:
import Input from "../../components/Input";
import Btn from "../../components/Btn";
//* Stores:
import mentorStore from "../../stores/mentorStore";

import { Ionicons } from "@expo/vector-icons";

import { baseURL } from "../../stores/instance";

const MentorProfileUpdate = ({ navigation, route }) => {
  //* State to take the profile already created from the params:
  const { profile } = route.params;
  const [updatedMentor, setUpdatedMentor] = useState({
    firstName: profile.firstName,
    lastName: profile.lastName,
    major: profile.major,
    employer: profile.employer,
    bio: profile.bio,
    phone: profile.phone,
    _id: profile._id,
  });

  const [image, setImage] = useState();

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library

    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    // let uriParts = result.uri.split(".");
    // let fileType = uriParts[uriParts.length - 1];
    // let uri = result.uri;
    if (!result.cancelled) {
      setImage(result);
    }
  };
  // * handler to call update method & navigate:
  const handleSubmit = async () => {
    await mentorStore.updateMentor(
      updatedMentor,
      image,
      route.params.setProfile
    );
    // img changer:
    const mentorsFind = mentorStore.mentors.find(
      (mentor) => mentor._id === profile._id
    );
    route.params.setProfile(mentorsFind);
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
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
          <HStack style={{ justifyContent: "space-between" }}>
            <Text
              style={{ fontWeight: "600", fontSize: 16 }}
              onPress={() => navigation.navigate("Profile")}
            >
              Cancel
            </Text>

            <Text
              style={{ fontWeight: "bold", color: "#57A0D7", fontSize: 16 }}
              onPress={handleSubmit}
            >
              Done
            </Text>
          </HStack>
        </Pressable>

        {/* Show profile img + firstName  - lastName: */}
        {/* <Image
          source={{
            uri:
              // baseURL + profile.image ||
              "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
          }}
          style={styles.headerProfileImg}
        /> */}
        <Pressable onPress={pickImage}>
          {!image ? (
            <Image
              source={{ uri: baseURL + profile.image }}
              style={styles.headerProfileImg}
              resizeMode="cover"
            />
          ) : (
            <Image
              source={{ uri: image.uri }}
              style={styles.headerProfileImg}
              resizeMode="cover"
            />
          )}
        </Pressable>
        {/* <Text style={styles.headerName}>
          {profile.firstName} {profile.lastName}
        </Text> */}
        <HStack style={{ padding: 7 }}>
          <Input
            style={{ flex: 1, marginHorizontal: 5 }}
            placeholder={"First Name"}
            defaultValue={profile.firstName}
            onChangeText={(value) =>
              setUpdatedMentor({ ...updatedMentor, firstName: value })
            }
          />
          <Input
            style={{ flex: 1, marginHorizontal: 5 }}
            placeholder={"Last Name"}
            defaultValue={profile.lastName}
            onChangeText={(value) =>
              setUpdatedMentor({ ...updatedMentor, lastName: value })
            }
          />
        </HStack>
      </VStack>
      <ScrollView>
        <VStack style={{ padding: 12 }}>
          <VStack
            style={{ backgroundColor: "#fff", padding: 12, borderRadius: 20 }}
          >
            <HStack style={{ alignItems: "center" }}>
              <Ionicons
                name="briefcase-outline"
                size={30}
                color="#57A0D7"
                style={{ marginRight: 12 }}
              />
              <VStack style={{ marginVertical: 10, flex: 1 }}>
                <Text style={{ fontSize: 16, marginLeft: 5 }}>Major:</Text>
                <Input
                  placeholder={"Major"}
                  style={{ paddingVertical: 2 }}
                  defaultValue={profile.major}
                  onChangeText={(value) =>
                    setUpdatedMentor({ ...updatedMentor, major: value })
                  }
                />
              </VStack>
            </HStack>
            <HStack style={{ alignItems: "center" }}>
              <Ionicons
                name="business-outline"
                size={30}
                color="#57A0D7"
                style={{ marginRight: 12 }}
              />
              <VStack style={{ marginVertical: 10, flex: 1 }}>
                <Text style={{ fontSize: 16, marginLeft: 5 }}>Employer:</Text>
                <Input
                  placeholder={"Employer"}
                  style={{ paddingVertical: 2 }}
                  defaultValue={profile.employer}
                  onChangeText={(value) =>
                    setUpdatedMentor({ ...updatedMentor, employer: value })
                  }
                />
              </VStack>
            </HStack>
            <HStack style={{ alignItems: "center" }}>
              <Ionicons
                name="information-circle-outline"
                size={30}
                color="#57A0D7"
                style={{ marginRight: 12 }}
              />
              <VStack style={{ marginVertical: 10, flex: 1 }}>
                <Text style={{ fontSize: 16, marginLeft: 5 }}>Bio:</Text>
                <Input
                  placeholder={"Bio"}
                  style={{ paddingVertical: 2 }}
                  defaultValue={profile.bio}
                  onChangeText={(value) =>
                    setUpdatedMentor({ ...updatedMentor, bio: value })
                  }
                />
              </VStack>
            </HStack>
            <HStack style={{ alignItems: "center" }}>
              <Ionicons
                name="call-outline"
                size={30}
                color="#57A0D7"
                style={{ marginRight: 12 }}
              />
              <VStack style={{ marginVertical: 10, flex: 1 }}>
                <Text style={{ fontSize: 16, marginLeft: 5 }}>Phone:</Text>
                <Input
                  placeholder={"Phone"}
                  style={{ paddingVertical: 2 }}
                  defaultValue={profile.phone}
                  onChangeText={(value) =>
                    setUpdatedMentor({ ...updatedMentor, phone: value })
                  }
                />
              </VStack>
            </HStack>
          </VStack>
        </VStack>
      </ScrollView>
    </View>
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
