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
import { observer } from "mobx-react";
//* EXPO:
import { Picker } from "@react-native-picker/picker"; //! AL ANSARI MAY NEED THIS<<
import * as ImagePicker from "expo-image-picker";
//*  CUSTOMIZED COMPONENT :
import Input from "../../components/Input";
//* STORES:
import studentStore from "../../stores/studentStore";
import { Ionicons } from "@expo/vector-icons";
import { baseURL } from "../../stores/instance";
import authStore from "../../stores/authStore";
import userStore from "../../stores/userStore";

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

const StudentProfileUpdate = ({ navigation, route }) => {
  //*  TAKE PROFILE FROM PARAMS:
  const { profile } = route.params;
  // const user = authStore.user;

  //* TO CATCH & CHANGE THE STUDENT INFO || BODY:
  const [updatedStudent, setUpdatedStudent] = useState(null);
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
    }
  };

  // *  HANDLER TO UPDATE & NAVIGATE:
  const handleSubmit = async () => {
    await studentStore.updateStudent(
      updatedStudent,
      profile.studentProfile._id
    );


    // await userStore.updateUser(updatedUser, image, profile._id);

    // //* IMG CHANGER:
    // const usersFind = userStore.users.find((user) => user._id === profile._id);

    // route.params.setProfile(usersFind);
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
        <VStack style={{ padding: 12 }}>
          <VStack
            style={{ backgroundColor: "#fff", padding: 12, borderRadius: 20 }}
          >
            {/* AGE: */}
            <HStack style={{ alignItems: "center" }}>
              <Ionicons
                name="calendar-outline"
                size={30}
                color="#57A0D7"
                style={{ marginRight: 12 }}
              />
              <VStack style={{ marginVertical: 5, flex: 1 }}>
                <Text style={{ fontSize: 16, marginLeft: 5 }}>Age:</Text>
                <Input
                  placeholder={"Age"}
                  style={{ paddingVertical: 2 }}
                  defaultValue={profile.studentProfile.age.toString()}
                  onChangeText={(value) =>
                    setUpdatedStudent({ ...updatedStudent, age: value })
                  }
                />
              </VStack>
            </HStack>

            {/* PICKER FOR EDUCATION LEVEL (DROP DOWN) + ICON: */}

            <HStack style={{ alignItems: "center", width: "100%" }}>
              <Ionicons
                name="school-outline"
                size={30}
                color="#57A0D7"
                style={{ marginRight: 12 }}
              />
              <Picker
                style={{
                  backgroundColor: "#F5F4F9",
                  height: 70,
                  justifyContent: "center",
                  borderRadius: 20,
                  marginVertical: 5,
                  textAlign: "left",
                  flex: 1,
                }}
                itemStyle={{ fontSize: 14, textAlign: "left" }}
                selectedValue={profile.educationLevel}
                onValueChange={(itemValue) => {
                  setUpdatedStudent({
                    ...updatedStudent,
                    educationLevel: itemValue,
                  });
                }}
              >
                <Picker.Item label="Select level" />
                {OPTIONS.map((option) => (
                  <Picker.Item
                    key={option.id}
                    value={option.educationLevel}
                    label={option.educationLevel}
                  />
                ))}
              </Picker>
            </HStack>

            {/* PHONE: */}
            <HStack style={{ alignItems: "center" }}>
              <Ionicons
                name="call-outline"
                size={30}
                color="#57A0D7"
                style={{ marginRight: 12 }}
              />
              <VStack style={{ marginVertical: 5, flex: 1 }}>
                <Text style={{ fontSize: 16, marginLeft: 5 }}>Phone:</Text>
                <Input
                  placeholder={"Phone"}
                  style={{ paddingVertical: 2 }}
                  defaultValue={profile.phone}
                  onChangeText={(value) =>
                    setUpdatedUser({ ...updatedUser, phone: value })
                  }
                />
              </VStack>
            </HStack>

            {/* GUARDIAN: */}
            <HStack style={{ alignItems: "center" }}>
              <Ionicons
                name="people-outline"
                size={30}
                color="#57A0D7"
                style={{ marginRight: 12 }}
              />
              <VStack style={{ marginVertical: 5, flex: 1 }}>
                <Text style={{ fontSize: 16, marginLeft: 5 }}>Guardian:</Text>
                <Input
                  placeholder={"Guardian"}
                  style={{ paddingVertical: 2 }}
                  defaultValue={profile.studentProfile.guardian}
                  onChangeText={(value) =>
                    setUpdatedStudent({ ...updatedStudent, guardian: value })
                  }
                />
              </VStack>
            </HStack>

            {/* GUARDIAN PHONE: */}
            <HStack style={{ alignItems: "center" }}>
              <Ionicons
                name="call-outline"
                size={30}
                color="#57A0D7"
                style={{ marginRight: 12 }}
              />
              <VStack style={{ marginVertical: 5, flex: 1 }}>
                <Text style={{ fontSize: 16, marginLeft: 5 }}>
                  Guardian Phone:
                </Text>
                <Input
                  placeholder={"Guardian Phone"}
                  style={{ paddingVertical: 2 }}
                  defaultValue={profile.studentProfile.gPhone.toString()}
                  onChangeText={(value) =>
                    setUpdatedStudent({ ...updatedStudent, gPhone: value })
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

export default observer(StudentProfileUpdate);

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
