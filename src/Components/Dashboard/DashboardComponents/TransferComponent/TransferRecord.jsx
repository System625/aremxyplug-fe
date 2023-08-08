import React, { useState } from "react";
import styles from "../../DashboardComponents/component.module.css";

const CountrySelect = ({ onSelect, selectedCountry, countries }) => {
  const countryList = [
    {
      id: 1,
      name: "Nigeria",
      code: "NGN",
      flag: require("../../DashboardComponents/flagsImages/nigeriaFlag.png")
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
      id: 3,
      name: "European",
      code: "GBP",
      flag: require("../../DashboardComponents/flagsImages/europeanFlag.png"),
    },
    {
      id: 3,
      name: "Australia",
      code: "GBP",
      flag: require("../../DashboardComponents/flagsImages/australiaFlag.png"),
    },
    {
      id: 3,
      name: "Kenya",
      code: "GBP",
      flag: require("../../DashboardComponents/flagsImages/kenyaFlag.png"),
    },
  ];

  const [showList, setShowList] = useState(false);
  const handleOptionClick = (e) => {
    onSelect(e);
    setShowList(false);
  };
  return (
    <div>
      <button
        onClick={() => setShowList(!showList)}
        className="text-[8px] text-[#0003] p-1 flex rounded-[5px] items-center w-[94px] h-[19.6px] border mb-[2%]"
      >
       {/* {selected ? { selectedCountry } : "select" } */}
       {selectedCountry}
      </button>
      {showList && (
        <div className={styles.countrySelect}>
          {countryList.map((country) => (
            <div className="border-b flex items-center p-1 gap-[5px] text-[9px]"
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

export const TransferRecord = () => {
  const [selectedCountry, setSelectedCountry] = useState("");

  const handleCountrySelect = (code) => {
    setSelectedCountry(code);
  };

  return (
    <div>
      <div className="flex items-end justify-between">
        <div className="flex text-[9px] gap-[15px] md:text-[14px]">
          <div className="w-[82.667px] rounded-[2px]">Personal Accounts</div>
          <div className="w-[82.677pxpx] rounded-[2px]">Business Accounts</div>
        </div>
        <CountrySelect
          onSelect={handleCountrySelect}
          selectedCountry={selectedCountry}
        />
      </div>

      <hr />
    </div>
  );
};
