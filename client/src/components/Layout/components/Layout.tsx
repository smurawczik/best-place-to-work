import { Outlet } from "react-router-dom";
import { Header } from "../../Header";
import { MainContainer } from "./MainContainer";

export function Layout() {
  return (
    <>
      <Header />
      <MainContainer>
        <Outlet />
      </MainContainer>
      <footer>footer</footer>
    </>
  );
}
