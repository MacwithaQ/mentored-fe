import * as Device from "expo-device";
import * as Notifications from "expo-notifications";
import React, { useState, useEffect, useRef } from "react";
import { Text, View, Button, Platform } from "react-native";

//TODO: NOTIFICATION SETTING:
Notifications.setNotificationHandler({
  handleNotification: async () => ({
    shouldShowAlert: true,
    shouldPlaySound: true,
    shouldSetBadge: false,
  }),
});

const RegisterForPushNotifications = () => {
  //TODO: THE <<TOKEN>> GIVEN & GENERATED:
  const [expoPushToken, setExpoPushToken] = useState("");
  //TODO: THE NOTIFICATION <<HOLDER - CONTAINER>> :
  const [notification, setNotification] = useState(false);
  //TODO: THE NOTIFICATION <<LISTENER || RECEIVER>>(ALERT-NOTIFICATION):
  const notificationListener = useRef();
  //TODO: THE <<RESPOND>> LISTENER || RECEIVER(TAP):
  const responseListener = useRef();

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
      <Button
        title="Press to Send Notification"
        onPress={async () => {
          await sendPushNotification(expoPushToken);
        }}
      />
    </View>
  );
};

export default RegisterForPushNotifications;

//TODO: EXPO-PUSH-TOKEN = <<WHO>> RECEIVE THE NOTIFICATION:
const sendPushNotification = async (expoPushToken) => {
  //TODO: WHAT IS THE <<MESSAGE>> BODY:
  const message = {
    to: expoPushToken,
    sound: "default",
    title: "Hello my friend",
    body: "how are you today?",
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
