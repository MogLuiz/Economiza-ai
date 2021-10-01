// Packages
import React from "react";

// Assets
import dolarImg from "../../assets/dolar.svg";
import arrowUpImg from "../../assets/arrow-up.svg";
import arrowDownImg from "../../assets/arrow-down.svg";

// Utils
import CountUp from "react-countup";

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
  // Functions
  // -------------------------------------------------

  const iconSelected = () => {
    switch (icon) {
      case "dolar":
        return dolarImg;
      case "arrowUp":
        return arrowUpImg;
      case "arrowDown":
        return arrowDownImg;
      default:
        return undefined;
    }
  };

  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container color={color}>
      <span>{title}</span>
      <h1>
        <strong>R$ </strong>
        <CountUp
          end={amount}
          duration={1.5}
          separator="."
          decimal=","
          decimals={2}
        />
      </h1>
      <small>{footerlabel}</small>
      <img src={iconSelected()} alt={title} />
    </Container>
  );
};

export default WalletBox;
