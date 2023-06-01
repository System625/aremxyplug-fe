import React from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./Components/Screens/Home/Home";
import EmailMarketing from "./Components/Screens/emailMarketing/EmailMarketing";
import { AboutUs } from "./Components/Screens/AboutUs/AboutUs";
import { Solution } from "./Components/Screens/Solutions/Solution";
import GraphicDesign from "./Components/Screens/graphicDesign/GraphicDesign";
import OurServices from "./Components/Screens/OurServices/OurServices";
import PaymentServices from "./Components/Screens/PaymentServices/PaymentServices";
import Telecoms from "./Components/Screens/Telecoms/Telecoms";
import CardIssuing from "./Components/Screens/cardIssuing/cardIssuing";
import DigitalServices from "./Components/Screens/digitalServices/DigitalServices";
import VTU_DEV from "./Components/Screens/vtu_dev/VTU_DEV";
import ContentMarketing from "./Components/Screens/ContentMarketing/ContentMarketing";
export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/our-services" element={<OurServices />} />
        <Route path="/VTU_DEV" element={<VTU_DEV />} />
        <Route path="/CardIssuing" element={<CardIssuing />} />
        <Route path="/our-services/payment" element={<PaymentServices />} />
        <Route path="/our-services/telecoms" element={<Telecoms />} />
        <Route path="/DigitalServices" element={<DigitalServices />}/>
        <Route path="/EmailMarketing" element={<EmailMarketing />}/>
        <Route path="/GraphicDesign" element={<GraphicDesign />}/>
        <Route path="/about-us" element={<AboutUs/>} />
        <Route path="/solutions" element={<Solution/>} />
        <Route path="/content-marketing" element={<ContentMarketing />}/>
      </Routes>



    </div>
  );
};
