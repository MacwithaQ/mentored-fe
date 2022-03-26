import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import { useState, React } from "react";
import { HStack, ScrollView, VStack } from "native-base";
import { Feather } from "@expo/vector-icons";
import { observer } from "mobx-react";
//* CUSTOMIZABLE COMPONENTS:
import Input from "../components/Input";
import MentorSearchCard from "../components/MentorSearchCard";
import MentorSearchBtn from "../components/MentorSearchBtn";
//* STORES:
import mentorStore from "../stores/mentorStore";

const Search = () => {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState("");

  //* SEARCH || FILTER THE MENTORS (MAKE THE SEARCH PASSABLE):
  const mentorList = mentorStore.mentors
    .filter((mentor) =>
      [mentor.firstName, mentor.lastName, mentor.employer].some((name) =>
        name.toLowerCase().includes(query.toLowerCase())
      )
    )
    .filter((mentor) =>
      mentor.major.toLowerCase().includes(active.toLowerCase())
    )
    .map((mentor) => <MentorSearchCard mentor={mentor} />);

  //* MAP MENTORS BY MAJOR:
  let majors = mentorStore.mentors.map((mentor) => mentor.major.toLowerCase());
  let uniqueMajors = [...new Set(majors)];

  //* MAJOR BUTTONS:
  const majorButtonsList = uniqueMajors.map((major, index) => (
    <MentorSearchBtn
      key={index}
      major={major}
      isActive={active === major}
      active={active}
      setActive={setActive}
    />
  ));

  return (
    <View style={styles.container}>
      {/* SEARCH BAR: */}
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
          <View style={{ flex: 1, paddingHorizontal: 12, paddingVertical: 7 }}>
            <Input
              placeholder="Search"
              onChangeText={(q) => {
                setQuery(q);
              }}
            />
          </View>
        </HStack>
      </View>
      {/* SHOW MAJOR LIST: */}
      <ScrollView horizontal={true}>
        <HStack style={{ padding: 7, alignItems: "center" }}>
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
    backgroundColor: "#fff",
    marginTop: 50,
    marginHorizontal: 12,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.62,
    elevation: 4,
    marginBottom: 10,
  },

  container: {
    width: "100%",
    flex: 1,
    margin: 0,
    backgroundColor: "#F5F4F9",
  },
});
