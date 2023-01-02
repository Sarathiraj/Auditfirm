import axiosInstance from "./Axios";

export const getMethod = async (URL: string) => axiosInstance.get(URL);
export const postMethod = (URL: string, body: object) =>
  axiosInstance.get(URL, body);
