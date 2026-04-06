import axios from "axios";
const BASE_URL = "http://localhost:3000/api/v1";

export const getNews = async () => {
  const res = await API.get(`${BASE_URL}/news`);
  return res.data;
};
const API = axios.create({
  baseURL: "http://localhost:3000/api/v1"
});
export default API;