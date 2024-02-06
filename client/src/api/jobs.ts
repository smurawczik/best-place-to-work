import { axiosInstance } from "./instance";

export const jobsAPI = {
  getLatestJobs: () => {
    return axiosInstance.get("/jobs/latest");
  },
};
