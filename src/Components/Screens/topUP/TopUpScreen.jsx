import React, { useState } from "react";
import { ContextProvider } from "../../Context";
import { useContext } from "react";
import { useEffect } from "react";
import { primaryColor } from "../cardIssuing/cardIssuing";
import "./topUp.css";
import WalletModal from "../../Wallet/WalletModal";
import { DashBoardLayout } from "../../Dashboard/Layout/DashBoardLayout";
import { Link } from "react-router-dom";

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
  const { setHideNavbar } = useContext(ContextProvider);

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
    <DashBoardLayout>
      <div>
        <div>
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
          <div className="flex justify-center md:justify-start py-[20px] md:py-[28.65px] lg:py-[50px] ">
            {paymentType === "fiat" ? (
              <div
                className="inline-flex lg:rounded-tr-[12px] lg:rounded-br-[12px] lg:rounded-bl-[12px] 
             ounded-tr-[4.902px] cursor-pointer py-[8.17px] px-[14%] rounded-tr-[5px] rounded-br-[5px] 
             rounded-bl-[5px] md:py-[14px] md:px-[5%] md:rounded-tr-[10px] md:rounded-br-[10px] md:rounded-bl-[10px] lg:px-[3%] lg:py-[18px]
              "
                style={{
                  backgroundColor: primaryColor,
                }}
              >
                <p className="text-[#fff] text-[8px]  md:text-[18px] lg:text-[20px]">Fiat Topup</p>
              </div>
            ) : (
              <div
                onClick={() => setPaymentType("fiat")}
                className="inline-flex lg:rounded-tr-[12px] lg:rounded-br-[12px] lg:rounded-bl-[12px] 
             ounded-tr-[4.902px] cursor-pointer py-[8.17px] px-[14%] rounded-tr-[5px] rounded-br-[5px] 
             rounded-bl-[5px] md:py-[14px] md:px-[5%] md:rounded-tr-[10px] md:rounded-br-[10px] md:rounded-bl-[10px] lg:px-[3%] lg:py-[18px]
              "
                style={{
                  backgroundColor: "rgba(146, 171, 254, 0.18)",
                }}
              >
                <p className="text-[#000] text-[8px]  md:text-[18px] lg:text-[20px]">Fiat Topup</p>
              </div>
            )}

            {paymentType === "crypto" ? (
              <div
                className=" lg:ml-[100px] md:ml-[57.28px]  ml-[40.85px]  inline-flex lg:rounded-tr-[12px] lg:rounded-br-[12px] lg:rounded-bl-[12px] 
             ounded-tr-[4.902px] cursor-pointer py-[8.17px] px-[14%] rounded-tr-[5px] rounded-br-[5px] 
             rounded-bl-[5px] md:py-[14px] md:px-[5%] md:rounded-tr-[10px] md:rounded-br-[10px] md:rounded-bl-[10px] lg:px-[3%] lg:py-[18px]
              "
                style={{
                  backgroundColor: primaryColor,
                }}
              >
                <p className="text-[#fff] text-[8px]  md:text-[18px] lg:text-[20px]">Crypto Topup</p>
              </div>
            ) : (
              <div
                onClick={() => {
                  setPaymentType("crypto");
                  setShowCryptoModal1((prev) => !prev);
                }}
                className=" inline-flex lg:rounded-tr-[12px] lg:rounded-br-[12px] lg:rounded-bl-[12px]  lg:ml-[100px] md:ml-[57.28px] ml-[40.85px] 
cursor-pointer py-[8.17px] px-[14%] rounded-tr-[5px] rounded-br-[5px] rounded-bl-[5px] md:py-[14px] md:px-[5%] md:rounded-tr-[10px] md:rounded-br-[10px] md:rounded-bl-[10px] lg:px-[3%] lg:py-[18px]
"
                style={{
                  backgroundColor: "rgba(146, 171, 254, 0.18)",
                }}
              >
                <p className="text-[#000] text-[8px]  md:text-[18px] lg:text-[20px]">Crypto Topup</p>
              </div>
            )}
          </div>
          {/* FIAT AND CRYPTO BUTTON ENDS HERE */}

          <div className="flex items-center">
            <p
              className=" text-[#7c7c7c] text-[10px]  md:text-[18px] lg:text-[20px]
            "
            >
              Funding Methods
            </p>
            <img
              src="Images/top_up/arrowR.png"
              alt=" "
              className="ml-[1%] w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
            />
          </div>

          <div className="flex flex-col justify-between h-[100vh] ">
            <div>
              {/* FUNDING METHODS STARTS HERE */}
              {data.map((data, index) => (
                <div key={index.toString()} className="Style1 ">
                  <div className="flex items-center">
                    <img src={data.image} alt="." className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]" />
                    <div className="lg:ml-[10px] md:ml-[7px] ml-[4px]">
                      <p className="text-[10px] md:text-[18px]">{data.title}</p>
                      <p className="text-[8px] text-[#7c7c7c] md:text-[16px]"> {data.content}</p>
                    </div>
                  </div>
                  <img
                    src="Images/top_up/arrowR.png"
                    alt=" "
                    className="ml-[1%] w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                  />
                </div>
              ))}
              {/* FUNDING METHODS STARTS HERE */}
            </div>
            <div className="flex gap-2 justify-center items-center md:mt-40 mb-[60px] md:mb-[40px]">
              <h2 className="leading-[12px]  text-[10px] md:text-[12px] lg:text-[14px]">
                You need help?
              </h2>
              <Link
                to={`/ContactUs`}
                className="text-[8px] leading-[12px] text-white bg-primary px-2 py-1 rounded-full md:text-[10px] lg:text-[12px] "
              >
                Contact Us
              </Link>
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
              <div className="flex flex-col-reverse md:flex md:flex-row   justify-center items-center md:gap-[20px] lg:w-[93%] lg:gap-[30px] mt-[5%] md:mt-[15%] lg:mt-[10%]">
                <button
                  className="w-[100%] md:w-[unset] text-[10px] leading-[15px] bg-primary px-[28.6px] py-[10px] text-white rounded-[7px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]"
                  onClick={() => {
                    setShowCryptoModal1((prev) => !prev);
                    setPaymentType("fiat");
                  }}
                >
                  Okay
                </button>
                <h2 className=" w-full md:w-[unset] text-right text-[10px] leading-[15px] md:px-[28.6px] py-[10px] rounded-[7px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]">
                  Coming soon...
                </h2>
              </div>
            </div>
          </WalletModal>
        )}
      </div>
    </DashBoardLayout>
  );
}

export default TopUpScreen;
