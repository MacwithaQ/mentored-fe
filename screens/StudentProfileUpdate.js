import { StyleSheet } from "react-native";
import React, { useState } from "react";
import { VStack } from "native-base";
import { Picker } from "@react-native-picker/picker";
//* Customized tags components:
import Input from "../components/Input";
import MntBtnPrimary from "../components/MntBtnPrimary";
import MntBtnSecondary from "../components/MntBtnSecondary";
//* Stores:
import studentStore from "../stores/studentStore";

const StudentProfileUpdate = ({ navigation, route }) => {
  //* State to take the profile already created from the params:
  const [updatedStudent, setUpdatedStudent] = useState(route.params.profile);

  // * handler to call update method & navigate:
  const handleSubmit = async () => {
    await studentStore.updateStudent(updatedStudent, updatedStudent._id);
    route.params.setProfile(updatedStudent);
    navigation.navigate("Profile");
  };
  const OPTIONS = [
    {
      id: 1,
      educationLevel: "Grade 9",
    },
    {
      id: 2,
      educationLevel: "Grade 10",
    },
    {
      id: 3,
      educationLevel: "Grade 11",
    },
    {
      id: 4,
      educationLevel: "Grade 12",
    },
    {
      id: 5,
      educationLevel: "Deploma",
    },
    {
      id: 6,
      educationLevel: "Bachelor",
    },
    {
      id: 7,
      educationLevel: "Master",
    },
    {
      id: 8,
      educationLevel: "PHD",
    },
  ];

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
      <Picker
        style={{
          backgroundColor: "#F5F4F9",
          height: 70,
          justifyContent: "center",
          overflow: "hidden",
          borderRadius: 20,
          marginVertical: 5,
          textAlign: "left",
        }}
        itemStyle={{ fontSize: 14, textAlign: "left" }}
        selectedValue={updatedStudent.educationLevel}
        onValueChange={(itemValue) => {
          setUpdatedStudent({ ...updatedStudent, educationLevel: itemValue });
        }}
      >
        {OPTIONS.map((option) => (
          <Picker.Item
            key={option.id}
            value={option.educationLevel}
            label={option.educationLevel}
          />
        ))}
      </Picker>
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
        onPress={() => navigation.navigate("Profile")}
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
    backgroundColor: "white",
    marginTop: 50,
  },
});
