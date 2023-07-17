import React from "react";
import styles from "./component.module.css";
const QuickFeatures = () => {
  return (
    <div className={styles.quickbody}>
      <div className="flex items-center gap-[10px]">
        <p className={`${styles.text} text-[11px]`}>Quick Features</p>
        <img
          className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[] lg:h-[]"
          src="./Images/Dashboardimages/arrowright.png"
          alt="/"
        />
      </div>
      <div className={`${styles.quickgrid} grid grid-cols-5 gap-y-2 mt-[3%]`}>
        <div className={styles.feature}>
          <img className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[] lg:w-[]" src="./Images/Dashboardimages/feature1.png" alt="/" />
          <p>Airtime Topup</p>
        </div>
        <div className={styles.feature}>
          <img className=" h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[] lg:w-[]" src="./Images/Dashboardimages/feature2.png" alt="/" />
          <p>Data Topup</p>
        </div>
        <div className={styles.feature}>
          <img className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[] lg:w-[]" src="./Images/Dashboardimages/feature3.png" alt="/" />
          <p>Education Pins</p>
        </div>
        <div className={styles.feature}>
          <img className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[] lg:w-[]" src="./Images/Dashboardimages/feature4.png" alt="/" />
          <p>TV Subscriptions</p>
        </div>
        <div className={styles.feature}>
          <img className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[] lg:w-[]" src="./Images/Dashboardimages/feature5.png" alt="/" />
          <p>Electricity Bills</p>
        </div>
        <div className={styles.feature}>
          <img className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[] lg:w-[]" src="./Images/Dashboardimages/feature6.png" alt="/" />
          <p>Payments</p>
        </div>
        <div className={styles.feature}>
          <img className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[] lg:w-[]" src="./Images/Dashboardimages/feature7.png" alt="/" />
          <p>Card Issuing</p>
        </div>
        <div className={styles.feature}>
          <img className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[] lg:w-[]" src="./Images/Dashboardimages/feature8.png" alt="/" />
          <p>Digital Services</p>
        </div>
        <div className={styles.feature}>
          <img className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[] lg:w-[]" src="./Images/Dashboardimages/feature9.png" alt="/" />
          <p>Referrals</p>
        </div>
        <div className={styles.feature}>
          <img className="h-[25px] w-[25px] md:w-[] md:h-[] lg:h-[] lg:w-[]" src="./Images/Dashboardimages/feature10.png" alt="/" />
          <p>My Profile</p>
        </div>
      </div>
    </div>
  );
};
export default QuickFeatures;
