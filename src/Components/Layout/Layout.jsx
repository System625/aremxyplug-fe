import React from "react";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../Navigation/NavBar";
import { Home } from "../Screens/Home";
import OurServices from "../OurServices/OurServices";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      {/* Contents */}
      {/* <Home /> */}
      <OurServices/>
      {/* Contents */}
      <Footer />
    </div>
  );
};
