const { makeAutoObservable } = require("mobx");
const { instance } = require("./instance");

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
      console.log("date ;(", newMeeting);
      const response = await instance.post("/appointments", newMeeting);
      this.meetings.push(response.data);
      console.log("res", response.data);
    } catch (error) {
      console.log(error);
    }
  };
}

const meetingStore = new MeetingStore();
meetingStore.fetchMeetings();
export default meetingStore;
