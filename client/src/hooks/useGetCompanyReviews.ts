import { useEffect } from "react";
import { useAppDispatch } from "../redux/store.hooks";
import { reviewsAPI } from "../api/reviews";
import { cleanReviewData, setReviewData } from "../redux/reviews/reviews.slice";

export const useGetCompanyReviews = (companyId?: string) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    const fetchCompanyReviews = async () => {
      try {
        if (!companyId) return;

        const response = await reviewsAPI.getReviewsByCompany(companyId);
        if (response.status === 200) {
          dispatch(setReviewData(response.data));
        }
      } catch (error) {
        console.error(error);
      }
    };

    fetchCompanyReviews();

    return () => {
      dispatch(cleanReviewData());
    };
  }, [companyId, dispatch]);
};
