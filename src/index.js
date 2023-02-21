import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "./index.css";

import App from "./App";
import "./index.css";
import "remixicon/fonts/remixicon.css";
import "aos/dist/aos.css"; // You can also use <link> for styles
import AOS from "aos";
AOS.init();
ReactDOM.createRoot(document.getElementById("fb-root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
