// Packages
import React from "react";

// Types
import { IInputProps } from "./types";

// Style
import { Container } from "./styles";

const Input: React.FC<IInputProps> = ({ ...rest }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container {...rest} />
);

export default Input;
