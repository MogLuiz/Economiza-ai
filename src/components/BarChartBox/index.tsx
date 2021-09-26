// Packages
import React from "react";

// Component
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";

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
        <h2>{title}</h2>
      </SideLeft>

      <SideRight></SideRight>
    </Container>
  );
};

export default BarChartBox;
