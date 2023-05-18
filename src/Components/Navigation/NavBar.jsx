import React from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <>
      {/* Mobile View */}
      <div className="flex justify-between p-[5%] md:hidden lg:hidden">
        <img
          className="w-[85px] h-[18px]"
          src="./Images/aremxy2.png"
          alt="/aremxyplug"
        />
        <img
          className="w-[30px] h-[17px]"
          src="./Images/aremxyNav.png"
          alt="/aremxyplug"
        />
      </div>

      {/* Tablet & Desktop View */}
      <div className="hidden md:flex justify-between p-[5%] mx-[2%] lg:p-[3%] lg:mx-[5%]">
        <img
          className="md:w-[94px] h-[20px] lg:w-[164px] lg:h-[30px]"
          src="./Images/aremxy2.png"
          alt="/aremxyplug"
        />
        <ul className="flex gap-[31px] items-center lg:gap-[55px]">
          <li className="text-[9px] lg:text-[16px]">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[9px] lg:text-[16px]">Services</li>
          <li className="text-[9px] lg:text-[16px]">About us</li>
          <li className="text-[9px] lg:text-[16px]">Pricing</li>
          <li className="text-[9px] lg:text-[16px]">Solutions</li>
          <li className="text-[9px] lg:text-[16px]">FAQs</li>
        </ul>
        <div className="flex justify-center bg-[#04177F] rounded-md text-[#ffffff] text-[7px] p-[1%] w-[14%] lg:w-[14.5%] lg:text-[13px]">
          Contact Us
        </div>
      </div>
    </>
  );
};
