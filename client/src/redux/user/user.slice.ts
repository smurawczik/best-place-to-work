import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./user.slice.types";

const initialState: UserState = {
  isAuthenticated: false,
  status: "idle",
  profile: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setStatus: (state, action: PayloadAction<UserState["status"]>) => {
      state.status = action.payload;
    },
    setUserAndAuth: (state, action: PayloadAction<UserState["profile"]>) => {
      state.status = "succeeded";
      state.isAuthenticated = true;
      state.profile = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setStatus, setUserAndAuth } = userSlice.actions;

export default userSlice.reducer;
