import React, { createContext } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import AppRouter from "./routes";
import { SnackbarContextProvider } from "./context/snackbarContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <SnackbarContextProvider>
      <RouterProvider router={AppRouter} />
    </SnackbarContextProvider>
  </React.StrictMode>,
);

reportWebVitals();
