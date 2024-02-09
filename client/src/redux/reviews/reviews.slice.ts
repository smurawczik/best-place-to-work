import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { ReviewsState } from "./reviews.slice.types";

const initialState: ReviewsState = {
  list: [],
};

export const reviewsSlice = createSlice({
  name: "reviews",
  initialState,
  reducers: {
    setReviewList: (state, action: PayloadAction<ReviewsState["list"]>) => {
      state.list = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setReviewList } = reviewsSlice.actions;

export default reviewsSlice.reducer;
