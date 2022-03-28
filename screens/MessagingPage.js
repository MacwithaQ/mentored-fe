import { StyleSheet, Text, View } from "react-native";
import React, { useState, useCallback, useEffect } from "react";
import { HStack } from "native-base";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { GiftedChat, Bubble, Send } from "react-native-gifted-chat";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import authStore from "../stores/authStore";
import { instance } from "../stores/instance";
import messageStore from "../stores/messageStore";
import { observer } from "mobx-react";

const MessagingPage = ({ route }) => {
  const { conversation } = route.params;
  const { otherMember } = route.params;
  const navigation = useNavigation();
  const userId = authStore.user._id;
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const res = await instance.get("/messages/" + conversation._id);
        console.log(res.data);
        setMessages(res.data.sort((a, b) => b.createdAt - a.createdAt));
      } catch (error) {
        console.log(error);
      }
    };
    fetchMessages();
  }, []);

  useEffect(() => {
    // setMessages([
    //   {
    //     _id: 1,
    //     text: "Hello World",
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: "React Native",
    //       avatar: "https://placeimg.com/140/140/any",
    //     },
    //   },
    //   {
    //     _id: 1,
    //     text: "Hello developer",
    //     createdAt: new Date(),
    //     user: {
    //       _id: 2,
    //       name: "React Native",
    //       avatar: "https://placeimg.com/140/140/any",
    //     },
    //   },
    // ]);
  }, []);

  //* ON SEND:
  const onSend = useCallback((messages = []) => {
    setMessages((previousMessages) =>
      GiftedChat.append(messages, previousMessages)
    );
    messageStore.sendMessage(conversation._id, userId, messages[0].text);
  }, []);

  //* READER BUBBLE:
  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: { backgroundColor: "#57A0D7" },
          left: {
            backgroundColor: "#fff",
          },
        }}
        textStyle={{
          right: {
            color: "#fff",
          },
          left: {
            color: "#4F4F4F",
          },
        }}
      />
    );
  };

  //* RENDER SEND:
  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View>
          <MaterialCommunityIcons
            name="send-circle"
            size={32}
            color="#57A0D7"
            style={{ marginBottom: 5, marginRight: 5, alignSelf: "center" }}
          />
        </View>
      </Send>
    );
  };

  return (
    <View style={styles.container}>
      <HStack style={styles.header}>
        <Ionicons
          name="close-outline"
          size={24}
          color="black"
          onPress={() => navigation.navigate("Messages")}
        />
        {/* MENTOR NAME: */}
        <HStack>
          <Text style={styles.headerName}>Mentor Name</Text>
        </HStack>
      </HStack>
      {/* GIFTED CHAT COMPONENT: */}
      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        showUserAvatar={false}
        user={{
          _id: userId,
        }}
        renderBubble={renderBubble}
        alwaysShowSend
        renderSend={renderSend}
        inverted={false}
      />
    </View>
  );
};

export default observer(MessagingPage);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F4F9",
  },
  header: {
    backgroundColor: "#fff",
    borderBottomWidth: 0.3,
    padding: 30,
    borderBottomColor: "#ddd",
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 20,
  },
  headerName: {
    fontSize: 20,
    marginTop: 10,
  },
});
