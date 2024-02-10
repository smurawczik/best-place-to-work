import { useEffect } from "react";
import { reviewsAPI } from "../api/reviews";
import { setReviewsList } from "../redux/reviews/reviews.slice";
import { useAppDispatch } from "../redux/store.hooks";

export const useGetReviews = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const response = await reviewsAPI.getReviews();
        if (response.status === 200) {
          dispatch(setReviewsList(response.data));
        }
      } catch (error) {
        console.error(error);
      } finally {
        // Do something
      }
    };

    fetchReviews();
  }, [dispatch]);
};
