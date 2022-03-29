const { makeAutoObservable } = require("mobx");
const { instance } = require("./instance");
const authStore = require("./authStore");

class MessageStore {
  constructor() {
    makeAutoObservable(this);
  }
    messages = [];

    
  sendMessage = async (conversationId, userId, theMessage) => {
    const newMessage = {
      conversation: conversationId,
      user: userId,
      text: theMessage,
    };
    console.log(newMessage);
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
}

const messageStore = new MessageStore();
export default messageStore;
