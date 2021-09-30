// Packages
import React, { createContext, useState, useContext } from "react";

// Themes
import dark from "../../styles/themes/dark";
import light from "../../styles/themes/light";

// Types
import { IThemeContext, ITheme } from "./types";

const ThemeContext = createContext<IThemeContext>({} as IThemeContext);

const ThemeProvider: React.FC = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>(() => {
    const themeSaved = localStorage.getItem("@economizae:theme");

    if (themeSaved) {
      return JSON.parse(themeSaved);
    }

    return dark;
  });

  const toggleTheme = () => {
    if (theme.title === "dark") {
      setTheme(light);
      localStorage.setItem("@economizae:theme", JSON.stringify(light));
    } else {
      setTheme(dark);
      localStorage.setItem("@economizae:theme", JSON.stringify(dark));
    }
  };

  return (
    <ThemeContext.Provider value={{ toggleTheme, theme }}>
      {children}
    </ThemeContext.Provider>
  );
};

function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  return context;
}

export { ThemeProvider, useTheme };
