import axios from "axios";
const Url = "https://newsapi.org/v2/";

const instance = axios.create({
  baseURL: Url,
  headers: {
    "Content-type": "application/json",
  },
});

export default instance;
