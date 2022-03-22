import { makeAutoObservable } from "mobx";
import { instance } from "./instance";

class StudentStore {
  constructor() {
    makeAutoObservable(this);
  }

  students = [];

  fetchStudents = async () => {
    try {
      const response = await instance.get("/students");
      this.students = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  updateStudent = async (updatedStudent, id) => {
    try {
      const newStudent = {
        firstName: updatedStudent.firstName,
        lastName: updatedStudent.lastName,
        // image: updatedStudent.image,
        major: updatedStudent.major,
        employer: updatedStudent.employer,
        bio: updatedStudent.bio,
      };
      const response = await instance.put(`/students/${id}`, newStudent);
      if (response) {
        this.students = this.students.map((student) => {
          return student._id === id ? updateStudent : student;
        });
      }
    } catch (error) {
      console.log(
        "🚀 ~ file: StudentStore.js ~ line 16 ~ StudentStore ~ updateStudent= ~ error",
        error
      );
    }
  };
}

const studentStore = new StudentStore();
studentStore.fetchStudents();
export default studentStore;
