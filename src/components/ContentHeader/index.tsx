import React from "react";

import SelectInput from "../SelectInput";

import { Container, TitleContainer, Controllers } from "./styles";

const ContentHeader: React.FC = () => {
  const options = [
    { value: "Luiz", label: "Luiz" },
    { value: "Bruno", label: "Bruno" },
    { value: "Lucas", label: "Lucas" },
  ];

  return (
    <Container>
      <TitleContainer>
        <h1>Título</h1>
      </TitleContainer>

      <Controllers>
        <SelectInput options={options} />
      </Controllers>
    </Container>
  );
};

export default ContentHeader;
