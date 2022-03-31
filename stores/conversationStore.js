import { instance } from "./instance";

const { makeAutoObservable } = require("mobx");
class ConversationStore {
  constructor() {
    makeAutoObservable(this);
  }
  conversations = [];

  createConversation = async (senderId, mentor, navigation) => {
    const newConversation = {
      senderId: senderId,
      receiverId: mentor._id,
    };
    try {
      const res = await instance.post(`/conversations`, newConversation);
      this.conversations.push(res.data);
      const conversation = res.data;
      const otherMember = mentor;
      navigation.navigate("MessagesNavigator", {
        screen: "MessagingPage",
        params: { conversation, otherMember },
      });
    } catch (error) {
      console.log(error);
    }
  };

  fetchUserConversations = async (userId) => {
    try {
      const res = await instance.get(`/conversations/${userId}`);
      this.conversations = res.data;
    } catch (error) {
      console.log(error);
    }
  };
}

const conversationStore = new ConversationStore();
// conversationStore.fetchUserConversations();
export default conversationStore;
