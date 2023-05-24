import React from "react";
import { Route, Routes } from "react-router-dom";
import OurServices from "./Components/OurServices/OurServices";
import { Home } from "./Components/Screens/Home/Home";
import CardIssuing from "./Components/Screens/cardIssuing/cardIssuing";
import DigitalServices from "./Components/Screens/digitalServices/DigitalServices";
import VTU_DEV from "./Components/Screens/vtu_dev/VTU_DEV";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />

        <Route path="/our-services" element={<OurServices />} />
        <Route path="/CardIssuing" element={<CardIssuing/>} />
        <Route path="/DigitalServices" element={<DigitalServices/>} />
        <Route path="/VTU_DEV" element={<VTU_DEV/>} />
      </Routes>
    </div>
  );
};
