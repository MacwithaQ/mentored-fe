import decode from "jwt-decode";
import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStore {
  user = null;
  constructor() {
    makeAutoObservable(this);
  }

  signup = async (userData, navigation) => {
    try {
      console.log(userData);
      const res = await instance.post("/users/signup", userData);
      const { token } = res.data;
      console.log(token);
      this.user = decode(token);
      console.log(this.user);
      await AsyncStorage.setItem("token", token);
      this.setUser(token);
      navigation.navigate("App");
    } catch (error) {
      console.log(error);
    }
  };

  //! To be implemented when sign-in page is complete - alqallaf
  //   signin = async (userData, navigation) => {
  //     try {
  //       const res = await instance.post("/users/signin", userData);
  //       const { token } = res.data;
  //       await this.setUser(token);
  //       console.log(this.user._id);
  //       profileStore.fetchSingleProfile(this.user._id);
  //       navigation.navigate("Trip List");
  //     } catch (error) {

  //     }
  //   };

  //! To be implemented when sign-out button is complete - alqallaf
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
      const decodedtoken = decode(token);
      this.user = decodedtoken;
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
          this.signOut();
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
