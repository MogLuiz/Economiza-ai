// Packages
import React from "react";

// Types
import { IMessageBoxProps } from "./types";

// Style
import { Container } from "./styles";

const MessageBox: React.FC<IMessageBoxProps> = ({
  description,
  footerText,
  icon,
  title,
}) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <header>
        <h1>
          {title}
          <img src={icon} alt={title} />
        </h1>
        <p>{description}</p>
      </header>
      <footer>
        <span>{footerText}</span>
      </footer>
    </Container>
  );
};

export default MessageBox;
