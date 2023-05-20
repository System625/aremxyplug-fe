import React from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { Home } from "./Components/Screens/Home";
import Telecoms from "./Components/Telecoms/Telecoms";


export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/our-services/telecoms" element={<Telecoms/>} />
      </Routes>
    </div>
  );
};
