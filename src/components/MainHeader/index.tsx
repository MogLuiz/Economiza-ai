// Packages
import React, { useMemo } from "react";

// Utils
import emojis from "../../utils/emojis";

// Components
import Toggle from "../Toggle";

// Style
import { Container, Profile, Welcome, UserName } from "./styles";

const MainHeader: React.FC = () => {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  const emoji = useMemo(() => {
    const indice = Math.floor(Math.random() * emojis.length);
    return emojis[indice];
  }, []);
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <Toggle />

      <Profile>
        <Welcome>Olá,{emoji}</Welcome>
        <UserName>Luiz Henrique</UserName>
      </Profile>
    </Container>
  );
};

export default MainHeader;
