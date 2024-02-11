import { Star, ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import { Box, Chip, Dialog, Grid, Typography } from "@mui/material";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
import { useAppSelector } from "../../../redux/store.hooks";
import { ReviewCons } from "./ReviewCons";
import { ReviewPros } from "./ReviewPros";

export const CompanyReviewModal: FC<{ reviewId: string }> = ({ reviewId }) => {
  const navigate = useNavigate();
  const review = useAppSelector((state) =>
    state.reviews.companyReviews.find((review) => review.id === reviewId)
  );

  if (!review) {
    return null;
  }

  const roundedRating = Math.floor(review.rating);

  const hasConsOrPros =
    review.companyReviewCons?.length || review.companyReviewPros?.length;
  return (
    <Dialog
      open
      onClose={() => {
        navigate(-1);
      }}
      maxWidth="sm"
      fullWidth
    >
      <Box p={2} width="100%">
        <Typography gutterBottom variant="h4" textAlign="center">
          {review.company.name}
        </Typography>
        {review.companyReviewTags.length > 0 && (
          <Box display="flex" gap={1}>
            {review.companyReviewTags.map((tag) => (
              <Chip key={tag.name} label={tag.name} />
            ))}
          </Box>
        )}
        {review.companyArea && (
          <Typography variant="h6" gutterBottom>
            {review.companyArea.name}
          </Typography>
        )}
        <Box display="flex" alignItems="center" gap={0.5}>
          {review.title}: <b>{review.rating}</b>
          {Array.from({ length: 5 }).map((_, index) =>
            index < roundedRating ? (
              <Star key={index} color="primary" fontSize="small" />
            ) : (
              <Star key={index} color="disabled" fontSize="small" />
            )
          )}
        </Box>
        <Typography>{review.description}</Typography>
        {hasConsOrPros ? (
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Typography variant="h6">Pros</Typography>
              <ReviewPros pros={review.companyReviewPros} />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="h6">Cons</Typography>
              <ReviewCons cons={review.companyReviewCons} />
            </Grid>
          </Grid>
        ) : null}
        {review.recommend ? <ThumbUpOutlined /> : <ThumbDownOutlined />}
      </Box>
    </Dialog>
  );
};
