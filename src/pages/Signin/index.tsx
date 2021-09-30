// Packages
import React from "react";

// Components
import Input from "../../components/Input";

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

        <Input type="text" />
        <Input type="text" />

        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
};

export default Signin;
