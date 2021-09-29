// Packages
import React from "react";

// Utils
import formatCurrency from "../../utils/formatCurrency";

// Component
import { ResponsiveContainer, BarChart, Bar, Cell, Tooltip } from "recharts";

// Types
import { IBarChartProps } from "./types";

// Style
import {
  Container,
  SideLeft,
  SideRight,
  LegendContainer,
  Legend,
} from "./styles";

const BarChartBox: React.FC<IBarChartProps> = ({ title, data }) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <SideLeft>
        <h2>{title}</h2>

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
          <BarChart data={data}>
            <Bar dataKey="amount">
              {data.map((item) => (
                <Cell key={item.name} fill={item.color} cursor="pointer" />
              ))}
            </Bar>
            <Tooltip
              cursor={{ fill: "none" }}
              formatter={(value: number) => formatCurrency(Number(value))}
            />
          </BarChart>
        </ResponsiveContainer>
      </SideRight>
    </Container>
  );
};

export default BarChartBox;
