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
  onChange(event: React.ChangeEvent<HTMLSelectElement>): void | undefined;
}

const SelectInput: React.FC<ISelectInputProps> = ({ options, onChange }) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <select onChange={onChange}>
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
