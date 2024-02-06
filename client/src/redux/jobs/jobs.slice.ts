import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { JobsState } from "./jobs.slice.types";

const initialState: JobsState = {
  list: [],
  filter: {
    search: "",
  },
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobList: (state, action: PayloadAction<JobsState["list"]>) => {
      state.list = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setJobList } = jobsSlice.actions;

export default jobsSlice.reducer;
