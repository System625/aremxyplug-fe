import React from "react";
import { Router } from "../../Router";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../Navigation/NavBar";
// import { Home } from "../Screens/Home/Home";

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
