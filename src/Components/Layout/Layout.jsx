import React from "react";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../Navigation/NavBar";
import { Home } from "../Screens/Home";

export const Layout = () => {
  return (
    <div>
      <NavBar />
      {/* Contents */}
      <Home />
      {/* Contents */}
      <Footer />
    </div>
  );
};
