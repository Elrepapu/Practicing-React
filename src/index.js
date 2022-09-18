import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from ".//components/login/Login";
import Skele from "./components/skeleton/Skele";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode basename="Practicing-React/">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/skeleton" element={<Skele />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
