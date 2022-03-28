import { makeAutoObservable } from "mobx";
import { instance } from "./instance";
import authStore from "./authStore";
import userStore from "./userStore";

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
  updateStudent = async (updatedStudent, id) => {
    try {
      // //* HELP ADD IMG:
      // const formData = new FormData();
      // if (updatedStudent !== undefined) {
      //   for (const key in updatedStudent) {
      //     formData.append(key, updatedStudent[key]);
      //   }
      // }
      // //* CHANGE IMG FORMATE:
      // if (image) {
      //   formData.append("image", {
      //     type: image.type,
      //     uri: image.uri,
      //     name: image.uri.split("/").pop(),
      //   });
      // }

      //* RESPOND:
      const response = await instance.put(`/students/${id}`, updatedStudent); // this is doing the trick

      //* IF RESPOND TRUE MAP IT AND GIVE IT ALL THE PAYLOAD:
      if (response) {
        this.students = this.students.map((student) => {
          return student._id === response.data.payload._id
            ? response.data.payload
            : student;
        });

        authStore.user.studentProfile = response.data.payload;
        const foundStudent = userStore.users
          .filter((user) => user.isMentor === false)
          .find(
            (user) => user.studentProfile._id === response.data.payload._id
          );
        foundStudent.studentProfile = response.data.payload;
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: StudentStore.js ~ line 55 ~ StudentStore ~ updateStudent= ~ error",
        error
      );
    }
  };
}

const studentStore = new StudentStore();
studentStore.fetchStudents();
export default studentStore;
