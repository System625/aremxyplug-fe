import React from "react";
import { useContext } from "react";
import { ContextProvider } from "../../Context";
import styles from "./component.module.css";

export const RecentTransaction = () => {
  const { toggleSideBar, isDarkMode } = useContext(ContextProvider);
  return (
    <div className="mb-[25%]">
      <div className="flex items-center gap-[10px] md:">
        <p className={styles.InOutText}>Recent Transactions</p>
        <img
          className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
          src="./Images/Dashboardimages/arrowright.png"
          alt="/"
        />
      </div>

      <div
        className={`${
          toggleSideBar
            ? "lg:gap-[59px] lg:text-[20px]"
            : "lg:gap-[98px] lg:text-[23px]"
        } my-[10%] flex text-[8px] font-extrabold gap-[8px] md:my-[5%] md:text-[20px] md:gap-[35px]  `}
      >
        <div
          className={`${styles.filter} ${
            isDarkMode ? "border" : ""
          } flex items-center gap-[1px] px-[2px] rounded-[3px] md:px-[8px]`}
        >
          <div className={` text-[#04177f]`}>Filter by Date </div>
          <img
            className="w-[15px] h-[15px] md:w-[17px] md:h-[17px] lg:w-[20px] lg:h-[20px]"
            src="./Images/Dashboardimages/dateImg.png"
            alt=""
          />
        </div>
        <div
          className={`${isDarkMode ? "border" : "bg-[#04177f]"} text-white  rounded-[5px] px-[5px] py-[5px] md:px-[9px] md:py-[8px] lg:rounded-[13px] lg:py-[10px] lg:px-[19px]`}
        >
          Wallet Summary
        </div>
        <div className={`${isDarkMode ? "border" : "bg-[#04177f]"} text-white rounded-[5px] px-[5px] py-[5px] md:px-[9px] md:py-[8px] lg:rounded-[13px] lg:py-[10px] lg:px-[19px]`}>
          Sales Summary
        </div>
        <div className={`${isDarkMode ? "border" : "bg-[#04177f]"} text-white rounded-[5px] px-[5px] py-[5px] md:px-[9px] md:py-[8px] lg:rounded-[13px] lg:py-[10px] lg:px-[15px]`}>
          Download Statement
        </div>
      </div>

      <div className={`${styles.viewTransactions} ${isDarkMode ? "bg-black border" : "bg-white"}`}>
        <img
          className={styles.noTransactions}
          src="./Images/Dashboardimages/noTransactionFound.png"
          alt=""
        />
        <div className={styles.viewAll}>
          <div className={styles.viewText}>View all transactions</div>
          <img
            className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
            src="./Images/Dashboardimages/empty-wallet-add.png"
            alt=""
          />
        </div>
        <div className={`${isDarkMode ? "" : "text-[#0003]"} text-[15px]  md:text-[27px] lg:text-[40px]`}>
          No Transaction Found !
        </div>
        <div className="flex gap-[15px] items-center">
          <div className="text-[8px] md:text-[12px] lg:text-[14px]">
            You need help ?
          </div>
          <div className={styles.contactus}>Contact Us</div>
        </div>
      </div>
    </div>
  );
};
