import axios, * as others from "axios";

const instance = axios.create({
        withCredentials: true,
        baseURL: "https://social-network.samuraijs.com/api/1.0/",
        headers:{"API-KEY":"c6fb92c5-e344-49b0-a872-0c55f74aa476"}
});

export const getUsers = (currentPage = 1, pageSize = 20) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`)
    .then((response) => {
      return response.data;
    });
};
