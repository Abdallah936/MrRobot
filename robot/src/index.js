import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./GlobalStyles";
import App from "./App";

import { Provider } from "react-redux";
import { store } from "./store/reduxStore";
import "./index.css";

let isAuthorized = false;

ReactDOM.render(
  <>
    <Provider store={store}>
      <App isAuthorized={isAuthorized} />

      <GlobalStyles />
      <App />
    </Provider>
  </>,
  document.getElementById("root")
);
