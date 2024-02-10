import { Box } from "@mui/material";
import { useAppSelector } from "../../../redux/store.hooks";
import { Star } from "@mui/icons-material"; // Import the Star icon from Material-UI

export const Rating = () => {
  const rating = useAppSelector((state) => state.reviews.companyRating);

  if (!rating) return null;

  const roundedRating = Math.floor(rating);

  return (
    <Box display="flex" alignItems="end" gap={1} fontSize={20}>
      <Box lineHeight={1}>
        company rating: <b>{rating}</b>
      </Box>
      {Array.from({ length: 5 }).map((_, index) =>
        index < roundedRating ? (
          <Star key={index} color="primary" />
        ) : (
          <Star key={index} />
        )
      )}
    </Box>
  );
};
