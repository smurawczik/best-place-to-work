import { FC } from "react";
import { Job } from "../../../redux/jobs/jobs.slice.types";
import { Card, CardContent, Typography } from "@mui/material";

export const JobCard: FC<Job> = (job) => {
  return (
    <Card sx={{ flexGrow: 0.98 }}>
      <CardContent>
        <Typography variant="h5" component="div">
          {job.title}
        </Typography>
        <Typography variant="subtitle1" color="text.secondary">
          {job.company.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.location}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.salary}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {job.description}
        </Typography>
      </CardContent>
    </Card>
  );
};
