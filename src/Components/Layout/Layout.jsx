import React from "react";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../Navigation/NavBar";
import { Router } from "../../Router";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      {/* Contents */}
     <Router/>
   
      {/* Contents */}
      <Footer />
    </div>
  );
};
