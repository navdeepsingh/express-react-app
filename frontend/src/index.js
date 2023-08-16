import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { Provider } from "react-redux";
import { store } from "./store/index.js";

const domNode = document.getElementById("root");
const root = ReactDOM.createRoot(domNode);

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
