import React from "react";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../Navigation/NavBar";
import { Home } from "../Screens/Home";
import Telecoms from "../Telecoms/Telecoms";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      {/* Contents */}
      {/* <Home /> */}
      <Telecoms/>
      {/* Contents */}
      <Footer />
    </div>
  );
};
