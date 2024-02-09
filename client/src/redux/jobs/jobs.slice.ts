import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { JobsState } from "./jobs.slice.types";

const initialState: JobsState = {
  list: [],
  filter: {
    search: "",
  },
  selectedJob: null,
};

export const jobsSlice = createSlice({
  name: "jobs",
  initialState,
  reducers: {
    setJobList: (state, action: PayloadAction<JobsState["list"]>) => {
      state.list = action.payload;
    },
    setSelectedJob: (
      state,
      action: PayloadAction<JobsState["selectedJob"]>
    ) => {
      state.selectedJob = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setJobList, setSelectedJob } = jobsSlice.actions;

export default jobsSlice.reducer;
