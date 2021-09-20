// Packages
import React from "react";
import Routes from "./routes";

// Style
import dark from "./styles/themes/dark";
import { ThemeProvider } from "styled-components";
import GlobalStyles from "./styles/GlobalStyles";

const App: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <ThemeProvider theme={dark}>
      <GlobalStyles />
      <Routes />
    </ThemeProvider>
  );
};

export default App;
