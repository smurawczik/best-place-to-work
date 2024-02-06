import { useEffect } from "react";
import { jobsAPI } from "../api/jobs";
import { useAppDispatch } from "../redux/store.hooks";
import { setJobList } from "../redux/jobs/jobs.slice";

export const useGetJobs = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await jobsAPI.getLatestJobs();
        if (response.status === 200) {
          dispatch(setJobList(response.data));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchJobs();
  }, [dispatch]);
};
