import { StyleSheet, Text, Image } from "react-native";
import { HStack, VStack } from "native-base";

const MentorSearchCard = ({ mentor }) => {
  return (
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
            {`${mentor.firstName} ${mentor.lastName}`}
          </Text>
          <Text style={{ color: "#BDBDBD" }}>{`${mentor.major}`}</Text>
          <Text style={{ color: "#BDBDBD" }}>{`${mentor.employer}`}</Text>
        </VStack>
      </HStack>
    </HStack>
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
