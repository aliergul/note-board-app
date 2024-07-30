import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "../src/styles/main.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n/i18n";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <I18nextProvider i18n={i18n}>
    <App />
  </I18nextProvider>
);
