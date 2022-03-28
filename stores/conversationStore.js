const { makeAutoObservable } = require("mobx");
const { instance } = require("./instance");
const authStore = require("./authStore");

class ConversationStore {
  constructor() {
    makeAutoObservable(this);
  }
  conversations = [];

  fetchConversations = async (userId) => {
    try {
      const res = await instance.get("/conversations/" + userId);
      this.conversations = res.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const conversationStore = new ConversationStore();
conversationStore.fetchConversations(authStore.userId);
export default conversationStore;
