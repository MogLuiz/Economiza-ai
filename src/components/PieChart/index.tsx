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
        {data.map((item) => (
          <Legend key={item.name} color={item.color}>
            <div>{item.percent}</div>
            <span>{item.name}</span>
          </Legend>
        ))}
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
