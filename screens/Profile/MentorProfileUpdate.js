import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { VStack } from "native-base";
//* Customized tags components:
import Input from "../../components/Input";
import MntBtnPrimary from "../../components/MntBtnPrimary";
import MntBtnSecondary from "../../components/MntBtnSecondary";
//* Stores:
import mentorStore from "../../stores/mentorStore";

const MentorProfileUpdate = ({ navigation, route }) => {
  //* State to take the profile already created from the params:
  const [updatedMentor, setUpdatedMentor] = useState(route.params.profile);

  // * handler to call update method & navigate:
  const handleSubmit = async () => {
    await mentorStore.updateMentor(updatedMentor, updatedMentor._id);
    route.params.setProfile(updatedMentor);
    navigation.navigate("Profile");
  };
  return (
    <VStack style={styles.container}>
      <VStack>
        <Input
          placeholder={"First Name"}
          defaultValue={updatedMentor.firstName}
          onChangeText={(value) =>
            setUpdatedMentor({ ...updatedMentor, firstName: value })
          }
        />
      </VStack>
      <VStack>
        <Input
          placeholder={"Last Name"}
          defaultValue={updatedMentor.lastName}
          onChangeText={(value) =>
            setUpdatedMentor({ ...updatedMentor, lastName: value })
          }
        />
      </VStack>
      <VStack>
        <Input
          placeholder={"Major"}
          defaultValue={updatedMentor.major}
          onChangeText={(value) =>
            setUpdatedMentor({ ...updatedMentor, major: value })
          }
        />
      </VStack>
      <VStack>
        <Input
          placeholder={"Employer"}
          defaultValue={updatedMentor.employer}
          onChangeText={(value) =>
            setUpdatedMentor({ ...updatedMentor, employer: value })
          }
        />
      </VStack>
      <VStack>
        <Input
          placeholder={"Phone"}
          defaultValue={updatedMentor.phone}
          onChangeText={(value) =>
            setUpdatedMentor({ ...updatedMentor, phone: value })
          }
        />
      </VStack>
      <VStack>
        <Input
          placeholder={"Bio"}
          defaultValue={updatedMentor.bio}
          onChangeText={(value) =>
            setUpdatedMentor({ ...updatedMentor, bio: value })
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

export default MentorProfileUpdate;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    margin: 0,
    backgroundColor: "white",
    marginTop: 50,
  },
});
