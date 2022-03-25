import { VStack } from "native-base";
import { StyleSheet, Text, View, Image } from "react-native";

const MentorListCardLg = ({ mentor }) => {
  return (
    <View style={styles.mentorCard}>
      <Image
        source={{
          uri: "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
        }}
        style={styles.cardImg}
      />
      <VStack
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 10,
        }}
      >
        <Text
          numberOfLines={1}
          style={{ fontSize: 14, marginBottom: 5, textTransform: "capitalize" }}
        >
          {mentor.firstName} {mentor.lastName}
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
          Employer
        </Text>
      </VStack>
    </View>
  );
};

export default MentorListCardLg;

const styles = StyleSheet.create({
  mentorCard: {
    width: 135,
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 20,
    paddingVertical: 5,
    marginHorizontal: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.62,

    elevation: 4,
  },
  cardImg: {
    width: 125,
    height: 125,
    borderRadius: 15,
    marginBottom: 10,
  },
});
