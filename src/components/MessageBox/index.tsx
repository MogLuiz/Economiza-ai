// Packages
import React from "react";

// Assets
import happyImg from "../../assets/happy.svg";

// Style
import { Container } from "./styles";

const MessageBox: React.FC = () => {
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
      </header>
    </Container>
  );
};

export default MessageBox;
