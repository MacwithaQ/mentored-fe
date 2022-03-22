import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import authStore from "../stores/authStore";
import mentorStore from "../stores/mentorStore";
import Loader from "../components/Loader";
import NotUserPage from "../components/NotUserPage";
import studentStore from "../stores/studentStore";
import MentorProfile from "./MentorProfile";
import { observer } from "mobx-react";
import StudentProfile from "./StudentProfile";

const Profile = () => {
  let user = authStore.user || null;
  const [profile, setProfile] = useState(null);
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

  if (user == null) return <NotUserPage />;
  if (profile == null) {
    return <Loader />;
  }
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
