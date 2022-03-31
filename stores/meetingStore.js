import authStore from "./authStore";
import { instance } from "./instance";
import studentStore from "./studentStore";

const { makeAutoObservable } = require("mobx");

class MeetingStore {
  constructor() {
    makeAutoObservable(this);
  }
  meetings = [];

  fetchMeetings = async () => {
    try {
      const response = await instance.get("/appointments");
      this.meetings = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  addMeeting = async (date) => {
    try {
      const newMeeting = { date: date.toString() };
      const response = await instance.post("/appointments", newMeeting);
      this.meetings.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  bookMeeting = async (meetingId, price) => {
    try {
      console.log({ price });
      const response = await instance.put("/appointments", { id: meetingId });

      const student = studentStore.students.find(
        (student) => student.user._id === authStore.user._id
      );
      console.log({ student });
      studentStore.payStudentBalance(price, student.balance, student._id);

      if (response) {
        this.meetings = this.meetings.map((meeting) => {
          return meeting._id === meetingId ? response.data : meeting;
        });
      }
    } catch (error) {
      console.log("err", error);
    }
  };
}

const meetingStore = new MeetingStore();
meetingStore.fetchMeetings();
export default meetingStore;
