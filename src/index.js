import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import "semantic-ui-css/semantic.min.css";

import store from "./store/store";
import { AppRoutes } from "./routes";

ReactDOM.render(
  <Provider store={store}>
    <AppRoutes />
  </Provider>,
  document.getElementById("root")
);
