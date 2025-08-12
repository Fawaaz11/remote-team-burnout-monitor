import axios from "axios";

const API_URL = "http://localhost:5000/api/users"; // Backend URL

export const getUsers = async () => {
  const res = await axios.get(API_URL);
  return res.data;
};

export const addUser = async (userData) => {
  const res = await axios.post(API_URL, userData);
  return res.data;
};
