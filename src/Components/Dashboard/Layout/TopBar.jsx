import React from "react";
import DarkModeToggle from "../Dark&LightModeToggle/DarkModeToggle";
import { lightTheme } from '../../Theme';
import { darkTheme } from '../../Theme';

export const TopBar = () => {
  return (
    <div className="flex justify-between items-center mx-[5%]">
      <img
        className="w-[21px] h-[21px] md:h-[] md:w-[] lg:h-[] lg:w-[]"
        src="./Images/dashboardImages/menu2.png"
        alt="/harmburger"
      />
      <div className="flex justify-between items-center px-[2%] w-[102px] h-[17px] rounded-[3.4px] border border-[#0003] ">
        <div className="flex justify-center items-center gap-[3px]">
          <img className="w-[7px] h-[7px] md:h-[] md:w-[] lg:h-[] lg:w-[]" src="./Images/dashboardImages/profile2.png" alt="/" />
          <p className="text-[5px] md:text-[] lg:text-[]">Switch Account</p>
        </div>
        <img className="h-[7px] w-[7px] md:w-[] md:h-[] lg:h-[] lg:w-[]" src="./Images/dashboardImages/arrow-down.png" alt="/" />
      </div>
      <p className="text-[5px] md:text-[] lg:text-[]">Dashboard</p>
      <div>
        <div className="flex text-[4px]">
          <p>Light</p>
          <DarkModeToggle/>
          {/* <div onClick={()=>if}>toggle</div> */}
          <p>Dark</p>
        </div>
      </div>
    </div>
  );
};
