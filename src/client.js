import axios from "axios";

const client = axios.create({
  baseURL: process.env.React_App_base_url,
});

export default client;
