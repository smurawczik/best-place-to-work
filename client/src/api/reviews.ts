import { CompanyReviewsResponse } from "../redux/reviews/reviews.slice.types";
import { axiosInstance } from "./instance";

export const reviewsAPI = {
  getReviewsByCompany: (companyId: string) => {
    return axiosInstance.get<CompanyReviewsResponse>(`/reviews/${companyId}`);
  },
};
