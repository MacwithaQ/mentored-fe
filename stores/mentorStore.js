import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class MentorStore {
  constructor() {
    makeAutoObservable(this);
  }

  mentors = [];

  fetchMentors = async () => {
    try {
      const response = await instance.get("/mentors");
      this.mentors = response.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const mentorStore = new MentorStore();
mentorStore.fetchMentors();
export default mentorStore;
