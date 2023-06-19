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
import { BusinessDev } from "./Components/Screens/BusinessDev/busdev";
import ProductDesign from "./Components/Screens/productDesign/ProductDesign";
import SEOMarketing from "./Components/Screens/SEOMarketing/SEOMarketing";
import ContentMarketing from "./Components/Screens/ContentMarketing/ContentMarketing";
import SocialMediaMarketing from "./Components/Screens/SocialMediaMarketing/SocialMediaMarketing";
import { Pricing } from "./Components/Screens/pricings/Pricing";
import { Faq } from "./Components/Screens/FAQs/Faq";
import ContactUs from "./Components/Screens/contactUs/ContactUs";
import OwnVTU from "./Components/Screens/ownVTU/OwnVTU";
import TermsAndCondition from "./Components/Screens/TermsAndCondition/TermsAndCondition"
import PrivacyPolicy from "./Components/Screens/PrivacyPolicy/PrivacyPolicy";
import Team from './Components/Screens/Team/Team';
import { SignUp } from "./Components/Screens/CustomersPages/SignUp/SignUp";
import Login from "./Components/Screens/CustomersPages/login/Login";
import PasswordReset from "./Components/Screens/CustomersPages/Password/PasswordReset"

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
        <Route path="/DigitalServices" element={<DigitalServices />} />
        <Route path="/EmailMarketing" element={<EmailMarketing />} />
        <Route path="/GraphicDesign" element={<GraphicDesign />} />
        <Route path="/ProductDesign" element={<ProductDesign />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/solutions" element={<Solution />} />
        <Route path="/seo-marketing" element={<SEOMarketing />} />
        <Route path="/content-marketing" element={<ContentMarketing />} />
        <Route path="/social-media-marketing" element={<SocialMediaMarketing />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/businessDev" element={<BusinessDev />} />
        <Route path="/ContactUs" element={<ContactUs />} />
        <Route path="/OwnVTU" element={<OwnVTU />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<Faq />} />
        <Route path="/terms-and-condition" element={<TermsAndCondition />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/team" element={<Team />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/passwordReset" element={<PasswordReset />} />
      </Routes>
    </div>
  );
};
