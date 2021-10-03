// Packages
import React, { useMemo, useState } from "react";

// Utils
import emojis from "../../utils/emojis";

// Hooks
import { useTheme } from "../../hooks/ThemeContext";

// Components
import Toggle from "../Toggle";

// Style
import { Container, Profile, Welcome, UserName } from "./styles";

const MainHeader: React.FC = () => {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  const { toggleTheme, theme } = useTheme();

  const [darkTheme, setDarkTheme] = useState(() =>
    theme.title === "dark" ? true : false
  );

  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);

  // -------------------------------------------------
  // Function
  // -------------------------------------------------

  const handleChangeTheme = () => {
    setDarkTheme(!darkTheme);
    toggleTheme();
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <Toggle
        labelLeft="Light"
        labelRight="Dark"
        checked={darkTheme}
        onChange={handleChangeTheme}
      />

      <Profile>
        <Welcome>Olá,{emoji}</Welcome>
        <UserName>Luiz Henrique</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
