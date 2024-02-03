import React from "react";
import ReactDOM from "react-dom/client";
import { Routes } from "./components/Routes/index.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>
);
