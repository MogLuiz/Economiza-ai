// Packages
import React, { useState } from "react";

// Assets
import logoImg from "../../assets/logo.svg";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
  MdClose,
  MdMenu,
} from "react-icons/md";

// Hooks
import { useAuth } from "../../hooks/Auth";

// Style
import {
  Container,
  Header,
  LogImg,
  Title,
  MenuContainer,
  MenuItemLink,
  MenuItemButton,
  ToggleMenu,
} from "./styles";

const Aside: React.FC = () => {
  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  const [toggleMenuIsOpened, setToggleMenuIsOpened] = useState(false);

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  const { signOut } = useAuth();
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container menuIsOpen={toggleMenuIsOpened}>
      <Header>
        <ToggleMenu>{toggleMenuIsOpened ? <MdClose /> : <MdMenu />}</ToggleMenu>

        <LogImg src={logoImg} alt="Logo Economizaê" />
        <Title>Economizaê</Title>
      </Header>

      <MenuContainer>
        <MenuItemLink href="/">
          <MdDashboard />
          Dashboard
        </MenuItemLink>

        <MenuItemLink href="/list/entry-balance">
          <MdArrowUpward />
          Entradas
        </MenuItemLink>

        <MenuItemLink href="/list/exit-balance">
          <MdArrowDownward />
          Saídas
        </MenuItemLink>

        <MenuItemButton onClick={signOut}>
          <MdExitToApp />
          Sair
        </MenuItemButton>
      </MenuContainer>
    </Container>
  );
};

export default Aside;
