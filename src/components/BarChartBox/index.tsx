// Packages
import React from "react";

// Style
import { Container, SideLeft, SideRight } from "./styles";

const BarChartBox: React.FC = () => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <SideLeft>
        <h2>Gráfico de Barras</h2>
      </SideLeft>

      <SideRight></SideRight>
    </Container>
  );
};

export default BarChartBox;
