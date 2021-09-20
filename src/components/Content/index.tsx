// Packages
import React from "react";

// Style
import { Container } from "./styles";

const Content: React.FC = ({ children }) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return <Container>{children}</Container>;
};

export default Content;
