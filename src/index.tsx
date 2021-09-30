// Packages
import React from "react";
import ReactDOM from "react-dom";

// Providers
import { ThemeProvider } from "./hooks/ThemeContext";
import { AuthProvider } from "./hooks/Auth";

// Components
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <React.StrictMode>
    <ThemeProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
