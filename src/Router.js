import React from "react";
import { Route, Routes } from "react-router-dom";
import OurServices from "./Components/OurServices/OurServices";
import Telecoms from "./Components/Telecoms/Telecoms";
import { Home } from "./Components/Screens/Home/Home";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/our-services/telecoms" element={<Telecoms/>} />
      </Routes>
    </div>
  );
};
