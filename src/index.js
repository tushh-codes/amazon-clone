import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { Stateprovider } from "./components/StateProvider";
import reducer, { initialState } from "./components/Reducer";

ReactDOM.render(
  <Stateprovider intialState={initialState} reducer={reducer}>
    <App />
  </Stateprovider>,
  document.getElementById("root")
);
