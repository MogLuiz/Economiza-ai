// Packages
import React from "react";

// Assets
import dollarImg from "../../assets/dollar.svg";
import arrowUpImg from "../../assets/arrow-up.svg";
import arrowDownImg from "../../assets/arrow-down.svg";

// Types
import { IWalletBoxProps } from "./types";

// Style
import { Container } from "./styles";

const WalletBox: React.FC<IWalletBoxProps> = ({
  title,
  amount,
  footerlabel,
  icon,
  color,
}) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>{amount}</h1>
      <small>{footerlabel}</small>
      <img src={dollarImg} alt={title} />
    </Container>
  );
};

export default WalletBox;
