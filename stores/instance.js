import axios from "axios";
import io from "socket.io/client-dist/socket.io";
// export const baseURL = "http://localhost:8000";

//* ifconfig

export const baseURL = "http://192.168.100.77:8000";
export const socket = io(baseURL);
socket.on("chat message", function (msg) {});

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
