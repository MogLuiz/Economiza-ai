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

      <Form onSubmit={() => {}}>
        <FormTitle>Entrar</FormTitle>

        <Input type="email" required placeholder="E-mail" />
        <Input type="password" required placeholder="Senha" />

        <button type="submit">Acessar</button>
      </Form>
    </Container>
  );
};

export default Signin;
