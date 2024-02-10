import { useGetReviews } from "../../hooks/useGetReviews";

export const ReviewsPage = () => {
  useGetReviews();

  return (
    <div>
      <h1>Reviews</h1>
    </div>
  );
};
