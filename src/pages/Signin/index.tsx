// Packages
import React from "react";

// Assets
import logoImg from "../../assets/logo.svg";

import { Container, Logo, Form, FormTitle } from "./styles";

const Signin: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Economizaê" />
        <h2>Economizaê</h2>
      </Logo>

      <Form>
        <FormTitle>Entrar</FormTitle>

        <input type="text" />
        <input type="text" />

        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
};

export default Signin;
