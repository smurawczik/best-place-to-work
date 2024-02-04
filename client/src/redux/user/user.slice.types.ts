export interface UserState {
  isAuthenticated: boolean;
  profile: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
  } | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}
