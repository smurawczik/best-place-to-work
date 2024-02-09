import StarIcon from "@mui/icons-material/Star";
import { Card, CardActions, CardContent, Typography } from "@mui/material";
import { FC } from "react";
import { Job } from "../../../redux/jobs/jobs.slice.types";
import { LinkButton } from "../../UI/LinkButton";
import { useNavigate } from "react-router-dom";

export const JobCard: FC<Job> = (job) => {
  const navigate = useNavigate();

  return (
    <Card
      sx={{
        flexGrow: 0.98,
        transition: "0.3s",
        borderRadius: 0,
        ":hover": {
          cursor: "pointer",
          boxShadow: (theme) => theme.shadows[5],
          zIndex: 1,
        },
      }}
      onClick={() => {
        navigate(`/jobs/${job.id}`);
      }}
    >
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
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        <LinkButton
          size="small"
          color="primary"
          startIcon={<StarIcon fontSize="small" />}
          href={`/reviews/${job.company.id}`}
        >
          Company Reviews
        </LinkButton>

        <LinkButton
          size="small"
          color="secondary"
          variant="contained"
          disableElevation
          href={`/jobs/${job.id}`}
        >
          Apply
        </LinkButton>
      </CardActions>
    </Card>
  );
};
