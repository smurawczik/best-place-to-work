import { Job } from "../redux/jobs/jobs.slice.types";
import { axiosInstance } from "./instance";

export const jobsAPI = {
  getLatestJobs: () => {
    return axiosInstance.get<Job[]>("/jobs/latest");
  },
  getJobDetails: (id: string) => {
    return axiosInstance.get<Job>(`/jobs/${id}`);
  },
};
