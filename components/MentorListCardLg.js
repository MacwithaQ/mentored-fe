import { useNavigation } from "@react-navigation/native";
import { VStack } from "native-base";
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { baseURL } from "../stores/instance";

const MentorListCardLg = ({ mentor }) => {
  const navigation = useNavigation();
  return (
    <Pressable
      onPress={() =>
        navigation.navigate("SearchNavigator", {
          screen: "MentorDetails",
          params: { mentor },
        })
      }
    >
      <View style={styles.mentorCard}>
        <Image
          source={{
            uri: mentor.image
              ? baseURL + mentor.image
              : "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
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
            style={{
              fontSize: 14,
              marginBottom: 5,
              textTransform: "capitalize",
            }}
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
            {mentor.employer}
          </Text>
        </VStack>
      </View>
    </Pressable>
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
    paddingVertical: 12,
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
    width: 110,
    height: 110,
    borderRadius: 15,
    marginBottom: 10,
  },
});
