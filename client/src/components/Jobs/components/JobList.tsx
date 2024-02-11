import { Grid, styled } from "@mui/material";
import { useAppSelector } from "../../../redux/store.hooks";
import { JobCard } from "./JobCard";

const StyledJobListTitle = styled("h1")(() => ({
  textAlign: "center",
}));

export const JobList = () => {
  const jobList = useAppSelector((state) => state.jobs.list);

  return (
    <>
      <StyledJobListTitle>Jobs</StyledJobListTitle>
      <Grid width="100%" container spacing={1}>
        {jobList.map((job) => (
          <Grid key={job.id} item xs={4} display="flex">
            <JobCard {...job} />
          </Grid>
        ))}
      </Grid>
    </>
  );
};
