// Packages
import React from "react";
import { BrowserRouter } from "react-router-dom";

// Pages
import App from "./app.routes";
import Auth from "./auth.routes";

const Routes: React.FC = () => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <BrowserRouter>
    <Auth />
  </BrowserRouter>
);

export default Routes;
