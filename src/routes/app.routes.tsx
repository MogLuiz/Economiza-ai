import React from "react";
import { Switch, Route } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
import List from "../pages/List";

const AppRoutes: React.FC = () => (
  <Switch>
    <Route path="/dashboard" exact component={Dashboard} />
    <Route path="/list/:type" exact component={List} />
  </Switch>
);

export default AppRoutes;
