import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform } from "react-native";
import authStore from "../stores/authStore";
import Btn from "../components/Btn";

//TODO: NOTIFICATION SETTING:
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});
//?--------------------------------------------------------------------------------
const PUSH_ENDPOINT_TOKEN = "http://192.168.1.54:8000/api/notifications/token";
const PUSH_ENDPOINT_MESSAGE =
  "http://192.168.1.54:8000/api/notifications/message";
//?--------------------------------------------------------------------------------

const RegisterForPushNotifications = () => {
  //TODO: THE <<TOKEN>> GIVEN & GENERATED:
  const [expoPushToken, setExpoPushToken] = useState("");
  //TODO: THE NOTIFICATION <<HOLDER - CONTAINER>> :
  const [notification, setNotification] = useState(false);
  //TODO: THE NOTIFICATION <<LISTENER || RECEIVER>>(ALERT-NOTIFICATION):
  const notificationListener = useRef();
  //TODO: THE <<RESPOND>> LISTENER || RECEIVER(TAP):
  const responseListener = useRef();
  //?--------------------------------------------------------------------------------
  //? WHAT BEEN ADDED >> STILL TESTING:
  //TODO:  MAKE THE USER = TOKEN:
  const [mentorToken, setMToken] = useState("");
  const [studentToken, setSToken] = useState("");

  const handelNotification = () => {
    if (user.isMentor) {
      setExpoPushToken(mentorToken);
      console.log("mentorToken", mentorToken);
    } else {
      setExpoPushToken(studentToken);
      console.log("studentToken", studentToken);
    }
  };

  const userToken = (authStore.user = expoPushToken);

  const mahamadToken = "ExponentPushToken[foNaDZD4OnCU3vA0z1Tmxr]";
  const abdullahToken = "ExponentPushToken[maOmiJPM1tKjmU_er6tq1Q]";

  // console.log("expo piush toekn", expoPushToken);
  // console.log("mtoken", mToken);
  // console.log("abdullah", aToken);
  //?--------------------------------------------------------------------------------

  useEffect(() => {
    registerForPushNotificationsAsync().then((token) =>
      setExpoPushToken(token)
    );
    //TODO:  FIRED WHEN A NOTIFICATION <<RECEIVED>> WHILE THE USER USING THE APP(FOREGROUNDED):
    notificationListener.current =
      Notifications.addNotificationReceivedListener((notification) => {
        setNotification(notification);
      });

    //TODO: FIRED WHEN THE USER <<INTERACTS OR TAP>> WITH NOTIFICATION (WORKING EVERY WHERE(FOREGROUNDED + BACKGROUND + KILLED APP))
    responseListener.current =
      Notifications.addNotificationResponseReceivedListener((response) => {
        console.log(response);
      });
    return () => {
      Notifications.removeNotificationSubscription(
        notificationListener.current
      );
      Notifications.removeNotificationSubscription(responseListener.current);
    };
  }, []);

  return (
    <View>
      <Btn
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      >
        expo token
      </Btn>
      {/* <Btn
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(userToken);
        }}
      >
        user token
      </Btn> */}
      <Btn
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(mahamadToken);
        }}
      >
        alansari token
      </Btn>
      <Btn
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(abdullahToken);
        }}
      >
        abdullah token
      </Btn>
      <Btn
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(handelNotification);
        }}
      >
        handel notification token
      </Btn>
    </View>
  );
};

export default RegisterForPushNotifications;

//TODO: EXPO-PUSH-TOKEN = <<WHO>> RECEIVE THE NOTIFICATION:
const sendPushNotification = async (
  expoPushToken,
  abdullahToken,
  mahamadToken,
  studentToken,
  mentorToken
) => {
  //TODO: WHAT IS THE <<MESSAGE>> BODY:
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Hello my friend",
    body: "WORK WORK WORK?",
    data: { someData: "goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message),
  });
  //?--------------------------------------------------------------------------------
  //? WHAT BEEN ADDED >> STILL TESTING:
  // added mahamd token
  const message2 = {
    to: mahamadToken,
    sound: "default",
    title: "Hello my friend",
    body: "I have life?",
    data: { someData: "goes here" },
  };
  // try send to back end:
  let token = await Notifications.getExpoPushTokenAsync();

  await fetch(PUSH_ENDPOINT_TOKEN, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      token: {
        value: token,
      },
    }),
  });
  await fetch(PUSH_ENDPOINT_MESSAGE, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      to: abdullahToken,
      sound: "default",
      title: "Hello my friend",
      body: "I have life?",
      data: { someData: "goes here" },
    }),
  });
  // added abdullah token
  const message3 = {
    to: abdullahToken,
    sound: "default",
    title: "Hello my friend",
    body: "WORK please?",
    data: { someData: "goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(message3),
  });
  // added
  const messageStudentToken = {
    to: studentToken,
    sound: "default",
    title: "Hello my friend",
    body: "WORK please?",
    data: { someData: "goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageStudentToken),
  });
  // added
  const messageMentorToken = {
    to: mentorToken,
    sound: "default",
    title: "Hello my friend",
    body: "WORK please?",
    data: { someData: "goes here" },
  };

  await fetch("https://exp.host/--/api/v2/push/send", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Accept-encoding": "gzip, deflate",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(messageMentorToken),
  });
  //?--------------------------------------------------------------------------------
};

//TODO: GET <<PERMISSION>> & <<MAKE TOKEN>> :
const registerForPushNotificationsAsync = async () => {
  let token;

  if (Device.isDevice) {
    const { status: existingStatus } =
      await Notifications.getPermissionsAsync();
    let finalStatus = existingStatus;
    if (existingStatus !== "granted") {
      const { status } = await Notifications.requestPermissionsAsync();
      finalStatus = status;
    }
    if (finalStatus !== "granted") {
      alert("Failed to get push token for push notification!");
      return;
    }

    token = (await Notifications.getExpoPushTokenAsync()).data;
    console.log(token);
  } else {
    alert("Must use physical device for Push Notifications");
  }

  if (Platform.OS === "android") {
    Notifications.setNotificationChannelAsync("default", {
      name: "default",
      importance: Notifications.AndroidImportance.MAX,
      vibrationPattern: [0, 250, 250, 250],
      lightColor: "#FF231F7C",
    });
  }

  return token;
};
