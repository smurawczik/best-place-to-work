import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CompanyReviewsResponse, ReviewsState } from "./reviews.slice.types";

const initialState: ReviewsState = {
  companyReviews: [],
  companyRating: null,
  company: null,
  list: [],
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviewData: (state, action: PayloadAction<CompanyReviewsResponse>) => {
      state.companyReviews = action.payload.reviews;
      state.companyRating = action.payload.rating;
      state.company = action.payload.reviews?.[0]?.company ?? null;
    },
    cleanReviewData: (state) => {
      state.companyReviews = [];
      state.companyRating = null;
      state.company = null;
    },
    setReviewsList: (state, action: PayloadAction<ReviewsState["list"]>) => {
      state.list = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReviewData, setReviewsList, cleanReviewData } =
  reviewsSlice.actions;

export default reviewsSlice.reducer;
