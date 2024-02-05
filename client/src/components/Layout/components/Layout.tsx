import { Outlet } from "react-router-dom";
import { Header } from "../../Header";
import { MainContainer } from "./MainContainer";
import { Footer } from "../../Footer";

export function Layout() {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <Footer />
    </>
  );
}
