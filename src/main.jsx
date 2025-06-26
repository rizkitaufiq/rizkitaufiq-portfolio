import App from "./App.jsx";
import React from "react";

import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./index.css";
import "./styles/index.css";
import "aos/dist/aos.css";
import "boxicons/css/boxicons.min.css";

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
