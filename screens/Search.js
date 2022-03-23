import {
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  Image,
} from "react-native";
import Input from "../components/Input";
import { useState } from "react";
import { Feather } from "@expo/vector-icons";
import React from "react";
import { HStack, ScrollView, VStack } from "native-base";
import MentorSearchCard from "../components/MentorSearchCard";
import MentorSearchBtn from "../components/MentorSearchBtn";
import { observer } from "mobx-react";
import mentorStore from "../stores/mentorStore";

const Search = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("");

  const mentorList = mentorStore.mentors
    .filter((mentor) =>
      [mentor.firstName, mentor.lastName, mentor.employer].some((name) =>
        name.toLowerCase().includes(query.toLowerCase())
      )
    )
    .filter((mentor) => mentor.major.includes(active))
    .map((mentor) => <MentorSearchCard mentor={mentor} />);

  const majorButtonsList = mentorStore.mentors.map((mentor) => (
    <MentorSearchBtn
      major={mentor.major}
      isActive={active === mentor.major}
      active={active}
      setActive={setActive}
    />
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
          Search
        </Text>
        <HStack>
          <View style={{ flex: 1, marginLeft: 5 }}>
            <Input
              placeholder="Search"
              onChangeText={(q) => {
                setQuery(q);
              }}
            />
          </View>
          <Feather
            name="filter"
            size={22}
            color="black"
            style={{ marginTop: 8, marginRight: 10 }}
          />
        </HStack>
      </View>
      <ScrollView horizontal={true} style={{ backgroundColor: "#F5F4F9" }}>
        <HStack style={{ height: 50, margin: 10, justifyContent: "center" }}>
          {majorButtonsList}
        </HStack>
      </ScrollView>
      <VStack style={{ flex: 110 }}>
        <ScrollView>{mentorList}</ScrollView>
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
