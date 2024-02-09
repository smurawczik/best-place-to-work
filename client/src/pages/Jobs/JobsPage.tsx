import { JobList } from "../../components/Jobs";
import { useGetJobs } from "../../hooks/useGetJobs";

export const JobsPage = () => {
  useGetJobs();

  return <JobList />;
};
