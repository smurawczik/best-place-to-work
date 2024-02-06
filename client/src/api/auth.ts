import { UserState } from "../redux/user/user.slice.types";
import { axiosInstance } from "./instance";

export const authAPI = {
  login: async (email: string, password: string) => {
    return axiosInstance.post("/auth/login", {
      email,
      password,
    });
  },
  logout: async () => {
    axiosInstance.post("/auth/logout");
  },
  profile: async () => {
    return axiosInstance.get<UserState["profile"]>("/auth/profile");
  },
};
