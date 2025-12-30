import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./Button.jsx";
import Exit from "./Exit.jsx";
import Variants from "./variants.jsx";
import { Hooks } from "./hooks.jsx";
import LayoutFramer from "./LayoutFramer.jsx";
import Button from "./Button.jsx";

import { AnimatedText } from "./AnimatedText.jsx";
createRoot(document.getElementById("root")).render(
  <div className="flex items-center justify-center min-h-screen bg-black">
    <AnimatedText />
  </div>
);
