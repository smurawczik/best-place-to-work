import Grid from "@mui/material/Grid";
import { useAppSelector } from "../../../redux/store.hooks";
import { CompanyReview } from "./CompanyReview";
import Box from "@mui/material/Box";

export const CompanyReviews = () => {
  const reviews = useAppSelector((state) => state.reviews.companyReviews);

  return (
    <Box pt={2}>
      <Grid container spacing={2}>
        {reviews.map((review) => (
          <CompanyReview key={review.id} review={review} />
        ))}
      </Grid>
    </Box>
  );
};
