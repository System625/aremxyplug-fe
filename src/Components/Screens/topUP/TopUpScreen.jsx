import React, { useState } from "react";

import { TopBar } from "../../Dashboard/Layout/TopBar";
import { SideBar } from "../../Dashboard/Layout/SideBar";
import { ContextProvider } from "../../Context";
import { useContext } from "react";
import { useEffect } from "react";
import { primaryColor } from "../cardIssuing/cardIssuing";
import "./topUp.css";
import WalletModal from "../../Wallet/WalletModal";

// FUNDING METHODS DATA STARTS HERE
const data = [
  {
    image: "./Images/top_up/user.png",
    title: "Virtual Accounts",
    content: "Fund your wallet using your dedicated virtual accounts.",
  },
  {
    image: "./Images/top_up/card-tick.png",
    title: "Card Payments",
    content: "Fund your wallet using your ATM / Bank card.",
  },
  {
    image: "./Images/top_up/bank.png",
    title: "Bank USSD",
    content: "Fund your wallet using other banks USSD code from your mobile.",
  },
  {
    image: "./Images/top_up/money-tick.png",
    title: "Request Money",
    content: "Request for money from any AremxyPlug user to fund your wallet.",
  },
  {
    image: "./Images/top_up/scan-barcode.png",
    title: "Payment Link",
    content: "Copy / create your payment link to receive money to your wallet.",
  },
];
// FUNDING METHODS DATA ENDS HERE

function TopUpScreen() {
  const { setHideNavbar, toggleSideBar} =
    useContext(ContextProvider);

  const [paymentType, setPaymentType] = useState("fiat");
  const [showCryptoModal1, setShowCryptoModal1] = useState(false);

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
            {paymentType === "fiat" ? (
              <div
                className="cursor-pointer inline-flex lg:rounded-tr-[12px] lg:rounded-br-[12px] lg:rounded-bl-[12px] lg:px-[40px] lg:py-[20px] md:px-[22.92px] md:py-[11.46px]
              md:rounded-tr-[6.875px] md:rounded-br-[6.875px] md:rounded-bl-[6.875px] px-[16.34px] py-[8.17px] ounded-tr-[4.902px] rounded-br-[4.902px] rounded-bl-[4.902px]"
                style={{
                  backgroundColor: primaryColor,
                }}
              >
                <p className="text-[#fff]">Fiat Topup</p>
              </div>
            ) : (
              <div
                onClick={() => setPaymentType("fiat")}
                className="cursor-pointer inline-flex lg:rounded-tr-[12px] lg:rounded-br-[12px] lg:rounded-bl-[12px] lg:px-[40px] lg:py-[20px] md:px-[22.92px] md:py-[11.46px]
              md:rounded-tr-[6.875px] md:rounded-br-[6.875px] md:rounded-bl-[6.875px] px-[16.34px] py-[8.17px] ounded-tr-[4.902px] rounded-br-[4.902px] rounded-bl-[4.902px]"
                style={{
                  backgroundColor: "rgba(146, 171, 254, 0.18)",
                }}
              >
                <p className="text-[#000]">Fiat Topup</p>
              </div>
            )}

            {paymentType === "crypto" ? (
              <div
                className="cursor-pointer inline-flex lg:rounded-tr-[12px] lg:rounded-br-[12px] lg:rounded-bl-[12px] lg:px-[40px] lg:py-[20px] lg:ml-[100px] md:ml-[57.28px] md:px-[22.92px] md:py-[11.46px]
  md:rounded-tr-[6.875px] md:rounded-br-[6.875px] md:rounded-bl-[6.875px] ml-[40.85px] px-[16.34px] py-[8.17px] rounded-tr-[4.902px] rounded-br-[4.902px] rounded-bl-[4.902px]"
                style={{
                  backgroundColor: primaryColor,
                }}
              >
                <p className="text-[#fff]">Crypto Topup</p>
              </div>
            ) : (
              <div
                onClick={() => {
                  setPaymentType("crypto");
                  setShowCryptoModal1((prev) => !prev);
                }}
                className="cursor-pointer inline-flex lg:rounded-tr-[12px] lg:rounded-br-[12px] lg:rounded-bl-[12px] lg:px-[40px] lg:py-[20px] lg:ml-[100px] md:ml-[57.28px] md:px-[22.92px] md:py-[11.46px]
md:rounded-tr-[6.875px] md:rounded-br-[6.875px] md:rounded-bl-[6.875px] ml-[40.85px] px-[16.34px] py-[8.17px] rounded-tr-[4.902px] rounded-br-[4.902px] rounded-bl-[4.902px]"
                style={{
                  backgroundColor: "rgba(146, 171, 254, 0.18)",
                }}
              >
                <p className="text-[#000]">Crypto Topup</p>
              </div>
            )}
          </div>
          {/* FIAT AND CRYPTO BUTTON ENDS HERE */}

          <div className="flex items-center">
            <p className="text-[#7C7C7C] lg:text-[16px] md:text-[9.167px] text-[7px]">
              Funding Methods
            </p>
            <img
              src="Images/top_up/arrowR.png"
              alt=" "
              className="ml-[1%] w-[12px] h-[12px] lg:w-[24px] lg:h-[24px] md:w-[13.75px] md:h-[13.75px]"
            />
          </div>

          {/* FUNDING METHODS STARTS HERE */}
          {data.map((data, index) => (
            <div key={index.toString()} className="Style1 " onClick={() => console.log(index)}>
              <div className="flex items-center">
                <img src={data.image} alt="." className="Img1" />
                <div className="lg:ml-[10px] md:ml-[7px] ml-[4px]">
                  <p className="Text1 ">{data.title}</p>
                  <p className="Text2"> {data.content}</p>
                </div>
              </div>
              <img
                src="Images/top_up/arrowR.png"
                alt=" "
                className="ml-[1%] w-[12px] h-[12px] lg:w-[24px] lg:h-[24px] md:w-[13.75px] md:h-[13.75px]"
              />
            </div>
          ))}
          {/* FUNDING METHODS STARTS HERE */}

          <div className="flex justify-center items-end lg:mb-[20px] md:mb-[10px] mb-[10px] mt-[10px] md:mt-[unset] md:h-[500px]">
            <div className="inline-flex">
              <p className="textHelp">You need help?</p>
              <div className="contactBtn">
                <p className="textContact">Contact Us</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {showCryptoModal1 && (
        <WalletModal>
          <div className="w-full h-full">
            <h2 className="text-center text-[10px] leading-[15px] mb-[10px] font-semibold md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px] text-primary">
              This Feature is Currently Not Available.
            </h2>
            <div className="flex justify-center items-center mt-[16%] lg:mt-[20%]">
              <div className="w-[110px] h-[110px] lg:w-[220px] lg:h-[220px]">
                <img src="./Images/wallet/comingSoon.png" alt="" />
              </div>
            </div>
            <div className="flex gap-[45px] absolute bottom-[22px] justify-center items-center md:gap-[20px] lg:w-[93%] lg:gap-[30px]">
              <button
                className="text-[10px] leading-[15px] bg-primary px-[28.6px] py-[10px] text-white rounded-[7px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]"
                onClick={() => {
                  setShowCryptoModal1((prev) => !prev);
                  setPaymentType("fiat");
                }}
              >
                Okay
              </button>
              <h2 className="text-[10px] leading-[15px] px-[28.6px] py-[10px] rounded-[7px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]">
                Coming soon...
              </h2>
            </div>
          </div>
        </WalletModal>
      )}
    </div>
  );
}

export default TopUpScreen;
