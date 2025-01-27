import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

const appContainer = document.createElement("div");
appContainer.id = "internet-speed-extension";
document.body.appendChild(appContainer);

const root = createRoot(appContainer);
root.render(<App />);
