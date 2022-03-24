import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import { HStack, VStack } from "native-base";
//* Customized tags components:
import Input from "../../components/Input";
import Btn from "../../components/Btn";
//* Stores:
import mentorStore from "../../stores/mentorStore";
import { Ionicons } from "@expo/vector-icons";

const MentorProfileUpdate = ({ navigation, route }) => {
  //* State to take the profile already created from the params:
  const [updatedMentor, setUpdatedMentor] = useState(route.params.profile);
  const { profile } = route.params;

  // * handler to call update method & navigate:
  const handleSubmit = async () => {
    await mentorStore.updateMentor(updatedMentor, updatedMentor._id);
    route.params.setProfile(updatedMentor);
    navigation.navigate("Profile");
  };
  return (
    <View style={styles.container}>
      <VStack style={styles.header}>
        <SafeAreaView />

        {/* EDIT ICON: */}
        <Ionicons
          name="close-outline"
          size={24}
          color="black"
          style={{ alignSelf: "flex-start", padding: 12 }}
          onPress={() => navigation.navigate("Profile")}
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
        {/* <Text style={styles.headerName}>
          {profile.firstName} {profile.lastName}
        </Text> */}
        <HStack style={{ padding: 7 }}>
          <Input
            style={{ flex: 1, marginHorizontal: 5 }}
            placeholder={"First Name"}
            defaultValue={updatedMentor.firstName}
            onChangeText={(value) =>
              setUpdatedMentor({ ...updatedMentor, firstName: value })
            }
          />
          <Input
            style={{ flex: 1, marginHorizontal: 5 }}
            placeholder={"Last Name"}
            defaultValue={updatedMentor.lastName}
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
              <VStack style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 16, marginLeft: 5 }}>Major:</Text>
                <Input
                  placeholder={"Major"}
                  style={{ paddingVertical: 2 }}
                  defaultValue={updatedMentor.major}
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
              <VStack style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 16, marginLeft: 5 }}>Employer:</Text>
                <Input
                  placeholder={"Employer"}
                  style={{ paddingVertical: 2 }}
                  defaultValue={updatedMentor.employer}
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
              <VStack style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 16, marginLeft: 5 }}>Bio:</Text>
                <Input
                  placeholder={"Bio"}
                  style={{ paddingVertical: 2 }}
                  defaultValue={updatedMentor.bio}
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
              <VStack style={{ marginVertical: 10 }}>
                <Text style={{ fontSize: 16, marginLeft: 5 }}>Phone:</Text>
                <Input
                  placeholder={"Phone"}
                  style={{ paddingVertical: 2 }}
                  defaultValue={updatedMentor.phone}
                  onChangeText={(value) =>
                    setUpdatedMentor({ ...updatedMentor, phone: value })
                  }
                />
              </VStack>
            </HStack>
          </VStack>
        </VStack>
        <View style={{ paddingHorizontal: 12 }}>
          <Btn style={{ marginTop: 0 }} onPress={handleSubmit}>
            Submit
          </Btn>
        </View>
      </ScrollView>
    </View>
  );
};

export default MentorProfileUpdate;

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
