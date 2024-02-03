export interface UserState {
  isAuthenticated: boolean;
  user: {
    id: string;
    username: string;
    email: string;
  } | null;
}
