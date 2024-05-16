import React from "react";
import ReactDOM from "react-dom/client";

import { DollarExchangeProvider } from "./context/DollarExchangeProvider";
import { Calculator } from "./components/Calculator";
import { DollarExchangeRate } from "./components/DollarExchangeRate";

import "./styles.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <DollarExchangeProvider>
      <div className="container">
        <h1 className="text-center">Calculadora de Impuestos</h1>
        <hr />
        <div className="row">
          <div className="d-flex justify-content-center">
            <Calculator />
            <DollarExchangeRate />
          </div>
        </div>
      </div>
    </DollarExchangeProvider>
  </React.StrictMode>
);
