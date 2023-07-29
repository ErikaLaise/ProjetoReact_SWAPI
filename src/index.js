import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./pages/Home";
import Card from "./components/card/Card.js";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
