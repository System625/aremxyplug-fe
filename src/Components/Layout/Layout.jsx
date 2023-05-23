import React from "react";
import { Router } from "../../Router";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../Navigation/NavBar";


export const Layout = () => {
  return (
    <div>
      <NavBar/>
      {/* Contents */}
      <Router />
      {/* Contents */}
      <Footer />
    </div>
  );
};
