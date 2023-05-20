import React from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { Home } from "./Components/Screens/Home";
import OurServices from "./Components/OurServices/OurServices";


export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/our-services" element={<OurServices/>}/>
      </Routes>
    </div>
  );
};
