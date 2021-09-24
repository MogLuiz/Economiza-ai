// Packages
import React from "react";

// Assets
import happyImg from "../../assets/happy.svg";

// Types
import { IMessageBoxProps } from "./types";

// Style
import { Container } from "./styles";

const MessageBox: React.FC<IMessageBoxProps> = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <header>
        <h1>
          Muito bem!
          <img src={happyImg} alt="" />
        </h1>
        <p>Sua carteira está positiva!</p>
      </header>
      <footer>
        <span>Continue assim. Considere investir o saldo.</span>
      </footer>
    </Container>
  );
};

export default MessageBox;
