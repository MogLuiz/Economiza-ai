// Packages
import React, { createContext, useState, useContext } from "react";

// Types
import { IAuthContext } from "./types";

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

const AuthProvider: React.FC = ({ children }) => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [logged, setLogged] = useState(() => {
    const isLogged = localStorage.getItem("@economizae:logged");

    return !!isLogged;
  });

  // -------------------------------------------------
  // Functions
  // -------------------------------------------------

  const signIn = (email: string, password: string) => {
    if (email === "luizhjramos@outlook.com" && password === "12345678") {
      localStorage.setItem("@economizae:logged", "true");
      setLogged(true);
    } else {
      alert("Senha ou usuário inválidos!");
    }
  };

  const signOut = () => {
    localStorage.removeItem("@economizae:logged");
    setLogged(false);
  };

  // -------------------------------------------------
  // Return
  // -------------------------------------------------

  return (
    <AuthContext.Provider value={{ logged, signIn, signOut }}>
      {children}
    </AuthContext.Provider>
  );
};
