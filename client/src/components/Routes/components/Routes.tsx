import {
  BrowserRouter,
  Route,
  Routes as BrowserRoutes,
} from "react-router-dom";
import { HomePage } from "../../../pages/Home/HomePage";
import { Layout } from "../../Layout/";
import { JobsPage } from "../../../pages/Jobs/JobsPage";
import { LoginPage } from "../../../pages/Login/LoginPage";
import { RegisterPage } from "../../../pages/Register/RegisterPage";
import { JobPage } from "../../../pages/JobPage/JobPage";

export const Routes = () => {
  return (
    <BrowserRouter>
      <BrowserRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="jobs" element={<JobsPage />} />
          <Route path="jobs/:id" element={<JobPage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </BrowserRoutes>
    </BrowserRouter>
  );
};
