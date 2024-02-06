import Box from "@mui/material/Box";
import { useAppSelector } from "../../../redux/store.hooks";
import { JobCard } from "./JobCard";

export const JobList = () => {
  const jobList = useAppSelector((state) => state.jobs.list);

  return (
    <>
      <h1>Job List</h1>
      <Box width="100%" gap={1.5} display="flex" px={1} flexDirection="column">
        {jobList.map((job) => (
          <JobCard key={job.id} {...job} />
        ))}
      </Box>
    </>
  );
};
