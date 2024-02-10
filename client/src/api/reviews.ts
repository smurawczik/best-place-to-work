import {
  CompanyReviewsResponse,
  ReviewsResponse,
} from "../redux/reviews/reviews.slice.types";
import { axiosInstance } from "./instance";

export const reviewsAPI = {
  getReviews: () => {
    return axiosInstance.get<ReviewsResponse>("/reviews");
  },
  getReviewsByCompany: (companyId: string) => {
    return axiosInstance.get<CompanyReviewsResponse>(`/reviews/${companyId}`);
  },
};
