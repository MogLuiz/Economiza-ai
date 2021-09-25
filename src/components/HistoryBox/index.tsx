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

// Types
import { IHistoryBoxProps } from "./types";

// Style
import { Container } from "./styles";

const HistoryBox: React.FC<IHistoryBoxProps> = ({
  data,
  lineColorAmountEntry,
  lineColorAmountOutput,
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <h2>Histórico de saldo</h2>

    <ResponsiveContainer>
      <LineChart data={data}>
        <CartesianGrid strokeDasharray="3 3" stroke="#cecece" />
        <XAxis dataKey="month" stroke="#cecece" />
        <Tooltip />
        <Line
          type="monotone"
          dataKey="amountEntry"
          name="Entradas"
          stroke={lineColorAmountEntry}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
        <Line
          type="monotone"
          dataKey="amountOutput"
          name="Saídas"
          stroke={lineColorAmountOutput}
          strokeWidth={5}
          dot={{ r: 5 }}
          activeDot={{ r: 8 }}
        />
      </LineChart>
    </ResponsiveContainer>
  </Container>
);
export default HistoryBox;
