import React from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { Home } from "./Components/Screens/Home";
import PaymentServices from "./Components/PaymentServices/PaymentServices";


export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/our-services/payment" element={<PaymentServices/>} />
      </Routes>
    </div>
  );
};
