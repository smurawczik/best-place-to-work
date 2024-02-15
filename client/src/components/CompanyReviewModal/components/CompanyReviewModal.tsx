import { Star, ThumbDownOutlined, ThumbUpOutlined } from "@mui/icons-material";
import { Box, Chip, Dialog, Typography } from "@mui/material";
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
        navigate(`/reviews/${review.company.id}`);
      }}
      maxWidth="sm"
      fullWidth
    >
      <Box p={2} width="100%">
        <Typography gutterBottom variant="h4" textAlign="center">
          {review.company.name}{" "}
          {review.companyArea?.name ? (
            <small>- {review.companyArea?.name}</small>
          ) : (
            ""
          )}
        </Typography>
        <Box
          display="flex"
          alignItems="center"
          gap={0.5}
          justifyContent="center"
          mb={2}
        >
          {Array.from({ length: 5 }).map((_, index) =>
            index < roundedRating ? (
              <Star key={index} color="primary" />
            ) : (
              <Star key={index} color="disabled" />
            )
          )}
        </Box>
        {review.companyReviewTags.length > 0 && (
          <Box display="flex" gap={1} mb={1}>
            {review.companyReviewTags.map((tag) => (
              <Chip key={tag.name} label={tag.name} />
            ))}
          </Box>
        )}
        <Typography gutterBottom>
          <b>review:</b> {review.description}
        </Typography>
        {hasConsOrPros ? (
          <>
            {review.companyReviewPros?.length ? (
              <Box
                sx={{
                  border: (theme) => `1px solid ${theme.palette.primary.main}`,
                  borderRadius: 1,
                }}
                p={1}
                my={1}
              >
                <Typography variant="h6">Pros</Typography>
                <ReviewPros pros={review.companyReviewPros} />
              </Box>
            ) : null}
            {review.companyReviewCons?.length ? (
              <Box
                sx={{
                  border: (theme) => `1px solid ${theme.palette.primary.main}`,
                  borderRadius: 1,
                }}
                p={1}
                my={1}
              >
                <Typography variant="h6">Cons</Typography>
                <ReviewCons cons={review.companyReviewCons} />
              </Box>
            ) : null}
          </>
        ) : null}
        <Box mt={1}>
          {review.recommend ? <ThumbUpOutlined /> : <ThumbDownOutlined />}
        </Box>
      </Box>
    </Dialog>
  );
};
