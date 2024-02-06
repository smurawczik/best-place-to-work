export interface Role {
  id: string;
  name: string;
}

export interface UserState {
  isAuthenticated: boolean;
  profile: {
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    role: Role;
  } | null;
  status: "idle" | "loading" | "succeeded" | "failed";
}
