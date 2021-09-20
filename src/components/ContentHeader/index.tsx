// Packages
import React from "react";

// Style
import { Container, TitleContainer, Controllers } from "./styles";

// Types
interface IContentHeaderProps {
  title: string;
  lineColor: string;
  children: React.ReactNode;
}

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  lineColor,
  children,
}) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Container>
      <TitleContainer lineColor={lineColor}>
        <h1>{title}</h1>
      </TitleContainer>

      <Controllers>{children}</Controllers>
    </Container>
  );
};

export default ContentHeader;
