import { instance } from "./instance";

const { makeAutoObservable } = require("mobx");
const authStore = require("./authStore");

class MessageStore {
  constructor() {
    makeAutoObservable(this);
  }
  messages = [];
  counter = 0;
  sendMessage = async (conversationId, userId, theMessage) => {
    const newMessage = {
      conversation: conversationId,
      user: userId,
      text: theMessage,
    };
    try {
      const res = await instance.post(
        `/conversations/${conversationId}`,
        newMessage
      );
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };
  increseCounter = () => {
    this.counter += 1;
  };
}

const messageStore = new MessageStore();
export default messageStore;
