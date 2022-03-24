import { StyleSheet, Text, View } from "react-native";
import React, { useEffect, useState } from "react";
import { observer } from "mobx-react";
//* Components:
import Loader from "../../components/Loader/index";
import NotUserPage from "../../components/NotUserPage";
//* Stores :
import authStore from "../../stores/authStore";
import mentorStore from "../../stores/mentorStore";
import studentStore from "../../stores/studentStore";
//* Pages:
import MentorProfile from "./MentorProfile";
import StudentProfile from "./StudentProfile";

const Profile = () => {
  //* Even take the user from the store or null:
  let user = authStore.user;

  //* make state to use and pass it to the screens:
  const [profile, setProfile] = useState(null);

  //* if the user > isMentor = true he is mentor else Student:
  useEffect(() => {
    if (user != null) {
      const people = user.isMentor
        ? mentorStore.mentors
        : studentStore.students;
      setProfile(people.find((person) => person.user._id === user._id));
    }
  }, [user, mentorStore.mentors, studentStore.students]);

  //* If their is no [user] go> to NotUserPage & if the [profile] null go> the loader page:
  if (user == null) {
    return <NotUserPage />;
  }
  if (profile == null) {
    return <Loader />;
  }
  //* If the isMentor true go> MentorProfile else StudentProfile:
  return user.isMentor ? (
    <MentorProfile setProfile={setProfile} profile={profile} />
  ) : (
    <StudentProfile setProfile={setProfile} profile={profile} />
  );
};

export default observer(Profile);

const styles = StyleSheet.create({});
