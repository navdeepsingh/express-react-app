import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const domNode = document.getElementById("root");
console.log(domNode);
const root = ReactDOM.createRoot(domNode);
root.render(<App />);
