// Packages
import React from "react";
import { BrowserRouter } from "react-router-dom";

// Components
import App from "./app.routes";

const Routes: React.FC = () => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

export default Routes;
