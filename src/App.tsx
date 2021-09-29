// Packages
import React from "react";
import Routes from "./routes";

// Style
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

// Provider
import { useTheme } from "./hooks/ThemeContext/index";

const App: React.FC = () => {
  const { theme } = useTheme();

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
