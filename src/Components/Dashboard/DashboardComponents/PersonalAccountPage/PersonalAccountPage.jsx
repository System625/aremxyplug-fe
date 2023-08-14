import React, { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import styles from "../TransferComponent/transfer.module.css";
import { Link } from "react-router-dom";

export const PersonalAccountPage = () => {
  const { isDarkMode, image, code } = useContext(ContextProvider);
  const [tfPopUp, setTfPopUp] = useState(true);
  return (
    <DashBoardLayout>
      <div className=" flex flex-col justify-between h-full md:mt-[-4%]">
        <div>
          {" "}
          <img
            className=" w-[100%] h-[80px] md:h-[180px] lg:h-[230px]"
            src="/Images/dashboardImages/ToMyAccount.png"
            alt="/"
          />
          <div className="flex my-[5%] gap-11 font-extrabold md:w-[80%]">
            <button
              onClick={()=>setTfPopUp(!tfPopUp)}
              className={`${styles.transferMoneyBtn} flex gap-[5px] w-[100%] h-[26px] justify-center items-center md:w-[390px] lg:h-[41px]`}
            >
              <h2 className="text-[9px] md:text-[12px] lg:text-[16px] ">
                Transfer Money To Account
              </h2>
              <img
                className="w-[11px] h-[11px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
                src="/Images/dashboardImages/transfer-money.png"
                alt=""
              />
            </button>

            {/* ===================Transfer Money To Account pop up====================== */}
            {tfPopUp && <div className={styles.transferMoneyPop}></div>}
            {/* ===================End of Transfer Money To Account pop up====================== */}

            <button
              className={`${styles.transferMoneyBtn} flex gap-[5px] w-[100%] h-[26px] justify-center items-center md:w-[390px] lg:h-[41px]`}
            >
              <h2 className="text-[9px] md:text-[12px] lg:text-[16px]">
                Add Money To Wallet
              </h2>
              <img
                className="w-[11px] h-[11px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
                src="/Images/dashboardImages/add-money.png"
                alt=""
              />
            </button>
          </div>
          <div className="flex text-[#7c7c7c] text-[10px] leading-[130%] items-center mb-[2%] gap-[8px] md:my-[5%] md:text-[18px] lg:text-[20px]">
            <p>Account Details : </p>
            <img
              className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
              src="./Images/Dashboardimages/arrowright.png"
              alt="/"
            />
          </div>
          {/* ==================Account Details============================ */}
          <div className={`${styles.detailsBox}`}>
            {/* ==================First line=============== */}
            <div className="flex gap-8 md:w-[64%] md:gap-[10%] lg:gap-[80px]">
              <div
                className={`${styles.boxes} h-[48px] w-full flex justify-between items-center px-[5%] md:items-start md:p-[2%] md:w-[350px] md:h-[88px]`}
              >
                <div className="flex flex-col md:gap-[10px]">
                  <p className="text-[10px] font-extrabold md:text-[17px]">
                    Country
                  </p>
                  <p className="text-[7px] md:text-[12px]">Nigeria</p>
                </div>
                <img
                  className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
                  src={image}
                  alt="/"
                />
              </div>
              <div
                className={`${styles.boxes} w-full h-[48px] px-[5%] flex flex-col justify-center md:items-start md:p-[2%] md:w-[350px] md:h-[88px] md:gap-[10px]`}
              >
                <p className="text-[10px] font-extrabold md:text-[17px]">
                  Currency
                </p>
                <p className="text-[7px] md:text-[12px]">{code}</p>
              </div>
            </div>
            {/* ================Second line for Tablet view================== */}
            <div className="md:flex md:gap-[6%] lg:gap-[80px]">
              <div
                className={`${styles.boxes} ${styles.boxes3} w-full h-[48px] flex justify-between px-[5%] pt-[3%] md:w-[350px] md:p-2 md:h-[88px] md:gap-[10px]`}
              >
                <div className="flex flex-col gap-[5px] md:gap-[10px]">
                  <p className="text-[10px] font-extrabold md:text-[17px]">
                    Email Address
                  </p>
                  <p className="text-[7px] md:text-[12px]">habib@gmail.com</p>
                </div>
                <img
                  className="w-[16px] h-[16px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/email-address.png"
                  alt="/"
                />
              </div>
              <div
                className={`${styles.boxes} hidden w-full h-[48px] md:flex justify-between px-[5%] pt-[3%] md:w-[350px] md:p-2 md:h-[88px]`}
              >
                <div className="flex flex-col gap-[5px] md:gap-[10px]">
                  <p className="text-[10px] font-extrabold md:text-[15px]">
                    Account Number/IBAN
                  </p>
                  <p className="text-[7px] md:text-[12px]">0123456789</p>
                </div>
                <img
                  className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/iban.png"
                  alt="/"
                />
              </div>
              <div
                className={`${styles.boxes} hidden w-full h-[48px] md:flex justify-between px-[5%] pt-[3%] md:w-[350px] md:p-2 md:h-[88px]`}
              >
                <div className="flex flex-col gap-[5px] md:gap-[10px]">
                  <p className="text-[10px] font-extrabold md:text-[17px]">
                    Account Name
                  </p>
                  <p className="text-[7px] md:text-[12px]">Habib Kamaldeen</p>
                </div>
                <img
                  className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/account-name.png"
                  alt="/"
                />
              </div>
            </div>
            {/* ====================Second Line for mobile view=============== */}
            <div className="flex gap-8 md:hidden">
              <div
                className={`${styles.boxes} w-full h-[48px] flex justify-between px-[4%] pt-[1%]`}
              >
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[9.5px] font-extrabold">
                    Account Number/IBAN
                  </p>
                  <p className="text-[7px]">0123456789</p>
                </div>
                <img
                  className="w-[14px] h-[14px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/iban.png"
                  alt="/"
                />
              </div>
              <div
                className={`${styles.boxes} w-full h-[48px] flex justify-between px-[5%] pt-[3%]`}
              >
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[10px] font-extrabold">Account Name</p>
                  <p className="text-[7px]">Habib Kamaldeen</p>
                </div>
                <img
                  className="w-[14px] h-[14px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/account-name.png"
                  alt="/"
                />
              </div>
            </div>
            <div
              className={`${styles.boxes} ${styles.boxes3} w-full h-[48px] flex justify-between px-[5%] pt-[3%] md:p-2 md:h-[88px] md:w-[350px] lg:w-[400px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[10px] font-extrabold md:text-[17px]">
                  Home Address
                </p>
                <p className="text-[7px] md:text-[12px]">
                  AC 123 AremxyPlug Street, Nigeria
                </p>
              </div>
              <img
                className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/home-address.png"
                alt="/"
              />
            </div>

            {/* ====================== Third line ===================== */}
            <div
              className={`${styles.boxes} hidden w-[500px] h-[88px] md:flex justify-between p-2 lg:w-[670px]`}
            >
              <div className="flex flex-col gap-[10px]">
                <p className="text-[17px] font-extrabold w-[%]">
                  Swift Code/Sort Code/ Routine Number
                </p>
                <p className="text-[12px]">AREMXYYYY</p>
              </div>
              <img
                className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/barcode.png"
                alt="/"
              />
            </div>

            <div className="flex gap-8 md:hidden">
              <div
                className={`${styles.boxes} w-full h-[48px] flex justify-between px-[5%] pt-[2%]`}
              >
                <div className="flex flex-col gap-[3px]">
                  <p className="text-[9px] font-extrabold w-[%]">
                    Swift Code/Sort Code/ Routine Number
                  </p>
                  <p className="text-[6px]">AREMXYYYY</p>
                </div>
                <img
                  className="w-[14px] h-[14px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/barcode.png"
                  alt="/"
                />
              </div>
              <div
                className={`${styles.boxes} w-full h-[48px] flex justify-between px-[5%] pt-[3%]`}
              >
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[10px] font-extrabold">Bank Name</p>
                  <p className="text-[7px]">GT Bank</p>
                </div>
                <img
                  className="w-[14px] h-[14px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/bank-name.png"
                  alt="/"
                />
              </div>
            </div>

            {/* =====================Third line tablet======================== */}
            <div className="hidden md:flex gap-[80px]">
              <div
                className={`${styles.boxes} w-full h-[48px] flex justify-between px-[5%] pt-[3%] md:w-[350px] md:h-[88px] md:p-2`}
              >
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[10px] font-extrabold md:text-[17px]">
                    Bank Name
                  </p>
                  <p className="text-[7px] md:text-[12px] ">GT Bank</p>
                </div>
                <img
                  className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/bank-name.png"
                  alt="/"
                />
              </div>
              <div
                className={`${styles.boxes} ${styles.boxes3} w-full h-[48px] flex justify-between px-[5%] pt-[3%] md:w-[350px] md:h-[88px] md:p-2`}
              >
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[10px] font-extrabold md:text-[17px]">
                    Beneficiary Address
                  </p>
                  <p className="text-[7px] md:text-[12px]">
                    AC 123 AremxyPlug Street, Nigeria
                  </p>
                </div>
                <img
                  className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/beneficiary-address.png"
                  alt="/"
                />
              </div>
              <div
                className={`${styles.boxes} w-full h-[48px] flex justify-between px-[5%] pt-[3%] md:w-[350px] md:h-[88px] md:p-2`}
              >
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[10px] font-extrabold md:text-[17px]">
                    Beneficiary City
                  </p>
                  <p className="text-[7px] md:text-[12px]">Kaduna City</p>
                </div>
                <img
                  className="w-[14px] h-[14px] md:h-[20px] md:w-[20px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/beneficiary.png"
                  alt="/"
                />
              </div>
            </div>
            <div className="flex gap-8 md:hidden">
              <div
                className={`${styles.boxes}  w-full h-[48px] flex justify-between px-[5%] pt-[3%] `}
              >
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[10px] font-extrabold">Beneficiary City</p>
                  <p className="text-[7px]">Kaduna City</p>
                </div>
                <img
                  className="w-[14px] h-[14px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/beneficiary.png"
                  alt="/"
                />
              </div>
              <div
                className={`${styles.boxes} w-full h-[48px] flex justify-between gap-[] px-[5%] pt-[3%] `}
              >
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[10px] font-extrabold">
                    State or Province
                  </p>
                  <p className="text-[7px]">Kaduna City</p>
                </div>
                <img
                  className="w-[14px] h-[14px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/direct-notification.png"
                  alt="/"
                />
              </div>
            </div>
            <div className="flex gap-8 lg:gap-[80px]">
              <div
                className={`${styles.boxes} hidden w-full h-[48px] md:w-[350px] md:flex justify-between gap-[] px-[5%] pt-[3%] md:p-2 md:h-[88px]`}
              >
                <div className="flex flex-col gap-[5px] md:gap-[10px]">
                  <p className="text-[10px] font-extrabold md:text-[17px]">
                    State or Province
                  </p>
                  <p className="text-[7px] md:text-[12px]">Kaduna City</p>
                </div>
                <img
                  className="w-[14px] h-[14px] md:w-[20px] md:h-[20px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/direct-notification.png"
                  alt="/"
                />
              </div>
              <div
                className={`${styles.boxes} w-full h-[48px] flex justify-between px-[5%] pt-[3%] md:w-[350px] md:h-[88px] md:p-2`}
              >
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[10px] font-extrabold md:text-[17px]">
                    ZIP / Postcode
                  </p>
                  <p className="text-[7px] md:text-[12px]">235642</p>
                </div>
                <img
                  className="w-[14px] h-[14px] md:h-[20px] md:w-[20px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/zip.png"
                  alt="/"
                />
              </div>
              <div
                className={`${styles.boxes} w-full h-[48px] flex justify-between px-[5%] pt-[4%] md:w-[350px] md:h-[88px] md:p-2`}
              >
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[10px] font-extrabold md:text-[17px]">
                    Reference Number
                  </p>
                  <p className="text-[7px] md:text-[12px]">AP-20230703-001 </p>
                </div>
                <img
                  className="w-[17px] h-[17px] md:h-[25px] md:w-[25px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/reference.png"
                  alt="/"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-8 my-[9%] md:w-[60%] lg:gap-1 lg:w-[54%]">
            <button className="cursor-pointer text-[12px] font-extrabold h-[45px] bg-[#04177f] text-white w-full rounded-[6px] md:w-[48%] md:text-[17px]">
              Edit Account Details
            </button>
            <button className="cursor-pointer text-[#F95252] text-[14px] w-full rounded-[6px] font-extrabold md:w-[48%] lg:text-[16px]">
              Delete Account
            </button>
          </div>
        </div>
        <div
          className={`${
            isDarkMode ? "mb-[1%]" : ""
          } flex gap-[15px] justify-center items-center mt-[] md:mt-[38%] lg:mt-[26%] lg:mb-[%]`}
        >
          <div className="text-[10px] md:text-[12px] lg:text-[14px]">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${isDarkMode ? "border" : "bg-[#04177f]"} ${
                styles.contactus
              }`}
            >
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
};
