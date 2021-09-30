// Packages
import React from "react";
import { BrowserRouter } from "react-router-dom";

// Hooks
import { useAuth } from "../hooks/Auth";

// Pages
import App from "./app.routes";
import Auth from "./auth.routes";

const Routes: React.FC = () => {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  const { logged } = useAuth();

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return <BrowserRouter>{logged ? <App /> : <Auth />}</BrowserRouter>;
};

export default Routes;
