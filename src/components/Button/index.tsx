// Packages
import React from "react";

// Types
import { IButtonProps } from "./types";

// Style
import { Container } from "./styles";

const Button: React.FC<IButtonProps> = ({ children, ...rest }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------

  <Container {...rest}>{children}</Container>
);

export default Button;
