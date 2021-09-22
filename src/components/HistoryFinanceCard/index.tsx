// Packages
import React from "react";

// Style
import { Container, Tag } from "./styles";

// Types
import { IHistoryFinanceCardProps } from "./types";

const HistoryFinanceCard: React.FC<IHistoryFinanceCardProps> = ({
  tagColor,
  title,
  subtitle,
  amount,
}) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <Tag color={tagColor} />
      <div>
        <span>{title}</span>
        <small>{subtitle}</small>
      </div>
      <h3>{amount}</h3>
    </Container>
  );
};

export default HistoryFinanceCard;
