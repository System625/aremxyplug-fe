import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Screens/Home/Home";
import OurServices from "./Components/OurServices/OurServices";
import PaymentServices from "./Components/PaymentServices/PaymentServices";
import Telecoms from "./Components/Telecoms/Telecoms";
import CardIssuing from "./Components/Screens/cardIssuing/cardIssuing";
import DigitalServices from "./Components/Screens/digitalServices/DigitalServices";
import VTU_DEV from "./Components/Screens/vtu_dev/VTU_DEV";

export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/CardIssuing" element={<CardIssuing/>} />
        <Route path="/DigitalServices" element={<DigitalServices/>} />
        <Route path="/VTU_DEV" element={<VTU_DEV/>} />
        <Route path="/CardIssuing" element={<CardIssuing />} />
        <Route path="/DigitalServices" element={<DigitalServices />} />
        <Route path="/our-services/payment" element={<PaymentServices />} />
        <Route path="/our-services/telecoms" element={<Telecoms />} />
        <Route path="/our-services/card-issuing" element={<CardIssuing />} />
        <Route
          path="/our-services/digital-services"
          element={<DigitalServices />}
        />
      </Routes>
    </div>
  );
};
