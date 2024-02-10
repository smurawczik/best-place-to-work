import Grid from "@mui/material/Grid";
import { useAppSelector } from "../../../redux/store.hooks";
import { Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export const ReviewList = () => {
  const navigate = useNavigate();

  const reviews = useAppSelector((state) => state.reviews.list);

  return (
    <>
      <h1>Company Reviews</h1>
      <Grid container>
        {reviews.map((review) => (
          <Grid
            item
            xs={12}
            key={review.company.id}
            padding={2}
            borderRadius={2}
            sx={{
              margin: 1,
              cursor: "pointer",
              border: (theme) => `1px solid ${theme.palette.primary.main}`,
              "&:hover": {
                backgroundColor: "primary.main",
                color: "primary.contrastText",
              },
            }}
            onClick={() => {
              navigate(`/reviews/${review.company.id}`);
            }}
          >
            <Typography variant="h5">
              <b>{review.company.name}</b> - Overall score: {review.rating}
            </Typography>
          </Grid>
        ))}
      </Grid>
    </>
  );
};
