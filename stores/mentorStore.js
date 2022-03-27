import { makeAutoObservable } from "mobx";
import authStore from "./authStore";
import { instance } from "./instance";

class MentorStore {
  //* EMPTY ARRAY TO USE THE METHODS IN IT :
  mentors = [];

  //* TO MAKE IT GLOBAL STORE:
  constructor() {
    makeAutoObservable(this);
  }

  //* FETCH ALL MENTORS:
  fetchMentors = async () => {
    try {
      const response = await instance.get("/mentors");
      this.mentors = response.data;
      this.isLoading = false;
    } catch (error) {
      console.log(error);
    }
  };

  //* UPDATE MENTOR:
  updateMentor = async (updatedMentor, id) => {
    try {
      //* HELP ADD IMG:
      // const formData = new FormData();
      // if (updatedMentor !== undefined) {
      //   for (const key in updatedMentor) {
      //     formData.append(key, updatedMentor[key]);
      //   }
      // }

      //* CHANGE IMG FORMATE:
      // if (image) {
      //   formData.append("image", {
      //     type: image.type,
      //     uri: image.uri,
      //     name: image.uri.split("/").pop(),
      //   });
      // }

      //* RESPOND:
      const response = await instance.put(`/mentors/${id}`, updatedMentor);

      //* IF RESPOND TRUE MAP IT AND GIVE IT ALL THE PAYLOAD:
      if (response) {
        this.mentors = this.mentors.map((mentor) => {
          return mentor._id === response.data.payload._id
            ? response.data.payload
            : mentor;
        });
        authStore.user.mentorProfile = response.data.payload;
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: MentorStore.js ~ line 60 ~ MentorStore ~ updateMentor= ~ error",
        error
      );
    }
  };
}

const mentorStore = new MentorStore();
mentorStore.fetchMentors();
export default mentorStore;
