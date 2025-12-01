import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Button.jsx";
import Exit from "./Exit.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Exit />
  </StrictMode>
);
