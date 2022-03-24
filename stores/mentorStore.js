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

  updateMentor = async (updatedMentor, image) => {
    try {
      const formData = new FormData();
      if (updatedMentor !== undefined) {
        for (const key in updatedMentor) {
          formData.append(key, updatedMentor[key]);
        }
      }

      if (image) {
        formData.append("image", {
          type: image.type,
          uri: image.uri,
          name: image.uri.split("/").pop(),
        });
      }

      //? respond:
      const response = await instance.put(
        `/mentors/${updatedMentor._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          transformRequest: (data, headers) => {
            return formData; // this is doing the trick
          },
        }
      );

      if (response) {
        this.mentors = this.mentors.map((mentor) => {
          return mentor._id === response.data.payload._id
            ? response.data.payload
            : mentor;
        });
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
