import { useEffect } from "react";
import { jobsAPI } from "../api/jobs";
import { useAppDispatch } from "../redux/store.hooks";
import { setSelectedJob } from "../redux/jobs/jobs.slice";

export const useGetJobDetails = (id?: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchJob = async () => {
      try {
        if (!id) return;

        const response = await jobsAPI.getJobDetails(id);
        if (response.status === 200) {
          dispatch(setSelectedJob(response.data));
        }
      } catch (error) {
        console.error(error);
      } finally {
        // Do something
      }
    };

    fetchJob();
  }, [dispatch, id]);
};
