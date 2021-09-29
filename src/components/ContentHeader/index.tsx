// Packages
import React from "react";

// Style
import { Container, TitleContainer, Controllers } from "./styles";

// Types
import { IContentHeaderProps } from "./types";

const ContentHeader: React.FC<IContentHeaderProps> = ({
  title,
  lineColor,
  children,
}) => (
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  <Container>
    <TitleContainer lineColor={lineColor}>
      <h1>{title}</h1>
    </TitleContainer>

    <Controllers>{children}</Controllers>
  </Container>
);

export default ContentHeader;
