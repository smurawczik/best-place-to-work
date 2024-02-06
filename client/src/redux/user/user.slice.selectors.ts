import { RootState } from "../store";

export const userSelectors = {
  selectIsAuthenticated: (state: RootState) => state.user.isAuthenticated,
  selectStatus: (state: RootState) => state.user.status,
  selectProfile: (state: RootState) => state.user.profile,
  isCompany: (state: RootState) => state.user.profile?.role.name === "Company",
};
