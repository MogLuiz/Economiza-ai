// Packages
import React from "react";
import ReactDOM from "react-dom";

// Components
import App from "./App";
import reportWebVitals from "./reportWebVitals";

ReactDOM.render(
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
