import { JobList } from "../../components/Jobs";
import { useGetJobs } from "../../hooks/useGetJobs";

export const Jobs = () => {
  useGetJobs();

  return <JobList />;
};
