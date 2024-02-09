import Box from "@mui/material/Box";
import { useAppSelector } from "../../../redux/store.hooks";
import { styled } from "@mui/material";

const JobDetailsTitle = styled("h1")(() => ({
  textAlign: "center",
}));

export const JobDetails = () => {
  const job = useAppSelector((state) => state.jobs.selectedJob);

  if (!job) return null;

  return (
    <Box width="100%" height="100%">
      <JobDetailsTitle>{job?.title}</JobDetailsTitle>
      <p>{job?.description}</p>
    </Box>
  );
};
