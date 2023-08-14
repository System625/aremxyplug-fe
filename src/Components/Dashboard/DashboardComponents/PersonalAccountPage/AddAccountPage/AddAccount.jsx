import React from "react";
import { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../../Context";
import { DashBoardLayout } from "../../../Layout/DashBoardLayout";
import { BusinessAccountForm } from "./BusinessAccountForm";
import { PersonalAccountForm } from "./PersonalAccountForm";

export const AddAccount = () => {
  const { handleActive, activeButton } = useContext(ContextProvider);
  const [personalAcc, setPersonalAcc] = useState(true);
  const [businessAcc, setBusinessAcc] = useState(false);

  return (
    <DashBoardLayout>
      <div>
        <img
          className="w-[100%] h-[80px] md:h-[180px] lg:h-[230px]"
          src="/Images/addAccountImages/add-new-account.png"
          alt="/"
        />
        <div className="flex text-[#7c7c7c] text-[10px] leading-[130%] items-center my-[10%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
          <p>Select Transfer type </p>
          <img
            className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
            src="./Images/Dashboardimages/arrowright.png"
            alt="/"
          />
        </div>
        <div className="flex text-[9px] gap-[15px] md:text-[14px] lg:text-[20px]">
          <div
            onClick={() => {
              handleActive(0);
              setBusinessAcc(false);
              setPersonalAcc(true);
            }}
            className={`${
              activeButton[0]
                ? "bg-[#E2F3FF] rounded-[2px] border-b-[2px] border-b-[#04177f] h-[16px] flex items-center p-[5px] md:h-[35px] lg:rounded-[6px] lg:border-b-[4px] lg:h-[50px]"
                : ""
            } w-[95.667px] rounded-[2px] md:w-[180px] md:rounded-[3px] md:justify-center md:items-center flex lg:w-[248px] lg:rounded-[6px]`}
          >
            Personal Accounts
          </div>
          <div
            onClick={() => {
              handleActive(1);
              setPersonalAcc(false);
              setBusinessAcc(true);
            }}
            className={`${
              activeButton[1]
                ? "bg-[#E2F3FF] rounded-[2px] border-b-[2px] border-b-[#04177f] h-[16px] flex items-center p-[5px]  md:h-[35px] lg:rounded-[6px] lg:border-b-[4px] lg:h-[50px]"
                : ""
            } w-[95.667px] rounded-[2px] md:w-[180px] md:rounded-[3px]  md:justify-center md:items-center flex lg:w-[248px] lg:rounded-[6px]`}
          >
            Business Accounts
          </div>
        </div>
        <hr />

        {personalAcc && <PersonalAccountForm />}
        {businessAcc && <BusinessAccountForm />}
      </div>
    </DashBoardLayout>
  );
};
