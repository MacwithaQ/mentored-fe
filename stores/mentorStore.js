import { makeAutoObservable } from "mobx";
import authStore from "./authStore";
import { instance } from "./instance";
import userStore from "./userStore";

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
      //* RESPOND:
      const response = await instance.put(`/mentors/${id}`, updatedMentor);
      // console.log("mentor", response.data.payload);
      //* IF RESPOND TRUE MAP IT AND GIVE IT ALL THE PAYLOAD:
      if (response) {
        this.mentors = this.mentors.map((mentor) => {
          return mentor._id === response.data.payload._id
            ? response.data.payload
            : mentor;
        });
        authStore.user.mentorProfile = response.data.payload;
        const foundMentor = userStore.users
          .filter((user) => user.isMentor)
          .find((user) => user.mentorProfile._id === response.data.payload._id);

        if (foundMentor) {
          foundMentor.mentorProfile = response.data.payload;
        }
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
