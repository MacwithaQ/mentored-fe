import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class MentorStore {
  constructor() {
    makeAutoObservable(this);
  }

  mentors = [];
  loading = true;

  fetchMentors = async () => {
    try {
      const response = await instance.get("/mentors");
      this.mentors = response.data;
      this.loading = false;
    } catch (error) {
      console.log(error);
    }
  };

  updateMentor = async (updatedMentor, id) => {
    try {
      const newMentor = {
        firstName: updatedMentor.firstName,
        lastName: updatedMentor.lastName,
        // image: updatedMentor.image,
        major: updatedMentor.major,
        employer: updatedMentor.employer,
        bio: updatedMentor.bio,
      };
      const response = await instance.put(`/mentors/${id}`, newMentor);
      if (response) {
        this.mentors = this.mentors.map((mentor) => {
          return mentor._id === id ? updatedMentor : mentor;
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: MentorStore.js ~ line 16 ~ MentorStore ~ updateMentor= ~ error",
        error
      );
    }
  };
}

const mentorStore = new MentorStore();
mentorStore.fetchMentors();
export default mentorStore;
