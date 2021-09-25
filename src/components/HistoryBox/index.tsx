// Packages
import React from "react";

// Components
import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

// Style
import { Container } from "./styles";

const HistoryBox: React.FC = () => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <h2>Histórico de saldo</h2>

    <ResponsiveContainer>
      <LineChart data={[]}>
        <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
        <XAxis dataKey="month" stroke="#cecece" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="amountEntry"
          name="Entradas"
          stroke="#F7931B"
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="amountOutput"
          name="Saídas"
          stroke="#E44C4E"
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </Container>
);
export default HistoryBox;
