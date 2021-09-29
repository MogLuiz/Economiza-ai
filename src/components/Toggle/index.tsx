// Packages
import React from "react";

// Types
import { IToggleProps } from "./types";

// Style
import { Container, ToggleLabel, ToggleSelector } from "./styles";

const Toggle: React.FC<IToggleProps> = ({
  labelLeft,
  labelRight,
  checked,
  onChange,
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <ToggleLabel>{labelLeft}</ToggleLabel>
    <ToggleSelector
      checked={checked}
      uncheckedIcon={false}
      checkedIcon={false}
      onChange={onChange}
    />
    <ToggleLabel>{labelRight}</ToggleLabel>
  </Container>
);

export default Toggle;
