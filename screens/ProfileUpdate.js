import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Button, HStack, VStack } from "native-base";
import Input from "../components/Input";
import MntBtnPrimary from "../components/MntBtnPrimary";
import MntBtnSecondary from "../components/MntBtnSecondary";
import mentorStore from "../stores/mentorStore";

const ProfileUpdate = ({ navigation, route }) => {
  const [updatedMentor, setUpdatedMentor] = useState(route.params.profile);
  //   const { profile } = route.params;
  console.log("update mentor", updatedMentor);
  const handleSubmit = async () => {
    await mentorStore.updateMentor(updatedMentor, updatedMentor._id);
    route.params.setProfile(updatedMentor);
    navigation.navigate("Profile");
  };
  return (
    <VStack style={styles.container}>
      <VStack>
        <Input
          placeholder={"First name"}
          onChangeText={(value) =>
            setUpdatedMentor({ ...updatedMentor, firstName: value })
          }
        />
      </VStack>
      <VStack>
        <Input
          placeholder={"Last name"}
          onChangeText={(value) =>
            setUpdatedMentor({ ...updatedMentor, lastName: value })
          }
        />
      </VStack>
      <VStack>
        <Input
          placeholder={"Major"}
          onChangeText={(value) =>
            setUpdatedMentor({ ...updatedMentor, major: value })
          }
        />
      </VStack>
      <VStack>
        <Input
          placeholder={"Employer"}
          onChangeText={(value) =>
            setUpdatedMentor({ ...updatedMentor, employer: value })
          }
        />
      </VStack>
      <MntBtnPrimary text="Submit" onPress={handleSubmit} />
      <MntBtnSecondary
        text="Cancel"
        onPress={() => navigation.navigate("Profile")}
      />
    </VStack>
  );
};

export default ProfileUpdate;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    margin: 0,
    // backgroundColor: "blue",
    backgroundColor: "white",
    // padding: 12,
    marginTop: 50,
  },

  //   input: {
  //     height: 40,
  //     width: 300,
  //     borderWidth: 1,
  //     borderRadius: 5,
  //     padding: 10,
  //     margin: 12,
  //   },
  title: {},
});
