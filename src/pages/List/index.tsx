import React from "react";
import ContentHeader from "../../components/ContentHeader";
import SelectInput from "../../components/SelectInput";
import { Container } from "./style";

const List: React.FC = () => {
  const options = [
    { value: "Luiz", label: "Luiz" },
    { value: "Bruno", label: "Bruno" },
    { value: "Lucas", label: "Lucas" },
  ];
  return (
    <Container>
      <ContentHeader title="Saidas" lineColor="#E44C4E">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default List;
