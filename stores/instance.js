import axios from "axios";

// export const baseURL = "http://localhost:8000";

//* ifconfig
//? Alqalaf's at Coded
// export const baseURL = "http://192.168.150.103:8000";
export const baseURL = "http://localhost:8000";

//? Alansari's at Coded
// export const baseURL = "http://192.168.100.168:8000";
// export const baseURL = "http://192.168.1.21:8000";

//? Alansari's at Home

// export const baseURL = "http://192.168.1.148:8000";

//? Alansari's Phone
//  export const baseURL = "http://172.20.10.4:8000";

//?Khareji's at Coded
// export const baseURL = "http://192.168.100.77:8000";

//?Khareji's at Work
// export const baseURL = "http://192.168.8.163:8000";

//?Alrashed's at Coded
// export const baseURL = "http://192.168.1.54:8000";

//?Alrashed's at Home
// export const baseURL = "http://192.168.8.153:8000";

export const instance = axios.create({
  baseURL: `${baseURL}/api`,
});
