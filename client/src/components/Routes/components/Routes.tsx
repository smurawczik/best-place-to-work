import {
  BrowserRouter,
  Route,
  Routes as BrowserRoutes,
} from "react-router-dom";
import { Home } from "../../../pages/Home";
import { Layout } from "../../Layout/";
import { Jobs } from "../../../pages/Jobs";

export const Routes = () => {
  return (
    <BrowserRouter>
      <BrowserRoutes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="jobs" element={<Jobs />} />
        </Route>
      </BrowserRoutes>
    </BrowserRouter>
  );
};
