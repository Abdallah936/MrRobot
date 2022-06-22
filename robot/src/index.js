import "./index.css";
import React from "react";
import ReactDOM from "react-dom";
import { GlobalStyles } from "./GlobalStyles";
import App from "./App";


ReactDOM.render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById("root")
);
