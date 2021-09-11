import React from "react";

import SelectInput from "../SelectInput";

import { Container, TitleContainer, Controllers } from "./styles";

interface IContentHeaderProps {
  title: string;
  lineColor: string;
  controllers: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = () => {
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
