import axios from "axios";

// export const baseURL = "http://localhost:8000";

//* ifconfig
//? alqalaf at ...
// export const baseURL = "http://ADD YOUR IP HERE:8000";

// export const baseURL = "http://192.168.100.168:8000";

//?Khareji's at Coded
// export const baseURL = "http://192.168.100.77:8000";

//?Alrashed's at Coded
// export const baseURL = "http://192.168.1.54:8000";

//?Alrashed's at Home
export const baseURL = "http://192.168.8.153:8000";

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
