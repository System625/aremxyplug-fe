import React from "react";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../Navigation/NavBar";
import { Home } from "../Screens/Home";
import PaymentServices from "../PaymentServices/PaymentServices";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      <PaymentServices/>
      {/* Contents */}
      {/* <Home /> */}
      {/* Contents */}
      <Footer />
    </div>
  );
};
