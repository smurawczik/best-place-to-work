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

export type CompanyArea = {
  name: string;
} | null;

export type CompanyReviewCon = {
  description: string;
};

export type CompanyReviewPro = {
  description: string;
};

export type CompanyReviewTag = {
  name: string;
};

export interface CompanyReview {
  id: number;
  rating: number;
  title: string;
  description: string;
  createdAt: string;
  company: Company;
  companyArea: CompanyArea;
  companyReviewCons: CompanyReviewCon[];
  companyReviewPros: CompanyReviewPro[];
  recommend: boolean;
  companyReviewTags: CompanyReviewTag[];
}

export interface ReviewsState {
  companyReviews: CompanyReview[];
  companyRating: number | null;
  company: Company | null;
  list: ReviewsResponse;
}
