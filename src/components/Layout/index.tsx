// Packages
import React from "react";

// Components
import MainHeader from "../MainHeader";
import Aside from "../Aside";
import Content from "../Content";

// Style
import { Grid } from "./styles";

const Layout: React.FC = ({ children }) => {
  // -------------------------------------------------
  // Render
  // -------------------------------------------------
  return (
    <Grid>
      <MainHeader />
      <Aside />
      <Content>{children}</Content>
    </Grid>
  );
};

export default Layout;
