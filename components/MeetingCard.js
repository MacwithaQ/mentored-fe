import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { HStack, VStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";

const MeetingCard = ({ meeting, profile }) => {
  return (
    <Pressable onPress={() => navigation.navigate("MentorDetails", { mentor })}>
      <HStack style={styles.mentorCard}>
        <HStack
          style={{
            width: "100%",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <HStack style={{ alignSelf: "center", alignItems: "center" }}>
            <Ionicons
              name="ios-calendar-sharp"
              size={34}
              color="#57A0D7"
              style={{ marginRight: 12 }}
            />
            <VStack>
              <Text
                numberOfLines={1}
                style={{
                  fontSize: 14,
                  marginBottom: 5,
                  textTransform: "capitalize",
                }}
              >
                {meeting.student ? (
                  `${profile.firstName} ${profile.lastName}`
                ) : (
                  <Text>Available</Text>
                )}
              </Text>
              <HStack>
                <Text
                  numberOfLines={1}
                  style={{
                    color: "#b2b2b2",
                    fontSize: 10,
                    marginBottom: 5,
                    marginRight: 5,
                    textTransform: "capitalize",
                  }}
                >
                  {meeting.date.toString().slice(0, 10)}
                  {" - "}
                  {meeting.date.toString().slice(11, 16)}
                </Text>
              </HStack>
            </VStack>
          </HStack>
          <Ionicons name="information-circle-outline" size={24} color="black" />
        </HStack>
      </HStack>
    </Pressable>
  );
};

export default MeetingCard;

const styles = StyleSheet.create({
  mentorCard: {
    alignItems: "flex-start",
    margin: 5,
    // marginHorizontal: 12,
    overflow: "hidden",
    backgroundColor: "white",
    borderRadius: 20,
    padding: 12,
  },
  cardImg: {
    width: 75,
    height: 75,
    margin: 3,
    marginRight: 10,
    borderRadius: 15,
  },
});
