import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Input from "../components/Input";
import { useState, React, useEffect } from "react";
import { HStack, ScrollView, VStack } from "native-base";
import MentorMessageCard from "../components/MentorMessageCard";
import { observer } from "mobx-react";
//* STORES:
import authStore from "../stores/authStore";
import { instance } from "../stores/instance";
import userStore from "../stores/userStore";
import conversationStore from "../stores/conversationStore";
const Messages = () => {
  const [query, setQuery] = useState("");
  const userId = authStore.user._id;
  const conversationList = conversationStore.conversations.map(
    (conversation) => (
      <MentorMessageCard key={conversation._id} conversation={conversation} />
    )
  );

  useEffect(() => {}, []);
  if (authStore.user == null) {
    return <NotUserPage />;
  }
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

export default observer(Messages);

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
