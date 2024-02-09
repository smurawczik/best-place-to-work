import {
  BrowserRouter,
  Route,
  Routes as BrowserRoutes,
} from "react-router-dom";
import { HomePage } from "../../../pages/Home";
import { Layout } from "../../Layout/";
import { JobsPage } from "../../../pages/Jobs";
import { LoginPage } from "../../../pages/Login/Index";
import { RegisterPage } from "../../../pages/Register/Index";
import { JobPage } from "../../../pages/JobPage";

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
