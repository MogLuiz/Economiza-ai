// Packages
import React, { createContext, useState, useContext } from "react";

// Types
import { IAuthContext } from "./types";

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  const [logged, setLogged] = useState(() => {
    const isLogged = localStorage.getItem("@economizae:logged");

    return !!isLogged;
  });
};
