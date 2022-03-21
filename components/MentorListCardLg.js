import { StyleSheet, Text, View, Image } from "react-native";

const MentorListCardLg = () => {
  return (
    <View style={styles.mentorCard}>
      <Image
        source={{
          uri: "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
        }}
        style={styles.cardImg}
      />
      <Text style={{ fontWeight: "bold" }}>Mentor's Name</Text>
      <Text style={{ color: "#BDBDBD", fontSize: 15, margin: 5 }}>
        Mentor's Major
      </Text>
      <Text style={{ color: "#BDBDBD", fontSize: 13, margin: 0 }}>
        Employer
      </Text>
    </View>
  );
};

export default MentorListCardLg;

const styles = StyleSheet.create({
  mentorCard: {
    alignItems: "center",
    overflow: "hidden",
    backgroundColor: "white",
    height: 250,
    borderRadius: 20,
    padding: 5,
    margin: 5,
  },
  cardImg: {
    width: 125,
    height: 125,
    margin: 5,
    borderRadius: 15,
  },
});
