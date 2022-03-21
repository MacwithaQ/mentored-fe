import { StyleSheet, Text, View, Image } from "react-native";
import { HStack, VStack } from "native-base";

const MentorListCardSm = () => {
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
          <Text style={{ fontWeight: "bold" }}>Mentor's Name</Text>
          <Text style={{ color: "#BDBDBD" }}>Mentors Major</Text>
          <Text style={{ color: "#BDBDBD" }}>Employer</Text>
        </VStack>
      </HStack>
    </HStack>
  );
};

export default MentorListCardSm;

const styles = StyleSheet.create({
  mentorCard: {
    alignItems: "flex-start",
    margin: 5,
    overflow: "hidden",
    backgroundColor: "white",
    height: 95,
    width: 250,
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
