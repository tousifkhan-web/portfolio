import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource/lato";
import "@fontsource/poppins";
import "@fontsource-variable/inter";
import "@fontsource-variable/caveat";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import "./assets/mediaquary.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
