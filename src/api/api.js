import axios, * as others from "axios";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: { "API-KEY": "c6fb92c5-e344-49b0-a872-0c55f74aa476" },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 20) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  getUnfollow(id) {
    return instance.delete(`follow/${id}`).then((response) => {
      return response.data;
    });
  },
  getFollow(id) {
    return instance.post(`follow/${id}`, {}).then((response) => {
      return response.data;
    });
  },
  getMe() {
    return instance.get(`auth/me`).then((response) => {
      return response.data;
    });
  },
  getProfile(userId) {
    return instance
    .get(`profile/${userId}`).then((response) => {
      return response.data;
    });
  },
};
