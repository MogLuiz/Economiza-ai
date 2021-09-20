// Packages
import React from "react";

// Components
import SelectInput from "../../components/SelectInput";
import ContentHeader from "../../components/ContentHeader";

// Style
import { Container } from "./style";

const Dashboard: React.FC = () => {
  // -------------------------------------------------
  // Options
  // -------------------------------------------------
  const options = [
    { value: "Luiz", label: "Luiz" },
    { value: "Bruno", label: "Bruno" },
    { value: "Lucas", label: "Lucas" },
  ];

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <ContentHeader title="Dashboard" lineColor="#F7931B">
        <SelectInput options={options} onChange={() => {}} />
      </ContentHeader>
    </Container>
  );
};

export default Dashboard;
