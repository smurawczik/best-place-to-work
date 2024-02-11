import {
  BrowserRouter,
  Routes as BrowserRoutes,
  Route,
} from "react-router-dom";
import { CompanyReviewsPage } from "../../../pages/CompanyReviewsPage/CompanyReviewsPage";
import { HomePage } from "../../../pages/Home/HomePage";
import { JobPage } from "../../../pages/JobPage/JobPage";
import { JobsPage } from "../../../pages/Jobs/JobsPage";
import { LoginPage } from "../../../pages/Login/LoginPage";
import { RegisterPage } from "../../../pages/Register/RegisterPage";
import { ReviewsPage } from "../../../pages/Reviews/ReviewsPage";
import { Layout } from "../../Layout/";

export const Routes = () => {
  return (
    <BrowserRouter>
      <BrowserRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="jobs/:id" element={<JobPage />} />
          <Route path="reviews/" element={<ReviewsPage />} />
          <Route path="reviews/:id" element={<CompanyReviewsPage />} />
          <Route
            path="reviews/:id/open/:reviewId"
            element={<CompanyReviewsPage withModal />}
          />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </BrowserRoutes>
    </BrowserRouter>
  );
};
