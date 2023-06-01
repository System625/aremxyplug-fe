import React from "react";
import { Router } from "../../Router";
import { Footer } from "./Footer/Footer";
import { NavBar } from "./Navigation/NavBar";
import ScrollToTop from "../scroll/scrollToTop";


export const Layout = () => {
  return (
    <div>
      <NavBar/>
      <ScrollToTop/>
      {/* Contents */}
      <Router />
      {/* Contents */}
      <Footer />
    </div>
  );
};
