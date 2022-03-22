import { Pressable, StyleSheet, Text, TextInput, View } from "react-native";
import React, { useState } from "react";
import { Button, HStack, VStack } from "native-base";
import Input from "../components/Input";
import MntBtnPrimary from "../components/MntBtnPrimary";
import MntBtnSecondary from "../components/MntBtnSecondary";
import mentorStore from "../stores/mentorStore";
import studentStore from "../stores/studentStore";

const StudentProfileUpdate = ({ navigation, route }) => {
  const [updatedStudent, setUpdatedStudent] = useState(route.params.profile);
  //   const { profile } = route.params;
  console.log("update mentor", updatedStudent);
  const handleSubmit = async () => {
    await studentStore.updateStudent(updatedStudent, updatedStudent._id);
    route.params.setProfile(updatedStudent);
    navigation.navigate("StudentProfileUpdate");
  };
  return (
    <VStack style={styles.container}>
      <VStack>
        <Input
          placeholder={"First Name"}
          defaultValue={updatedStudent.firstName}
          onChangeText={(value) =>
            setUpdatedStudent({ ...updatedStudent, firstName: value })
          }
        />
      </VStack>
      <VStack>
        <Input
          placeholder={"Last Name"}
          defaultValue={updatedStudent.lastName}
          onChangeText={(value) =>
            setUpdatedStudent({ ...updatedStudent, lastName: value })
          }
        />
      </VStack>
      <VStack>
        <Input
          placeholder={"Age"}
          defaultValue={updatedStudent.age}
          onChangeText={(value) =>
            setUpdatedStudent({ ...updatedStudent, age: value })
          }
        />
      </VStack>
      <VStack>
        <Input
          placeholder={"educationLevel"}
          defaultValue={updatedStudent.educationLevel}
          onChangeText={(value) =>
            setUpdatedStudent({ ...updatedStudent, educationLevel: value })
          }
        />
      </VStack>
      {/* <VStack>
        <Input
          placeholder={"Balance"}
          defaultValue={updatedStudent.balance}
          onChangeText={(value) =>
            setUpdatedStudent({ ...updatedStudent, balance: value })
          }
        />
      </VStack> */}
      <MntBtnPrimary text="Submit" onPress={handleSubmit} />
      <MntBtnSecondary
        text="Cancel"
        onPress={() => navigation.navigate("StudentProfile")}
      />
    </VStack>
  );
};

export default StudentProfileUpdate;

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
