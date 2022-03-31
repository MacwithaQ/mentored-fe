import axios from "axios";
import io from "socket.io/client-dist/socket.io";
import authStore from "./authStore";
import conversationStore from "./conversationStore";
import messageStore from "./messageStore";
import userStore from "./userStore";

// export const baseURL = "http://localhost:8000";

//* ifconfig
export const baseURL = "http://192.168.8.154:8000";
export const socket = io(baseURL);
socket.on("frontend", async function (msg) {
  // console.log("ggggg", msg);
  // console.log("1265361236156qgeqtwretqw", authStore.user._id);
  await userStore.fetchUsers();
  await conversationStore.fetchUserConversations(authStore.user._id);
  await messageStore.increseCounter();
  // console.log("qwyeuoqwoie", messageStore.counter);
  // await conversationStore.fetchUserConversations("");
  // console.log("67627864876237864278", authStore.user);
});

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
