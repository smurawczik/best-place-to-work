import { Company } from "../jobs/jobs.slice.types";

export type CompanyReviewsResponse = { rating: number; reviews: Review[] };

export interface Review {
  id: number;
  rating: number;
  title: string;
  description: string;
  createdAt: string;
  company: Company;
}

export interface ReviewsState {
  list: Review[];
  companyRating: number | null;
  company: Company | null;
}
