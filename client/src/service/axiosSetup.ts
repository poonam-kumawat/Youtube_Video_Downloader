import axios from "axios";

// import store from 'src/store'


export const globalaxiosInstance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});
