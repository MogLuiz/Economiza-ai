import React from "react";

import { Container } from "./style";

import SelectInput from "../../components/SelectInput";
import ContentHeader from "../../components/ContentHeader";

const Dashboard: React.FC = () => {
  const options = [
    { value: "Luiz", label: "Luiz" },
    { value: "Bruno", label: "Bruno" },
    { value: "Lucas", label: "Lucas" },
  ];

  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput options={options} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
