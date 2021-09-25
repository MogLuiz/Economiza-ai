// Packages
import React from "react";

// Components
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

const PieChartBox: React.FC<IPieChartProps> = ({ data }) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <SideLeft>
      <h2>Relação</h2>
      <LegendContainer>
        {data.map((item) => (
          <Legend key={item.name} color={item.color}>
            <div>{item.percent}%</div>
            <span>{item.name}</span>
          </Legend>
        ))}
      </LegendContainer>
    </SideLeft>

    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie data={data} dataKey="percent">
            {data.map((item) => (
              <Cell key={item.name} fill={item.color} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

export default PieChartBox;
