import { Company } from "../jobs/jobs.slice.types";

export type ReviewResponse = {
  company: Company;
  rating: number;
};

export type ReviewsResponse = ReviewResponse[];

export type CompanyReviewsResponse = {
  rating: number;
  reviews: CompanyReview[];
};

export interface CompanyReview {
  id: number;
  rating: number;
  title: string;
  description: string;
  createdAt: string;
  company: Company;
}

export interface ReviewsState {
  companyReviews: CompanyReview[];
  companyRating: number | null;
  company: Company | null;
  list: ReviewsResponse;
}
