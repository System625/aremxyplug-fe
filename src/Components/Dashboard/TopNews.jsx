import React from "react";
// import { BsArrowUp } from "react-icons/bs";
// import { BsArrowDown } from "react-icons/bs";

export const TopNews = () => {
  return (
    <div>
      <div className="flex mt-[7%] items-center gap-[5px]">
        <p className="text-[13px] font-extrabold  md:text-[17px] lg:text-[21px]">
          Top News
        </p>
        <img
          className="w-[8px] h-[8px] lg:h-[19.8px] lg:w-[19.8px]"
          src="Images/dashboardImages/arrowright.png"
          alt="arrow"
        />
      </div>
      {/* <div>
        <p className="text-[10px]">The Telecom company growth this year</p>
        <BsArrowUp />
      </div> */}
    </div>
  );
};
