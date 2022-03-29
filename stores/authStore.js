import decode from "jwt-decode";
import { makeAutoObservable } from "mobx";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Toast } from "native-base";
//* STORES:
import { instance } from "./instance";
import mentorStore from "./mentorStore";
import studentStore from "./studentStore";
import { configure } from "mobx";

configure({
  enforceActions: "never",
});

class AuthStore {
  //* SINCE IT'S OBJ THE DEFAULT VALUE NULL:
  user = null;

  //* TO MAKE IT GLOBAL STORE:
  constructor() {
    makeAutoObservable(this);
  }
  //* SIGN-UP:
  signup = async (userData, navigation) => {
    try {
      const res = await instance.post("/users/signup", userData);
      const { token } = res.data;
      this.setUser(token);

      //*FETCHING ALL USERS + NAVIGATE:
      (await mentorStore.fetchMentors()) && studentStore.fetchStudents();
      navigation.navigate("App");
    } catch (error) {
      console.log(error);
    }
  };

  //* SIGN-IN:
  signin = async (userData, navigation) => {
    try {
      const res = await instance.post("/users/signin", userData);
      const { token } = res.data;
      this.setUser(token);

      //*FETCHING ALL USERS + NAVIGATE:
      mentorStore.fetchMentors();
      studentStore.fetchStudents();
      navigation.navigate("Home");
    } catch (error) {
      Toast.show({
        title: "Invalid Email or Password Combination",
        placement: "top",
      });
      console.log(error);
    }
  };

  //* SIGN-OUT:
  signout = async () => {
    try {
      //* MAKE USER NULL:
      await AsyncStorage.removeItem("token");
      this.user = null;
    } catch (error) {
      console.log(error);
    }
  };

  //* SET-USER:
  setUser = async (token) => {
    try {
      const decodedToken = decode(token);
      this.user = decodedToken;

      instance.defaults.headers.common.Authorization = `Bearer ${token}`;

      //* SAVE TOKEN IN THE ASYNC-STORAGE:
      await AsyncStorage.setItem("token", token);
    } catch (error) {}
  };

  //* CHECK FOR TOKEN:
  checkForToken = async () => {
    try {
      const token = await AsyncStorage.getItem("token");
      if (token) {
        const decodedToken = decode(token);
        if (Date.now() < +decodedToken.exp) {
          await this.setUser(token);
        } else {
          this.signout();
        }
      }
    } catch (error) {
      console.log(error);
    }
  };
}

const authStore = new AuthStore();
authStore.checkForToken();
export default authStore;
