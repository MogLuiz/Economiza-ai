// Packages
import React from "react";
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";

// Types
import { IPieChartProps } from "./types";

// Style
import {
  Container,
  SideRight,
  SideLeft,
  LegendContainer,
  Legend,
} from "./styles";

const PieChartComponent: React.FC<IPieChartProps> = ({ data }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        <Legend color="#F7931B">
          <div>5%</div>
          <span>Entradas</span>
        </Legend>
      </LegendContainer>
    </SideLeft>

    <SideRight>
      {/* <ResponsiveContainer>
        <PieChart>
          <Pie
            data={[{ amount: 30, percent: 95 }]}
            labelLine={false}
            dataKey="percent"
          >
            {}
          </Pie>
        </PieChart>
      </ResponsiveContainer> */}
    </SideRight>
  </Container>
);

export default PieChartComponent;
