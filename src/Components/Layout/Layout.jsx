import React from "react";
import { Router } from "../../Router";
import { Footer } from "../Footer/Footer";
import { NavBar } from "../Navigation/NavBar";
// <<<<<<< LandingPage
// import { Home } from "../Screens/Home/Home";
=======
// import { Home } from "../Screens/Home";
// import OurServices from "../OurServices/OurServices";
// >>>>>>> dev

export const Layout = () => {
  return (
    <div>
      <NavBar />
      {/* Contents */}
// <<<<<<< LandingPage
      <Router/>
=======
      {/* <Home /> */}
//       <OurServices/>
// >>>>>>> dev
      {/* Contents */}
      <Footer />
    </div>
  );
};
