import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import styles from "../../DashboardComponents/component.module.css";

// ================Function for country select dropdown===================
const CountrySelect = ({
  onSelect,
  selectedCountry,
  // setNoRecord,
  countries,
}) => {
  // const {isDarkMode} = useContext(ContextProvider)
  const countryList = [
    {
      id: 1,
      name: "Nigeria",
      code: "NGN",
      flag: require("../../DashboardComponents/flagsImages/nigeriaFlag.png"),
    },
    {
      id: 2,
      name: "United States",
      code: "USD",
      flag: require("../../DashboardComponents/flagsImages/americaFlag.png"),
    },
    {
      id: 3,
      name: "United Kingdom",
      code: "GBP",
      flag: require("../../DashboardComponents/flagsImages/ukFlag.png"),
    },
    {
      id: 4,
      name: "European",
      code: "GBP",
      flag: require("../../DashboardComponents/flagsImages/europeanFlag.png"),
    },
    {
      id: 5,
      name: "Australia",
      code: "GBP",
      flag: require("../../DashboardComponents/flagsImages/australiaFlag.png"),
    },
    {
      id: 6,
      name: "Kenya",
      code: "GBP",
      flag: require("../../DashboardComponents/flagsImages/kenyaFlag.png"),
    },
  ];

  const [showList, setShowList] = useState(false);
  const handleOptionClick = (country) => {
    onSelect(country);
    setShowList(false);
    // const clicked = e.target.value;
  };
  return (
    <div>
      <button
        onClick={() => setShowList(!showList)}
        className="text-[8px] text-[#0003] p-1 flex rounded-[5px] items-center w-[94px] h-[19.6px] border mb-[4%]"
      >
        {/* {selected ? { selectedCountry } : "select" } */}
        {selectedCountry}
      </button>
      {showList && (
        <div className={styles.countrySelect}>
          {countryList.map((country) => (
            <div
              className="border-b flex items-center p-1 gap-[5px] text-[9px] bg-[#fff]"
              key={country.id}
              onClick={() => handleOptionClick(country.name, country.flag)}
            >
              <img className="w-[11px] h-[11px]" src={country.flag} alt="/" />
              {country.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

// ===================Transfer Page To Account================
export const TransferRecord = () => {
  const { isDarkMode } = useContext(ContextProvider);
  const [selectedCountry, setSelectedCountry] = useState("");
  const [activeButton, setActiveButtons] = useState([false, false]);
  const [noRecord, setNoRecord] = useState(false);

  const handleCountrySelect = (country) => {
    setSelectedCountry(country);
    setNoRecord(country.name === "United States");
  };

  const handleActive = (index) => {
    const updatedButtons = activeButton.map((isActive, i) => i === index);
    setActiveButtons(updatedButtons);
  };
  return (
    <div>
      <div className="flex items-end justify-between">
        <div className="flex text-[9px] gap-[15px] md:text-[14px]">
          <div
            onClick={() => {
              handleActive(0);
            }}
            className={`${
              activeButton[0]
                ? "bg-[#E2F3FF] rounded-[2px] border-b-[2px] border-b-[#04177f] h-[16px] flex items-center p-[5px]"
                : ""
            } w-[95.667px] rounded-[2px]`}
          >
            Personal Accounts
          </div>
          <div
            onClick={() => {
              handleActive(1);
            }}
            className={`${
              activeButton[1]
                ? "bg-[#E2F3FF] rounded-[2px] border-b-[2px] border-b-[#04177f] h-[16px] flex items-center p-[5px]"
                : ""
            } w-[95.667px] rounded-[2px]`}
          >
            Business Accounts
          </div>
        </div>
        <CountrySelect
          onSelect={handleCountrySelect}
          selectedCountry={selectedCountry}
          setNoRecord={setNoRecord}
        />
      </div>

      <hr />

      <div className={`${styles.accountRecords}`}>
        <div className="text-[7px] flex items-center justify-between w-[100%] h-[16px] bg-[#c3d9ff] p-2">
          <h3 className="">Country</h3>
          <div className="w-[1px] h-[16px] bg-[#0003]"></div>
          <h3 className="">Currency</h3>
          <div className="w-[1px] h-[16px] bg-[#0003]"></div>
          <h3 className="">Bank Name</h3>
          <div className="w-[1px] h-[16px] bg-[#0003]"></div>
          <h3 className="">Account Name</h3>
          <div className="w-[1px] h-[16px] bg-[#0003]"></div>
          <h3 className="">Account Number</h3>
          <div className="w-[1px] h-[16px] bg-[#0003]"></div>
          <h3 className="">Reference No</h3>
        </div>
        {noRecord && (
          <div>
            <img
              className={styles.noTransactions}
              src="./Images/Dashboardimages/noTransactionFound.png"
              alt=""
            />
            <div
              className={`${
                isDarkMode ? "" : "text-[#0005] font-extrabold"
              } text-[15px] text-center md:text-[27px] lg:text-[40px]`}
            >
              No Record Found !
            </div>
          </div>
        )}
      </div>

      <div className="flex gap-[15px] justify-center items-center mt-[15%]">
        <div className="text-[8px] md:text-[12px] lg:text-[14px]">
          You need help ?
        </div>
        <Link to="/ContactUs">
          <div
            className={`${isDarkMode ? "border " : "bg-[#04177f]"} ${
              styles.contactus
            }`}
          >
            Contact Us
          </div>
        </Link>
      </div>
    </div>
  );
};
