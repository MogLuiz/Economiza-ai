// Packages
import React from "react";

// Assets
import logoImg from "../../assets/logo.svg";
import {
  MdDashboard,
  MdArrowDownward,
  MdArrowUpward,
  MdExitToApp,
} from "react-icons/md";

// Style
import {
  Container,
  Header,
  LogImg,
  Title,
  MenuContainer,
  MenuItemLink,
} from "./styles";

const Aside: React.FC = () => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <Header>
      <LogImg src={logoImg} alt="Logo Economizaê" />
      <Title>Economizaê</Title>
    </Header>

    <MenuContainer>
      <MenuItemLink href="/dashboard">
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

      <MenuItemLink href="#">
        <MdExitToApp />
        Sair
      </MenuItemLink>
    </MenuContainer>
  </Container>
);

export default Aside;
