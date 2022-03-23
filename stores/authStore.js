import decode from "jwt-decode";
import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";
import mentorStore from "./mentorStore";
import { Toast } from "native-base";
class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (userData, navigation) => {
    try {
      const res = await instance.post("/users/signup", userData);
      const { token } = res.data;
      this.setUser(token);
      await mentorStore.fetchMentors();
      // mentorStore.mentors.push({
      //   firstName: userData.firstName,
      //   lastName: userData.lastName,
      //   major: userData.major,
      //   employer: userData.employer,
      // });
      navigation.navigate("App");
    } catch (error) {
      console.log(error);
    }
  };

  //* To be implemented when sign-in page is complete - alqallaf
  signin = async (userData, navigation) => {
    try {
      const res = await instance.post("/users/signin", userData);
      const { token } = res.data;
      this.setUser(token);
      mentorStore.fetchMentors();
      navigation.navigate("Home");
    } catch (error) {
      Toast.show({
        title: "Invalid Email or Password Combination",
        placement: "top",
      });
      console.log(error);
    }
  };

  //* To be implemented when sign-out button is complete - alqallaf
  signout = async () => {
    try {
      await AsyncStorage.removeItem("token");
      this.user = null;
    } catch (error) {
      console.log(error);
    }
  };

  setUser = async (token) => {
    try {
      const decodedToken = decode(token);
      this.user = decodedToken;
      instance.defaults.headers.common.Authorization = `Bearer ${token}`;
      await AsyncStorage.setItem("token", token);
    } catch (error) {}
  };

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
