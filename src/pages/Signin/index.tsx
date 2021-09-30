// Packages
import React, { useState } from "react";

// Hooks
import { useAuth } from "../../hooks/Auth";

// Components
import Input from "../../components/Input";
import Button from "../../components/Button";

// Assets
import logoImg from "../../assets/logo.svg";

import { Container, Logo, Form, FormTitle } from "./styles";

const Signin: React.FC = () => {
  // -------------------------------------------------
  // States
  // -------------------------------------------------
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // -------------------------------------------------
  // Hooks
  // -------------------------------------------------
  const { signIn } = useAuth();
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <Logo>
        <img src={logoImg} alt="Economizaê" />
        <h2>Economizaê</h2>
      </Logo>

      <Form onSubmit={() => signIn(email, password)}>
        <FormTitle>Entrar</FormTitle>

        <Input
          type="email"
          required
          placeholder="E-mail"
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          type="password"
          required
          placeholder="Senha"
          onChange={(e) => setPassword(e.target.value)}
        />

        <Button type="submit">Acessar</Button>
      </Form>
    </Container>
  );
};

export default Signin;
