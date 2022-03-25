import { HStack, VStack, ScrollView } from "native-base";
import {
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { observer } from "mobx-react";
//*  CUSTOMIZED COMPONENTS & SVG:
import MentorListCardLg from "../components/MentorListCardLg";
import MentorListCardSm from "../components/MentorListCardSm";
import Logo from "../assets/Logo.svg";
//* STORES:
import authStore from "../stores/authStore";

const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <VStack style={styles.header}>
        <SafeAreaView />
        <HStack style={styles.headerWrapper}>
          {/*  NAVBAR >>> */}
          <HStack style={styles.headerLogo}>
            <Logo style={styles.headerLogoImg} />
            <Text style={styles.headerLogoText}>Mentored</Text>
          </HStack>

          {/*  SHOW THE BTN & IMG IF THEIR USER: */}
          {authStore.user ? (
            // <Text>{authStore.user.firstName}</Text>
            <Pressable onPress={authStore.signout}>
              <Image
                source={{
                  uri: "https://images.nightcafe.studio//assets/profile.png?tr=w-1600,c-at_max",
                }}
                style={styles.headerProfileImg}
              />
            </Pressable>
          ) : (
            <HStack>
              {/* ELSE GIVE ME THE PRESSABLE TEXT: */}

              {/* LOGIN: */}
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={{ color: "#57A0D7" }}>Login</Text>
              </Pressable>

              {/* REGISTER: */}
              <Text style={{ color: "#828282" }}> / </Text>
              <Pressable onPress={() => navigation.navigate("Register")}>
                <Text style={{ color: "#57A0D7" }}>Register</Text>
              </Pressable>
            </HStack>
          )}
        </HStack>
      </VStack>

      {/* SHOW MENTORS LIST: */}
      <VStack style={styles.body}>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>
          Mentors For You
        </Text>
        <ScrollView horizontal={true}>
          <HStack>
            <MentorListCardLg />
          </HStack>
        </ScrollView>

        {/* MENTORS NAME: */}
        <Text style={{ fontWeight: "bold", fontSize: 20, margin: 5 }}>
          Major Name
        </Text>
        <ScrollView horizontal={true}>
          <HStack>
            <MentorListCardSm />
          </HStack>
        </ScrollView>
      </VStack>
    </View>
  );
};

export default observer(Home);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F4F9",
  },
  header: {
    backgroundColor: "#fff",
    // borderBottomWidth: 0.3,
    // borderBottomColor: "#aaa",
    marginTop: 50,
    marginHorizontal: 12,
    borderRadius: 20,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 2.62,

    elevation: 4,
  },
  headerWrapper: {
    padding: 12,
    justifyContent: "space-between",
    alignItems: "center",
  },
  headerLogo: { alignItems: "center" },
  headerLogoImg: { width: 40, height: 40 },
  headerLogoText: { marginLeft: 5, fontWeight: "bold", fontSize: 20 },
  headerProfileImg: { width: 50, height: 50, borderRadius: 50 },
  cardImg: {
    width: 75,
    height: 75,
    margin: 5,
    borderRadius: 15,
  },
  body: {
    padding: 12,
  },
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
});
