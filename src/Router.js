import React from "react";
// <<<<<<< LandingPage
import { Route, Routes, } from "react-router-dom";
// import { Home } from "./Components/Screens/Home/Home";
=======
// import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { Home } from "./Components/Screens/Home";
import OurServices from "./Components/OurServices/OurServices";

// >>>>>>> dev

export const Router = () => {
  return (
    <div>
      <Routes>
// <<<<<<< LandingPage
        <Route path="/" element={<Home />} />
=======
       
        <Route path="/our-services" element={<OurServices/>}/>
// >>>>>>> dev
      </Routes>
    </div>
  );
};
