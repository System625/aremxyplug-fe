import React from "react";
import { DashBoardLayout } from "../../Dashboard/Layout/DashBoardLayout";
import { TopBar } from "../../Dashboard/Layout/TopBar";
import { SideBar } from "../../Dashboard/Layout/SideBar";
import { ContextProvider } from "../../Context";
import { useContext } from "react";
import { useEffect } from "react";
import { primaryColor } from "../cardIssuing/cardIssuing";
function TopUpScreen() {
  const { setHideNavbar, toggleSideBar, isDarkMode } =
    useContext(ContextProvider);

  const setNav = () => {
    setHideNavbar(true);
  };

  useEffect(() => {
    setNav();
    return () => {
      setHideNavbar(false);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* ==============TOP BAR========== */}
      <TopBar />

      <div className="w-[100%] ">
        {/* ============SIDE BAR========= */}
        {toggleSideBar && (
          <div className="absolute top-0 left-0 z-50">
            <SideBar />
          </div>
        )}
        <div
          className={`${
            toggleSideBar ? "lg:w-[73.5%] lg:float-right" : ""
          } w-[] mx-[5%] mt-[8%] lg:mt-[3%] `}
        >

          {/* TOP BANNER STARTS HERE */}
          <div>
            <img
              className="w-[100%] h-[75px] md:h-[120px] lg:h-[238px]"
              src="./Images/top_up/topup.png"
              alt="Welcome to AremxyPlug"
            />
          </div>
  {/* TOP BANNER ENDS HERE */}


  {/* FIAT AND CRYPTO BUTTON STARTS HERE */}
          <div className="flex py-[20px] md:py-[28.65px] lg:py-[50px] ">
            <div
              className="inline-flex lg:rounded-tr-[12px] lg:rounded-br-[12px] lg:rounded-bl-[12px] lg:px-[40px] lg:py-[20px] md:px-[22.92px] md:py-[11.46px]
              md:rounded-tr-[6.875px] md:rounded-br-[6.875px] md:rounded-bl-[6.875px] px-[16.34px] py-[8.17px] ounded-tr-[4.902px] rounded-br-[4.902px] rounded-bl-[4.902px]"
              style={{
                backgroundColor: primaryColor,
              }}
            >
              <p className="text-[#fff]">Fiat Topup</p>
            </div>

            <div
              className="inline-flex lg:rounded-tr-[12px] lg:rounded-br-[12px] lg:rounded-bl-[12px] lg:px-[40px] lg:py-[20px] lg:ml-[100px] md:ml-[57.28px] md:px-[22.92px] md:py-[11.46px]
              md:rounded-tr-[6.875px] md:rounded-br-[6.875px] md:rounded-bl-[6.875px] ml-[40.85px] px-[16.34px] py-[8.17px] rounded-tr-[4.902px] rounded-br-[4.902px] rounded-bl-[4.902px]"
              style={{
                backgroundColor: "rgba(146, 171, 254, 0.18)",
              }}
            >
              <p className="text-[#000]">Crypto Topup</p>
            </div>
          </div>
            {/* FIAT AND CRYPTO BUTTON ENDS HERE */}


            <div className="flex items-center">
              <p className="text-[#7C7C7C] lg:text-[16px] md:text-[9.167px] text-[7px]">Funding Methods</p>
              <img src="Images/top_up/arrowR.png" alt=" "  className="ml-[1%] w-[12px] h-[12px] lg:w-[24px] lg:h-[24px] md:w-[13.75px] md:h-[13.75px]"/>
            </div>
        </div>
      </div>
    </div>
  );
}

export default TopUpScreen;
