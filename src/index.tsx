// Packages
import React from "react";
import ReactDOM from "react-dom";

// Provider
import { ThemeProvider } from "./hooks/ThemeContext";

// Components
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
