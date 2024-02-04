import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { Routes } from "./components/Routes/index.ts";
import "./index.css";
import { store } from "./redux/store.ts";

import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { theme } from "./theme/index.ts";
import { Authentication } from "./components/Authentication/index.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <CssBaseline />
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <Authentication>
          <Routes />
        </Authentication>
      </Provider>
    </ThemeProvider>
  </React.StrictMode>
);
