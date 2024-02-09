import { Company } from "../jobs/jobs.slice.types";

export interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  createdAt: string;
  company: Company;
}

export interface ReviewsState {
  list: Review[];
}
