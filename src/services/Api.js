import axios from "axios";

const token = localStorage.getItem("token") || "";
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  //"https://drcbd-backend-zgqu.onrender.com/",
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  },
});
