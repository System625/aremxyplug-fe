import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import styles from "../../DashboardComponents/component.module.css";
import { Link } from "react-router-dom";

export const PersonalAccountPage = () => {
  const { isDarkMode, image, code } = useContext(ContextProvider);
  return (
    <DashBoardLayout>
      <div className="flex flex-col justify-between h-full">
        <div>
          {" "}
          <img
            className=" w-[100%] h-[80px] md:h-[180px] lg:h-[230px]"
            src="/Images/dashboardImages/ToMyAccount.png"
            alt="/"
          />
          <div className="flex my-[5%] gap-11 font-extrabold">
            <button
              className={`${styles.transferMoneyBtn} flex gap-[5px] w-[100%] h-[26px] justify-center items-center`}
            >
              <h2 className="text-[9px]">Transfer Money To Account</h2>
              <img
                className="w-[11px] h-[11px] lg:w-[29px] lg:h-[29px]"
                src="/Images/dashboardImages/transfer-money.png"
                alt=""
              />
            </button>
            <button
              className={`${styles.transferMoneyBtn} flex gap-[5px] w-[100%] h-[26px] justify-center items-center`}
            >
              <h2 className="text-[9px]">Add Money To Wallet</h2>
              <img
                className="w-[11px] h-[11px] lg:w-[29px] lg:h-[29px]"
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
            <div className="flex gap-8">
              <div
                className={`${styles.boxes} h-[48px] w-full flex justify-between items-center px-[5%]`}
              >
                <div>
                  <p className="text-[10px] font-extrabold">Country</p>
                  <p className="text-[7px]">Nigeria</p>
                </div>
                <img
                  className="w-[16px] h-[16px] lg:w-[29px] lg:h-[29px]"
                  src={image}
                  alt="/"
                />
              </div>
              <div
                className={`${styles.boxes} w-full h-[48px] px-[5%] flex flex-col justify-center`}
              >
                <p className="text-[10px] font-extrabold">Currency</p>
                <p className="text-[7px]">{code}</p>
              </div>
            </div>
            <div
              className={`${styles.boxes} ${styles.boxes3} w-full h-[48px] flex justify-between px-[5%] pt-[3%]`}
            >
              <div className="flex flex-col gap-[5px]">
                <p className="text-[10px] font-extrabold">Email Address</p>
                <p className="text-[7px]">Habib@gmail.com</p>
              </div>
              <img
                className="w-[16px] h-[16px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/email-address.png"
                alt="/"
              />
            </div>
            <div className="flex gap-8 ">
              <div
                className={`${styles.boxes} w-full h-[48px] flex justify-between px-[5%] pt-[3%]`}
              >
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[10px] font-extrabold">Account Number</p>
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
              className={`${styles.boxes} ${styles.boxes3} w-full h-[48px] flex justify-between px-[5%] pt-[3%]`}
            >
              <div className="flex flex-col gap-[5px]">
                <p className="text-[10px] font-extrabold">Home Address</p>
                <p className="text-[7px]">AC 123 AremxyPlug Street, Nigeria</p>
              </div>
              <img
                className="w-[14px] h-[14px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/home-address.png"
                alt="/"
              />
            </div>
            <div className="flex gap-8">
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
            <div
              className={`${styles.boxes} ${styles.boxes3} w-full h-[48px] flex justify-between px-[5%] pt-[3%]`}
            >
              <div className="flex flex-col gap-[5px]">
                <p className="text-[10px] font-extrabold">
                  Beneficiary Address
                </p>
                <p className="text-[7px]">AC 123 AremxyPlug Street, Nigeria</p>
              </div>
              <img
                className="w-[14px] h-[14px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/home-address.png"
                alt="/"
              />
            </div>
            <div className="flex gap-8">
              <div
                className={`${styles.boxes} w-full h-[48px] flex justify-between px-[5%] pt-[3%]`}
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
                className={`${styles.boxes} w-full h-[48px] flex justify-between gap-[] px-[5%] pt-[3%]`}
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
            <div className="flex gap-8">
              <div
                className={`${styles.boxes} w-full h-[48px] flex justify-between px-[5%] pt-[3%]`}
              >
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[10px] font-extrabold">ZIP / Postcode</p>
                  <p className="text-[7px]">235642</p>
                </div>
                <img
                  className="w-[14px] h-[14px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/zip.png"
                  alt="/"
                />
              </div>
              <div
                className={`${styles.boxes} w-full h-[48px] flex justify-between px-[5%] pt-[4%]`}
              >
                <div className="flex flex-col gap-[5px]">
                  <p className="text-[10px] font-extrabold">Reference Number</p>
                  <p className="text-[7px]">AP-20230703-001 </p>
                </div>
                <img
                  className="w-[14px] h-[14px] lg:w-[29px] lg:h-[29px]"
                  src="./Images/Dashboardimages/reference.png"
                  alt="/"
                />
              </div>
            </div>
          </div>
          <div className="flex gap-8 my-[9%]">
            <button className="text-[12px] font-extrabold h-[45px] bg-[#04177f] text-white w-full rounded-[6px]">
              Edit Account Details
            </button>
            <button className="text-[#F95252] text-[14px] w-full rounded-[6px] font-extrabold ">
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
