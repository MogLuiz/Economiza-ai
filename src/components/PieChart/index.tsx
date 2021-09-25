// Packages
import React from "react";
import { Pie, PieChart, Cell, ResponsiveContainer } from "recharts";

// Style
import { Container } from "./styles";

const PieChart: React.FC = () => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <SideLeft>
      <LegendContainer>
        <Legend>
          <div>95%</div>
          <span>Saídas</span>
        </Legend>
      </LegendContainer>
    </SideLeft>

    <SideRight>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={[{ amount: 30, percent: 95 }]}
            labelLine={false}
            dataKey="percent"
          >
            {}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </SideRight>
  </Container>
);

export default PieChart;
