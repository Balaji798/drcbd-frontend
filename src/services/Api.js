import axios from "axios";

const token = localStorage.getItem("token") || "";
export const axiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    authorization: `Bearer ${token}`,
  },
});
