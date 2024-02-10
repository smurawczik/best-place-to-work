import { FC } from "react";
import { CompanyReview as _CompanyReview } from "../../../redux/reviews/reviews.slice.types";
import Grid from "@mui/material/Grid";
import { Box, styled } from "@mui/material";
import { format } from "date-fns/format";

const StyledReviewTitle = styled("h3")(({ theme }) => ({
  margin: 0,
  color: theme.palette.secondary.main,
  whiteSpace: "nowrap",
  overflow: "hidden",
  textOverflow: "ellipsis",
}));

export const CompanyReview: FC<{ review: _CompanyReview }> = ({ review }) => {
  const formattedDate = format(
    new Date(review.createdAt),
    "MMMM dd, yyyy HH:mm"
  );

  return (
    <Grid item xs={6}>
      <Box
        display="flex"
        flexDirection="column"
        gap={1}
        p={2}
        border={2}
        borderRadius={2}
        borderColor="grey.300"
        sx={{
          cursor: "pointer",
          backgroundColor: "background.paper",
          "&:hover": {
            borderColor: "primary.main",
          },
        }}
      >
        <StyledReviewTitle>
          score: {review.rating} - {review.title}
        </StyledReviewTitle>
        <small>
          posted on: <b>{formattedDate}</b>
        </small>
      </Box>
    </Grid>
  );
};
