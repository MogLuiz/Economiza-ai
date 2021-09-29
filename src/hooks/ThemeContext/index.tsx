// Packages
import React, { createContext, useState, useContext } from "react";

// Themes
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";

// Types
import { IThemeContext, ITheme } from "./types";

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(dark);

  const toggleTheme = () => {
    if (theme.title === "dark") {
      setTheme(light);
    } else {
      setTheme(dark);
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};
