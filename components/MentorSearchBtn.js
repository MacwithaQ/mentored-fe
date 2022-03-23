import { StyleSheet, Text, View, Pressable } from "react-native";
import { observer } from "mobx-react";
import { Ionicons } from "@expo/vector-icons";
import { HStack } from "native-base";

const MentorSearchBtn = ({ major, isActive, setActive, active }) => {
  const toggleButton = () => {
    if (active !== major) {
      setActive(major);
    } else {
      setActive("");
    }
  };
  return isActive ? (
    <Pressable style={styles.majorButtonsActive} onPress={toggleButton}>
      <View>
        <HStack style={{ alignItems: "center" }}>
          <Ionicons name="close" size={15} color="black" />
          <Text style={{ fontSize: 12, marginHorizontal: 5, color: "white" }}>
            {major}
          </Text>
        </HStack>
      </View>
    </Pressable>
  ) : (
    <Pressable style={styles.majorButtonsInactive} onPress={toggleButton}>
      <View>
        <Text style={{ fontSize: 12, marginHorizontal: 5 }}>{major}</Text>
      </View>
    </Pressable>
  );
};

export default observer(MentorSearchBtn);

const styles = StyleSheet.create({
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
});
