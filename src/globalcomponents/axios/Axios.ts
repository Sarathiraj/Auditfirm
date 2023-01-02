import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://zaacthealthcheck.azurewebsites.net/api",
});

export default axiosInstance;
