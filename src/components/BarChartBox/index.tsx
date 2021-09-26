// Packages
import React from "react";

// Types
import { IBarChartProps } from "./types";

// Style
import { Container, SideLeft, SideRight } from "./styles";

const BarChartBox: React.FC<IBarChartProps> = ({ title, data }) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <SideLeft>
        <h2>Saídas</h2>
      </SideLeft>

      <SideRight></SideRight>
    </Container>
  );
};

export default BarChartBox;
