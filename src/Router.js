import React from "react";
import { Route, Routes, createBrowserRouter } from "react-router-dom";
import { Home } from "./Components/Screens/Home";


export const Router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </div>
  );
};
