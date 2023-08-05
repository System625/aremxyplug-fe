import React from "react";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import { TransferRecord } from "./TransferRecord";

export const ToMyAccountPage = () => {
  return (
    <DashBoardLayout>
      <div>
        <img
          className="w-[100%] h-[80px] md:h-[180px] lg:h-[230px]"
          src="/Images/dashboardImages/ToMyAccount.png"
          alt="/"
        />

        <div className="flex gap-[5%] my-[6%] items-center">
          <div className="flex border w-[30%] h-[20px] rounded-[5px]">
            <input
              className="text-[9px] w-[80px] "
              type="search"
              placeholder="Search Account"
            />
            <img
              className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
              src="/Images/dashboardImages/search-status.png"
              alt="/"
            />
          </div>

          <div className="flex items-center gap-[4px] bg-[#04177f] text-white text-[8px] px-[2%] py-[2%] w-[30%] rounded-[5px] font-extrabold">
            <p>Add New Account</p>
            <img
              className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
              src="./Images/dashboardImages/transfer.png"
              alt="topup"
            />
          </div>
          <div className="flex items-center gap-[5px] bg-[#04177f] text-white text-[8px] px-[2%]  py-[2%] w-[30%] rounded-[5px] font-extrabold">
            <p>Refresh Account</p>
            <img
              className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
              src="./Images/dashboardImages/transfer.png"
              alt="topup"
            />
          </div>
        </div>

        <div className="flex text-[#7c7c7c] text-[10px] leading-[130%] items-center my-[10%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
          <p>Select Account Type </p>
          <img
            className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
            src="./Images/Dashboardimages/arrowright.png"
            alt="/"
          />
        </div>

        <TransferRecord/>
      </div>
    </DashBoardLayout>
  );
};

