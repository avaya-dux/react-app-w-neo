import { NeoThemeProvider } from "@avaya/neo-react";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.tsx";

import "./index.css";
import "@avaya/neo-react/avaya-neo-react.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NeoThemeProvider initialMode="dynamic">
      <App />
    </NeoThemeProvider>
  </React.StrictMode>
);
