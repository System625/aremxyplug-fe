import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { ContextProvider } from "../../Context";
import DarkModeToggle from "../DarkModeToggle";

export const TopBar = () => {
  const { setToggleSideBar } = useContext(ContextProvider);
  const [logout, setLogout ] = useState(false);

  // const handler = () => {
  //   setLogout((prev) => !prev);
  // };
  return (
    <div className="sticky top-0 z-[99px] bg-white mt-[14px] flex gap-[6%] justify-center md:gap-[10%] md:border-b-[1px] lg:mt-[18px] lg:border-b-[#0003] lg:gap-[18%]">
      <img
        onClick={() => setToggleSideBar(true)}
        className="cursor-pointer w-[21px] h-[21px] md:h-[30.9px] md:w-[30.9px] lg:h-[52px] lg:w-[52px]"
        src="./Images/dashboardImages/menularge.png"
        alt="/harmburger"
      />
      <div className="flex items-center gap-[45px] md:gap-[90px] lg:gap-[152px] border-b-[0.3px] md:border-b-0 border-[#0003] pb-[2%] lg:pb-[1.2%]">
        <div className="cursor-pointer flex justify-between items-center px-[2%] w-[102px] h-[17px] rounded-[3.4px] border-[0.5px] border-[#0003] md:h-[33.8px] md:w-[202px] lg:border-[1.5px] lg:border-[#0003] lg:rounded-[10px] lg:w-[358px] lg:h-[60px]">
          <div className="flex justify-center items-center gap-[3px] lg:gap-[7px]">
            <img
              className="w-[7px] h-[7px] md:h-[13.75px] md:w-[13.75] lg:h-[24px] lg:w-[24px]"
              src="./Images/dashboardImages/largeprofile.png"
              alt="/"
            />
            <p className="text-[5px] md:text-[9px] lg:text-[16px] lg:font-extrabold">
              Switch Account
            </p>
          </div>
          <img
            className="h-[7px] w-[7px] md:w-[13.7px] md:h-[13.7px] lg:h-[22px] lg:w-[22px]"
            src="./Images/dashboardImages/arrow-downlarge.png"
            alt="/"
          />
        </div>
        <p className="text-[5px] md:text-[9.167px] lg:text-[18px]">Dashboard</p>
        <div className="flex justify-center items-center gap-[5px] md:gap-[10px]">
          <div className="cursor-pointer flex text-[4px] md:text-[8.8px] lg:text-[12px] lg:font-extrabold gap-[3px] md:gap-[6px]">
            <p>Light</p>
            <DarkModeToggle />
            <p>Dark</p>
          </div>
          <img
            className="cursor-pointer w-[8px] h-[8px] md:w-[16px] md:h-[16px] lg:w-[28px] lg:h-[28px]"
            src="./Images/dashboardImages/notificationlarge.png"
            alt="notification"
          />
          <img onClick={()=>setLogout((prev)=>!prev)}
            className="cursor-pointer w-[20px] h-[10px] md:w-[40px] md:h-[20px] rounded-[2.3px] lg:w-[65px] lg:h-[34px]"
            src="./Images/dashboardImages/largedoor.png"
            alt="notification"
          />
        </div>
        {logout && (
          <ul className="border drop-shadow-xl absolute top-[95%] right-[7%]  ml-[12px] mt-[px] rounded-[3px]  bg-[#ffffff] w-[75px] md:top-[95%] md:w-[114px] lg:rounded-[6px] lg:right-[5%] lg:top-[95%] lg:w-[200px] lg:ml-[19px]">
            <li className="cursor-pointer hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] border-[#0003] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
              My Profile
            </li>
            <li className="cursor-pointer hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium border-b-[0.22px] border-[#0003] md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
              Contact Support
            </li>
            <Link to="/Login"><li className="cursor-pointer hover:underline text-[#000] pt-1 pb-1 pl-1 text-[5px] font-medium md:border-b-[0.335px] md:text-[8px] lg:pt-[6%] lg:pb-[6%] lg:pl-[6%] lg:border-b-[0.6px] lg:text-[14px] ">
              Logout
            </li></Link>
          </ul>
        )}
      </div>
    </div>
  );
};
