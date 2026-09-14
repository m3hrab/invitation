import React from "react";
import ReactDOM from "react-dom/client";
import { Invitation } from "./components/invitation";
import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Invitation />
  </React.StrictMode>,
);
