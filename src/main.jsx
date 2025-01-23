import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./i18n.js";
import { BrowserRouter } from "react-router-dom";
import { Suspense } from "react";
import { ClimbingBoxLoader } from "react-spinners";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Suspense fallback={<ClimbingBoxLoader />}>
        <App />
      </Suspense>
    </BrowserRouter>
  </React.StrictMode>
);
