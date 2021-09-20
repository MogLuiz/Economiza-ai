// Packages
import React from "react";

// Style
import { Container } from "./styles";

// Types
interface ISelectInputProps {
  options: {
    value: string | number;
    label: string | number;
  }[];
}

const SelectInput: React.FC<ISelectInputProps> = ({ options }) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <select>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </Container>
  );
};

export default SelectInput;
