import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
//* Components:
import Loader from "../components/Loader";
import NotUserPage from "../components/NotUserPage";
//* Stores :
import authStore from "../stores/authStore";
import mentorStore from "../stores/mentorStore";
import studentStore from "../stores/studentStore";
//* Pages:
import MentorProfile from "./MentorProfile";
import StudentProfile from "./StudentProfile";

const Profile = () => {
  //* Even take the user from the store or null:
  let user = authStore.user || null;

  //* make state to use and pass it to the screens:
  const [profile, setProfile] = useState(null);

  //* if the user > isMentor = true he is mentor else Student:
  useEffect(() => {
    if (user != null) {
      if (user.isMentor === true) {
        setProfile(
          mentorStore.mentors.find((mentor) => mentor.user._id === user._id)
        );
      } else if (user.isMentor === false) {
        setProfile(
          studentStore.students.find((student) => student.user._id === user._id)
        );
      }
    }
  }, [user]);

  //* If their is no [user] go> to NotUserPage & if the [profile] null go> the loader page:
  if (user == null) return <NotUserPage />;
  if (profile == null) {
    return <Loader />;
  }
  //* If the isMentor true go> MentorProfile else StudentProfile:
  if (user.isMentor) {
    return <MentorProfile setProfile={setProfile} profile={profile} />;
  } else {
    return <StudentProfile setProfile={setProfile} profile={profile} />;
  }
  return (
    <View>
      <Text>{profile.firstName}</Text>
    </View>
  );
};

export default observer(Profile);

const styles = StyleSheet.create({});
