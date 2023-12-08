import axios from "axios";

axios.defaults.baseURL = process.env.BACKEND_BASE_URL;

export default function api() {
  const axiosInstant = axios.create({
    withCredentials: false,
  });
  return axiosInstant;
}
