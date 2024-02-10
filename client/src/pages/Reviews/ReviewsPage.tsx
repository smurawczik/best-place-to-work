import { ReviewList } from "../../components/ReviewList";
import { useGetReviews } from "../../hooks/useGetReviews";

export const ReviewsPage = () => {
  useGetReviews();

  return <ReviewList />;
};
