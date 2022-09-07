import React, { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import App from "./App";
import "./index.less";

const rootElement = document.getElementById("app") as HTMLElement;
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
