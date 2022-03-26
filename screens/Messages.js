import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import { useState, React, useEffect } from "react";
import { HStack, ScrollView, VStack } from "native-base";
import MentorMessageCard from "../components/MentorMessageCard";
import { observer } from "mobx-react";
//* STORES:
import mentorStore from "../stores/mentorStore";
import studentStore from "../stores/studentStore";
import { instance } from "../stores/instance";
import authStore from "../stores/authStore";

let profile = {};
const findUserProfile = () => {
  if (authStore.user === null) {
    return null;
  } else if (
    studentStore.students.some(
      (student) => student.user._id === authStore.user._id
    )
  ) {
    return (profile = studentStore.students.find(
      (student) => student.user._id === authStore.user._id
    ));
  } else {
    return (profile = mentorStore.mentors.find(
      (mentor) => mentor.user._id === authStore.user._id
    ));
  }
};

const Search = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("");
  const [conversations, setConversations] = useState([]);

  useEffect(() => {
    const getConversations = async () => {
      try {
        findUserProfile();
        const res = await instance.get("/conversations/" + profile._id);
        setConversations(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getConversations();
  }, [profile._id]);

  const conversationList = conversations.map((conversation) => (
    <MentorMessageCard conversation={conversation} currentProfile={profile} />
  ));

  return (
    <View style={styles.container}>
      <SafeAreaView />
      <View style={styles.header}>
        <Text
          style={{
            fontSize: 20,
            alignSelf: "center",
            fontWeight: "bold",
            margin: 10,
          }}
        >
          Messages
        </Text>
        <HStack>
          <View style={{ flex: 1, marginHorizontal: 12 }}>
            <Input
              placeholder="Search"
              onChangeText={(q) => {
                setQuery(q);
              }}
            />
          </View>
        </HStack>
      </View>
      <ScrollView
        horizontal={true}
        style={{ backgroundColor: "#F5F4F9" }}
      ></ScrollView>
      <VStack style={{ flex: 110 }}>
        <ScrollView>{conversationList}</ScrollView>
      </VStack>
    </View>
  );
};

export default observer(Search);

const styles = StyleSheet.create({
  header: {
    backgroundColor: "white",
  },
  container: {
    width: "100%",
    flex: 1,
    margin: 0,
    backgroundColor: "#F5F4F9",
    // padding: 12,
  },
  majorButtonsInactive: {
    backgroundColor: "white",
    justifyContent: "center",
    textAlign: "center",
    margin: 5,
    borderRadius: 30,

    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  majorButtonsActive: {
    backgroundColor: "#95C8EC",
    justifyContent: "center",
    textAlign: "center",
    margin: 5,
    borderRadius: 30,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  },
  mentorCard: {
    alignItems: "flex-start",
    margin: 5,
    marginHorizontal: 12,
    overflow: "hidden",
    backgroundColor: "white",
    height: 95,
    borderRadius: 20,
    padding: 5,
  },
  cardImg: {
    width: 75,
    height: 75,
    margin: 5,
    borderRadius: 15,
  },
});
