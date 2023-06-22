import React from "react";
import { Link } from "react-router-dom";

export const VerificationSuccessful = () => {
  return (
    <div className="justify-between text-center border border-[#58DA8F] p-4 flex flex-col gap-[5px] rounded-[8.6px] h-[172px] w-[199px] bg-white md:absolute md:top-[20%] md:left-[50%] lg:h-[301px] lg:w-[348px] lg:rounded-[15px]">
      <div>
        <h1 className="text-[8px] lg:text-[14px]">Verification Successful</h1>
        <p className="text-[#737373] text-[6px] lg:text-[10px]">
          Sign in to your account to continue operations!
        </p>
      </div>
      <Link to="/Login">
        <div className="bg-[#04177f] cursor-pointer mt-[5%] mx-auto w-[64px] h-[21px] flex justify-center items-center text-[#ffffff] text-[7px] rounded-[4.5px] lg:rounded-[8px] md:w-[95px] md:h-[26px] md:p-[2%] lg:w-[113px] lg:h-[38px] lg:text-[13px]">
          Continue
        </div>
      </Link>
    </div>
  );
};
