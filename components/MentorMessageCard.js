import { StyleSheet, Text, Image, Pressable } from "react-native";
import { HStack, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { useEffect, useState } from "react";
import { instance } from "../stores/instance";
import mentorStore from "../stores/mentorStore";
import studentStore from "../stores/studentStore";

const MentorMessageCard = ({ conversation, currentProfile }) => {
  const navigation = useNavigation();
  // const [user, setUser] = useState(null);
  const [foundUser, setFoundUser] = useState();

  const user = conversation.members.find(
    (member) => member !== currentProfile._id
  );

  const findUser = () => {
    if (mentorStore.mentors.some((mentor) => mentor._id === user)) {
      setFoundUser(mentorStore.mentors.find((mentor) => mentor._id === user));
    } else {
      setFoundUser(
        studentStore.students.find((student) => student._id == user)
      );
    }
  };

  useEffect(() => {
    findUser();
  }, [currentProfile, conversation]);

  console.log(foundUser);
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("MessagingPage", { conversation, currentProfile })
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
            <Text style={{ fontWeight: "bold" }}>{`name`}</Text>
            <Text style={{ color: "#BDBDBD" }}>{"major"}</Text>
            <Text style={{ color: "#BDBDBD" }}>{"employer"}</Text>
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
