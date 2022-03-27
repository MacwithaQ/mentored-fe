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
}

const meetingStore = new MeetingStore();
meetingStore.fetchMeetings();
export default meetingStore;
