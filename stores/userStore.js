import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import mentorStore from "./mentorStore";

class UserStore {
  //* EMPTY ARRAY TO USE THE METHODS IN IT :
  users = [];

  //* TO MAKE IT GLOBAL STORE:
  constructor() {
    makeAutoObservable(this);
  }

  //* FETCH ALL MENTORS:
  fetchUsers = async () => {
    try {
      const response = await instance.get("/users");
      this.users = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  //* UPDATE MENTOR:
  updateUser = async (updatedUser, image, id, updatedMentor, profileId) => {
    try {
      //* HELP ADD IMG:
      const formData = new FormData();
      if (updatedUser !== undefined) {
        for (const key in updatedUser) {
          formData.append(key, updatedUser[key]);
        }
      }

      //* CHANGE IMG FORMAT:
      if (image) {
        formData.append("image", {
          type: image.type,
          uri: image.uri,
          name: image.uri.split("/").pop(),
        });
      }

      //* RESPOND:
      const response = await instance.put(`/users/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        transformRequest: (data, headers) => formData, // this is doing the trick
      });

      //* IF RESPOND TRUE MAP IT AND GIVE IT ALL THE PAYLOAD:
      if (response) {
        this.users = this.users.map((user) =>
          user._id === response.data.payload._id ? response.data.payload : user
        );
      }

      await mentorStore.updateMentor(updatedMentor, profileId);

      // console.log("hhh", response.data.payload);
      const foundMentor = this.users
        .filter((user) => user.isMentor)
        .find((user) => user.mentorProfile._id === updatedMentor._id);

      if (foundMentor) {
        foundMentor.mentorProfile = {
          _id: foundMentor.mentorProfile,
          ...updatedMentor,
        };
        console.log({ foundMentor, updatedMentor });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: userStore.js ~ line 60 ~ UserStore ~ userMentor= ~ error",
        error
      );
    }
  };
}

const userStore = new UserStore();
userStore.fetchUsers();
export default userStore;
