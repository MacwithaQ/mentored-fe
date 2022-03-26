import { StyleSheet, Text, Image, Pressable } from "react-native";
import { HStack, VStack } from "native-base";
import { useNavigation } from "@react-navigation/native";
import { baseURL } from "../stores/instance";

const MentorSearchCard = ({ mentor }) => {
  const navigation = useNavigation();

  return (
    <Pressable onPress={() => navigation.navigate("MentorDetails", { mentor })}>
      <HStack style={styles.mentorCard}>
        <VStack>
          <Image
            source={{
              uri: mentor.image
                ? baseURL + mentor.image
                : "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
            }}
            style={styles.cardImg}
          />
        </VStack>
        <HStack style={{ alignSelf: "center" }}>
          <VStack>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 14,
                marginBottom: 5,
                textTransform: "capitalize",
              }}
            >
              {`${mentor.firstName} ${mentor.lastName}`}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: "#828282",
                fontSize: 12,
                marginBottom: 2,
                textTransform: "capitalize",
              }}
            >
              {mentor.major}
            </Text>
            <Text
              numberOfLines={1}
              style={{
                color: "#b2b2b2",
                fontSize: 10,
                marginBottom: 5,
                textTransform: "capitalize",
              }}
            >
              {mentor.employer}
            </Text>
          </VStack>
        </HStack>
      </HStack>
    </Pressable>
  );
};

export default MentorSearchCard;

const styles = StyleSheet.create({
  mentorCard: {
    alignItems: "flex-start",
    margin: 5,
    marginHorizontal: 12,
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
  },
  cardImg: {
    width: 75,
    height: 75,
    margin: 3,
    marginRight: 10,
    borderRadius: 15,
  },
});
