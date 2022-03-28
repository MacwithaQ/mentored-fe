import { StyleSheet, Text, Image, Pressable } from "react-native";
import { HStack, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { instance } from "../stores/instance";
import mentorStore from "../stores/mentorStore";
import studentStore from "../stores/studentStore";
import authStore from "../stores/authStore";
import userStore from "../stores/userStore";

const MentorMessageCard = ({ conversation }) => {
  const navigation = useNavigation();
  const [messages, setMessages] = useState([]);
  const userId = authStore.user._id;
  const otherMember = userStore.users.find(
    (user) =>
      user._id ===
      conversation.members
        .filter((member) => member !== authStore.user._id)
        .toString()
  );

  // useEffect(() => {
  //   const fetchMessages = async () => {
  //     try {
  //       const res = await instance.get("/messages/" + conversation._id);
  //       setMessages(res.data.sort((a, b) => b.createdAt - a.createdAt));
  //     } catch (error) {
  //       console.log(error);
  //     }
  //   };
  //   fetchMessages();
  // }, [userId]);

  return (
    <Pressable
      onPress={() =>
        navigation.navigate("MessagingPage", { conversation, otherMember })
      }
    >
      <HStack style={styles.mentorCard}>
        <VStack>
          <Image
            source={{
              uri: "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
            }}
            style={styles.cardImg}
          />
        </VStack>
        <HStack style={{ alignSelf: "center" }}>
          <VStack>
            <Text style={{ fontWeight: "bold" }}>
              {otherMember.firstName} {otherMember.lastName}
            </Text>
            <Text style={{ color: "#BDBDBD", marginTop: 5 }}>
              {messages.length > 0 ? messages[messages.length - 1].text : null}
            </Text>
          </VStack>
        </HStack>
      </HStack>
    </Pressable>
  );
};

export default MentorMessageCard;

const styles = StyleSheet.create({
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
