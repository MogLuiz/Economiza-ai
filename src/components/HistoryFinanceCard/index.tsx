import React from "react";

import { Container } from "./styles";

interface IHistoryFinanceCardProps {
  cardColor: string;
  tagColor: string;
  title: string;
  subtitle: string;
  amount: string;
}

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
  cardColor,
  tagColor,
  title,
  subtitle,
  amount,
}) => {
  return <Container></Container>;
};

export default HistoryFinanceCard;
