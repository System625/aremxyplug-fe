import React from "react";
import { Route, Routes } from "react-router-dom";
import CardIssuing from "./Components/Screens/cardIssuing/cardIssuing";
import { Home } from "./Components/Screens/Home";
import DigitalServices from "./Components/Screens/digitalServices/DigitalServices";


export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/CardIssuing" element={<CardIssuing/>} />
        <Route path="/DigitalServices" element={<DigitalServices/>} />
      </Routes>
    </div>
  );
};
