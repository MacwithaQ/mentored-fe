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
      const response = await instance.post("/appointments", newMeeting);
      this.meetings.push(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  bookMeeting = async (meetingId) => {
    try {
      const response = await instance.put("/appointments", { id: meetingId });
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
