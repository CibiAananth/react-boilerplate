import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import history from "./history";

import App from "../App";

const AppRoutes = () => (
  <Router history={history}>
    <Switch>
      <Route exact path="/" component={App} />
    </Switch>
  </Router>
);

export default AppRoutes;
