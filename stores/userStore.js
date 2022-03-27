import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

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
  updateUser = async (updatedUser, image, id) => {
    try {
      //* HELP ADD IMG:
      const formData = new FormData();
      if (updatedUser !== undefined) {
        for (const key in updatedUser) {
          formData.append(key, updatedUser[key]);
        }
      }
      console.log(formData);

      //* CHANGE IMG FORMAT:
      if (image) {
        formData.append("image", {
          type: image.type,
          uri: image.uri,
          name: image.uri.split("/").pop(),
        });
      }

      //* RESPOND:
      const response = await instance.put(`/mentors/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
        transformRequest: (data, headers) => {
          return formData; // this is doing the trick
        },
      });

      //* IF RESPOND TRUE MAP IT AND GIVE IT ALL THE PAYLOAD:
      if (response) {
        this.users = this.users.map((user) => {
          return user._id === response.data.payload._id
            ? user.data.payload
            : user;
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: userStore.js ~ line 60 ~ MentorStore ~ updateMentor= ~ error",
        error
      );
    }
  };
}

const userStore = new UserStore();
userStore.fetchUsers();
export default userStore;
