import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class StudentStore {
  //* TO MAKE IT GLOBAL STORE:
  constructor() {
    makeAutoObservable(this);
  }
  //* EMPTY ARRAY TO USE THE METHODS IN IT :
  students = [];

  //* FETCH ALL STUDENTS:
  fetchStudents = async () => {
    try {
      const response = await instance.get("/students");
      this.students = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  //* UPDATE STUDENT:
  updateStudent = async (updatedStudent, image) => {
    try {
      //* HELP ADD IMG:
      const formData = new FormData();
      if (updatedStudent !== undefined) {
        for (const key in updatedStudent) {
          formData.append(key, updatedStudent[key]);
        }
      }
      //* CHANGE IMG FORMATE:
      if (image) {
        formData.append("image", {
          type: image.type,
          uri: image.uri,
          name: image.uri.split("/").pop(),
        });
      }

      //* RESPOND:
      const response = await instance.put(
        `/students/${updatedStudent._id}`,
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

      //* IF RESPOND TRUE MAP IT AND GIVE IT ALL THE PAYLOAD:
      if (response) {
        this.students = this.students.map((student) => {
          return student._id === response.data.payload._id
            ? response.data.payload
            : student;
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: StudentStore.js ~ line 60 ~ StudentStore ~ updateStudent= ~ error",
        error
      );
    }
  };
}

const studentStore = new StudentStore();
studentStore.fetchStudents();
export default studentStore;
