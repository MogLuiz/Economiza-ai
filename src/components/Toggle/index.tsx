// Packages
import React from "react";

// Style
import { Container, ToggleLabel, ToggleSelector } from "./styles";

const Toggle: React.FC = () => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <ToggleLabel>Light</ToggleLabel>
    <ToggleSelector
      checked
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={() => console.log("Mudou")}
    />
    <ToggleLabel>Dark</ToggleLabel>
  </Container>
);

export default Toggle;
