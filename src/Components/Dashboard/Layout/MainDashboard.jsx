import React, { useState, useRef } from "react";
import { SideBar } from "../Layout/SideBar";
import { useEffect, useContext } from "react";
import { ContextProvider } from "../../Context";
import { TopBar } from "./TopBar";
import "react-multi-carousel/lib/styles.css";
import styles from "./Dashboard.module.css";
import { AiFillEyeInvisible } from "react-icons/ai";
import { AiFillEye } from "react-icons/ai";
import { RiFileCopyFill } from "react-icons/ri";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Autoplay, Pagination } from "swiper";
import QuickFeatures from "../DashboardComponents/QuickFeatures";

export const MainDashboard = () => {
  const { setHideNavbar, toggleSideBar, isDarkMode } =
    useContext(ContextProvider);
  const [visible, setVisibility] = useState(true);
  const [activeButtons, setActiveButtons] = useState([false, false, false]);
  const [blur, setBlur] = useState(false);
  const textRef = useRef(null);

  const handleCopyClick = () => {
    const text = textRef.current.innerText;
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Copied to clipboard");
      })
      .catch((err) => {
        console.error("Error copying text: ", err);
      });
  };

  const visibilityHandler = () => {
    setVisibility(!visible);
  };
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

  const handleClick = (index) => {
    const updatedButtons = activeButtons.map((isActive, i) => i === index);
    setActiveButtons(updatedButtons);
  };

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
            toggleSideBar ? "lg:w-[69.5%] lg:float-right" : ""
          } w-[] mx-[5%] mt-[8%] lg:mt-[3%] `}
        >
          {/* ==============HERO SECTION========== */}
          <Swiper
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            pagination={{
              dynamicBullets: true,
              clickable: true,
            }}
            modules={[Pagination, Autoplay]}
            className="mySwiper"
            speed="2000"
            loop="true"
          >
            <SwiperSlide>
              {" "}
              <div className="h-[100px] md:h-[150px] lg:h-[270px] ">
                <img
                  className="w-[100%] h-[75px] md:h-[120px] lg:h-[238px]"
                  src="./Images/dashboardImages/hero1.png"
                  alt="Welcome to AremxyPlug"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="w-[100%] h-[75px] md:h-[120px] lg:h-[238px]"
                  src="./Images/dashboardImages/hero2.png"
                  alt="Welcome to AremxyPlug"
                />
              </div>
            </SwiperSlide>
            <SwiperSlide>
              <div>
                <img
                  className="w-[100%] h-[75px] md:h-[120px] lg:h-[238px]"
                  src="./Images/dashboardImages/hero3.png"
                  alt="Welcome to AremxyPlug"
                />
              </div>
            </SwiperSlide>
          </Swiper>
          {/* ==============HERO SECTION CLOSE========== */}

          {/* ==========AVAILABLE BALANCE=========== */}
          <div className={styles.balance}>
            <div
              className={`${
                isDarkMode ? "bg-[#000] border border-[#fff]" : "bg-[#e9edfb]"
              } ${styles.balance1}`}
            >
              <button
                className={`${isDarkMode ? "border" : ""} ${styles.viewWallet}`}
              >
                View Wallets
              </button>
              <p className={`${toggleSideBar ? "" : ""} ${styles.walletText}`}>
                Available Balance
              </p>
              {blur && (
                <div
                  className={` ${
                    toggleSideBar
                      ? "backdrop-blur-[4.5px] md:absolute md:w-[80%] md:h-[65px] md:ml-[3%] md:text-[19px] md:text-center lg:absolute lg:mt-2 lg:ml-[2%] lg:w-[28%] lg:text-[20px] lg:h-[89px] text-[#04177f]"
                      : "backdrop-blur-[4.5px] absolute text-[#04177f] w-[70%] h-[70px] text-[11px] font-bold text-center ml-[6%] pt-[3%] md:text-[20px] md:mt-[%] md:pb-[8%] md:pt-[0%] md:h-[40px] md:text-extrabold lg:text-[24px] lg:ml-[4%] lg:w-[33%] lg:pt-[1%] lg:h-[90px]"
                  } `}
                >
                  This feature is currently not available...
                </div>
              )}
              {/* ================= */}
              <div
                className={`${toggleSideBar ? "lg:pt-[7%]" : ""} ${
                  styles.viewBalance
                }`}
              >
                <select name="curr" id="curr">
                  <option value="NGN">NGN</option>
                  <option value="USD">USD</option>
                  <option value="GBP">GBP</option>
                  <option value="EUR">EUR</option>
                  <option value="AUD">AUD</option>
                  <option value="KES">KES</option>
                </select>
                {visible ? (
                  <span
                    className={` ${
                      toggleSideBar ? "lg:text-[19px]" : "lg:text-[37px]"
                    } text-[19px] leading-normal `}
                  >
                    &#8358;5,000.00
                  </span>
                ) : (
                  <span className="text-[19px] leading-normal lg:text-[37px]">
                    **********
                  </span>
                )}
                <div onClick={visibilityHandler} className=" text-[#92ABFE]">
                  {visible ? (
                    <div className={`lg:text-[40px] ${styles.eye}`}>
                      <AiFillEye />
                    </div>
                  ) : (
                    <div className={`lg:text-[40px] ${styles.eye}`}>
                      <AiFillEyeInvisible />
                    </div>
                  )}
                </div>
              </div>
              {/* ==================== */}
              <div
                className={`${toggleSideBar ? "lg:mt-[13%]" : ""} ${
                  styles.fcp
                } flex justify-center items-center gap-[75px] mt-[10%] md:mt-[9%]`}
              >
                <div
                  onClick={() => {
                    handleClick(0);
                    setBlur(false);
                  }}
                  className={`${styles.fcp2} ${
                    isDarkMode ? " border" : " "
                  } bg-[#92ABFE2E] cursor w-[17%] md:w-[10%] flex py-[3.92px] justify-center items-center text-[7px] md:text-[10px] font-semibold leading-normal rounded-[10px] lg:text-[13px] lg:w-[16%] lg:py-[7.47px] lg:rounded-[19px] hover:bg-[#04177f] hover:text-white active:bg-[#04177f] ${
                    activeButtons[0] ? "bg-[#04177f] lg:" : "bg-[#92ABFE2E]"
                  } `}
                >
                  Flat
                </div>
                {/* {crypto && ( */}
                <div
                  onClick={() => {
                    handleClick(1);
                    setBlur(true);
                  }}
                  className={`${styles.fcp2} ${
                    isDarkMode ? " border" : " "
                  } md:text-[10px] md:w-[10%] bg-[#92ABFE2E] cursor w-[17%] flex py-[3.92px] justify-center items-center text-[7px] font-semibold leading-normal rounded-[10px] lg:w-[16%] lg:text-[13px] lg:py-[7.47px] lg:rounded-[19px]  hover:bg-[#04177f] hover:text-white active:bg-[#04177f]${
                    activeButtons[1] ? "bg-[#04177f]" : "bg-[#92ABFE2E]"
                  } `}
                >
                  Crypto
                </div>
                {/* )} */}
                <div
                  onClick={() => handleClick(2)}
                  className={`${styles.fcp2} ${
                    isDarkMode ? " border" : " "
                  } md:text-[10px] md:w-[10%] bg-[#92ABFE2E] cursor w-[17%] flex py-[3.92px] justify-center items-center text-[7px] font-semibold leading-normal rounded-[10px] lg:w-[16%] lg:text-[13px] lg:py-[7.47px] lg:rounded-[19px] hover:bg-[#04177f] hover:text-white active:bg-[#04177f]${
                    activeButtons[2] ? "bg-[#04177f]" : "bg-[#92ABFE2E]"
                  } `}
                >
                  Points
                </div>
              </div>
            </div>

            {/* ==========VIRTUAL ACCOUNTS============= */}
            <div
              className={`${
                isDarkMode ? "bg-[#000] border border-[#fff]" : "bg-[#e9edfb]"
              } ${styles.balance2}`}
            >
              <button
                className={`${isDarkMode ? "border" : ""} ${styles.viewWallet}`}
              >
                View Accounts
              </button>
              <div>
                <div className="flex mt-[8%] gap-[30px] md:mt-[5%] lg:mt-[9%]">
                  <p
                    className={`${styles.GVA} ${
                      toggleSideBar ? "lg:text-[17px]" : ""
                    } text-[11px] font-extrabold md:text-[17px] lg:text-[21px]`}
                  >
                    Global Virtual Accounts
                  </p>

                  <select name="curr" id="curr">
                    <option value="NGN">NGN</option>
                    <option value="NGN">USD</option>
                    <option value="NGN">GBP</option>
                    <option value="NGN">EUR</option>
                    <option value="NGN">AUD</option>
                    <option value="NGN">KES</option>
                  </select>
                </div>
                <p className="text-[6px] md:text-[10px] text-[#04177f] leading-normal font-bold lg:text-[11px]">
                  The below accounts are reserved for your wallet only.
                </p>
              </div>

              <div className="mt-[5%] flex flex-col gap-[10px] lg:gap-[30px]">
                <div
                  className={`${styles.virtualaccounttxt} flex text-[10px] gap-[90px] md:font-extrabold md:text-[15px]`}
                >
                  <div>Bank Name</div>
                  <div>SBI</div>
                </div>
                <div
                  className={`${styles.virtualaccounttxt} flex text-[10px] gap-[75px] md:text-[15px]`}
                >
                  <div>Account Name</div>
                  <div>Habib Kamaldeen</div>
                </div>
                <div
                  className={`${styles.virtualaccounttxt} flex text-[10px] gap-[65px] md:text-[15px]`}
                >
                  <div>Account Number</div>
                  <div className="flex items-center gap-[10px]">
                    <div ref={textRef}>1400 00xx xxxx</div>
                    <div
                      onClick={handleCopyClick}
                      className="text-[#92abfec3] text-[13px] font-extrabold lg:text-[16px]"
                    >
                      <RiFileCopyFill />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ================VIRTUAL ACCOUNT CLOSE=============== */}

          <div
            className={`${styles.ttwc} ${
              toggleSideBar ? "" : ""
            } flex mt-[7%] gap-[40px] md:gap-[95px] lg:gap-[6.5%]`}
          >
            <div
              className={`${
                isDarkMode ? " border bg-[#000]" : "bg-[#04177f]"
              } ${styles.button}`}
            >
              <img
                className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
                src="./Images/dashboardImages/topup.png"
                alt="topup"
              />
              <p>Topup</p>
            </div>
            <div
              className={`${
                isDarkMode ? " border bg-[#000]" : "bg-[#04177f] "
              } ${styles.button}`}
            >
              <img
                className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
                src="./Images/dashboardImages/transfer.png"
                alt="topup"
              />
              <p>Transfer</p>
            </div>
            <div
              className={`${
                isDarkMode ? " border bg-[#000]" : "bg-[#04177f]"
              } ${styles.button}`}
            >
              <img
                className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
                src="./Images/dashboardImages/withdraw.png"
                alt="topup"
              />
              <p>Withdraw</p>
            </div>
            <div
              className={`${
                isDarkMode ? " border bg-[#000]" : "bg-[#04177f]"
              } ${styles.button}`}
            >
              <img
                className="w-[11px] h-[11px] md:h-[20px] md:w-[20px] lg:w-[51px] lg:h-[51px]"
                src="./Images/dashboardImages/convert.png"
                alt="topup"
              />
              <p>Convert</p>
            </div>
          </div>

          <QuickFeatures />
        </div>
      </div>
    </div>
  );
};
