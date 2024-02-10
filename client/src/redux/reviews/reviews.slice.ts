import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CompanyReviewsResponse, ReviewsState } from "./reviews.slice.types";

const initialState: ReviewsState = {
  list: [],
  companyRating: null,
  company: null,
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviewData: (state, action: PayloadAction<CompanyReviewsResponse>) => {
      state.list = action.payload.reviews;
      state.companyRating = action.payload.rating;
      state.company = action.payload.reviews?.[0]?.company ?? null;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReviewData } = reviewsSlice.actions;

export default reviewsSlice.reducer;
