import { Outlet } from "react-router-dom";
import { Header } from "../../Header";
import "./Layout.css";

export function Layout() {
  return (
    <>
      <Header />
      <main id="main-layout">
        <Outlet />
      </main>
      <footer>footer</footer>
    </>
  );
}
