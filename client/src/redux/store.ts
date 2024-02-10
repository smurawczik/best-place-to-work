import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/user.slice";
import jobsReducer from "./jobs/jobs.slice";
import reviewsReducer from "./reviews/reviews.slice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    jobs: jobsReducer,
    reviews: reviewsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
