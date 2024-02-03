import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { UserState } from "./user.slice.types";

const initialState: UserState = {
  isAuthenticated: false,
  user: null,
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuthenticated: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setIsAuthenticated } = userSlice.actions;

export default userSlice.reducer;
