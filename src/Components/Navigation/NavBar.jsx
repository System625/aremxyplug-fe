import React, { useState } from "react";
import { Link } from "react-router-dom";

export const NavBar = () => {
  const [navOpen, setNavOpen] = useState(false);
  return (
    //  bg-[#ffffff4a]
    <>
      {/* Mobile View */}
      <div
        className="bg-[#ffffff] sticky top-0 flex justify-between p-[5%] md:hidden lg:hidden"
        style={{
          zIndex: 999,
        }}
      >
        <Link to="/">
          {" "}
          <img
            className="w-[85px] h-[18px]"
            src="./Images/aremxy2.png"
            alt="/aremxyplug"
          />
        </Link>
        <img
          onClick={() => setNavOpen((prev) => !prev)}
          className="w-[30px] h-[17px]"
          src="./Images/aremxyNav.png"
          alt="/aremxyplug"
        />
        {/* <div>XXX</div> */}
      </div>
      {navOpen && (
        <div className=" bg-[#04177f] fixed z-[50] left-[60%] text-[12px] text-center text-[#ffffff] p-6 w-[35%]">
          <ul className="flex flex-col gap-[20px]">
            <li onClick={() => setNavOpen((prev) => !prev)}>
              <Link to="/">Home</Link>
            </li>
            <li onClick={() => setNavOpen((prev) => !prev)}>
              <Link to="/our-services">Services</Link>
            </li>

            <li onClick={() => setNavOpen((prev) => !prev)}>
              <Link to="/about-us">About us</Link>
            </li>
            <li onClick={() => setNavOpen((prev) => !prev)}>
              <Link>Pricing</Link>
            </li>
            <li onClick={() => setNavOpen((prev) => !prev)}>
              <Link>Solutions</Link>
            </li>
            <li onClick={() => setNavOpen((prev) => !prev)}>
              <Link>FAQs</Link>
            </li>
            <li
              onClick={() => setNavOpen((prev) => !prev)}
              className="bg-[#ffffff] text-[#04177f] text-[8px] p-2 rounded-md"
            >
              <Link>Contact Us</Link>
            </li>
          </ul>
        </div>
      )}

      {/* Tablet & Desktop View */}
      <div className="z-[55] sticky top-0 bg-[white] hidden md:flex justify-between p-[3%] px-[6%] lg:flex lg:justify-between lg:p-[2%] lg:px-[8%] ">
        <Link to="/">
          <img
            className="md:w-[94px] h-[20px] lg:w-[164px] lg:h-[30px]"
            src="./Images/aremxy2.png"
            alt="/aremxyplug"
          />
        </Link>
        <ul className="flex gap-[31px] items-center lg:gap-[55px]">
          <li className="text-[9px] lg:text-[16px]">
            <Link to="/">Home</Link>
          </li>
          <li className="text-[9px] lg:text-[16px]">
            <Link to="/our-services">Services</Link>
          </li>
          <li className="text-[9px] lg:text-[16px]">
            <Link to="/about-us">About us</Link>
          </li>
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
