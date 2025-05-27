import axios from "axios";

const instance = axios.create({
  baseURL: "https://api.pitchdeck.design",
});

export default instance;