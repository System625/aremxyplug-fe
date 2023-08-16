import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { ContextProvider } from "../../../../Context";
import styles from "../../TransferComponent/transfer.module.css";
import { Modal } from "../../../../Screens/Modal/Modal";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

export const PersonalAccountForm = () => {
  const countryList = [
    {
      id: 1,
      name: "Nigeria",
      code: "NGN",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/nigeriaFlag.png"),
    },
    {
      id: 2,
      name: "United States",
      code: "USD",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/americaFlag.png"),
    },
    {
      id: 3,
      name: "United Kingdom",
      code: "GBP",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/ukFlag.png"),
    },
    {
      id: 4,
      name: "European",
      code: "GBP",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/europeanFlag.png"),
    },
    {
      id: 5,
      name: "Australia",
      code: "GBP",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/australiaFlag.png"),
    },
    {
      id: 6,
      name: "Kenya",
      code: "GBP",
      flag: require("../../../../Dashboard/DashboardComponents/flagsImages/kenyaFlag.png"),
    },
  ];

  const { showList, setShowList, selected, setSelected, isDarkMode } =
    useContext(ContextProvider);
  const [flag, setFlag] = useState("");
  const [countryCode, setCountryCode] = useState("");
  const [countryName, setCountryName] = useState("");
  // const [btnColor, setBtnColor] = useState("#0008");
  const [currencyAvailable, setCurrencyAvailable] = useState(false);
  const [successful, setSuccessful] = useState(false);
  const [state, setState] = useState({
    // country: "",
    // currency: "",
    email: "",
    houseAddress: "",
    accountName: "",
    accountNumber: "",
    swiftCode: "",
    bankName: "",
    beneficiaryAddress: "",
    beneficiaryCity: "",
    stateOrProvince: "",
    zipCode: "",
    checkbox: false,
  });

  const [errors, setErrors] = useState({});
  // const [checkboxChecked, setCheckboxChecked] = useState(false);
  console.log(state, countryCode, countryName);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    const inputValue = type === "checkbox" ? checked : value;
    setState({
      ...state,
      [name]: inputValue,
    });
  };

  const handleCountryClick = (name, flag, id, code) => {
    setFlag(flag);
    setShowList(false);
    setCountryName(name);
    setSelected(true);
    setCountryCode(code);
    setCurrencyAvailable(id !== 1);
  };

  // ========form validation using regex=======
  const schema = Joi.object({
    // countryName: Joi.string().required(),
    email: Joi.string()
      .pattern(new RegExp(/^[^\s@]+@[^\s@]+\.[^\s@]+$/))
      .required()
      .messages({ "string.pattern.base": "Invalid email " }),
    houseAddress: Joi.string().required(),
    accountName: Joi.string().required(),
    accountNumber: Joi.number().integer().min(-2).max(+9),
    swiftCode: Joi.string().required(),
    bankName: Joi.string().required(),
    beneficiaryAddress: Joi.string().required(),
    beneficiaryCity: Joi.string().required(),
    stateOrProvince: Joi.string().required(),
    // zipCode: Joi.number().integer().min(-30587).max(+30587),
    checkbox: Joi.boolean().required().invalid(false).messages({
      "any.invalid":
        "Please ensure you agree to the privacy policy, terms and condition",
    }),
  });
  // ======end of form valdiation=====

  const handleAddAccount = (e) => {
    e.preventDefault();

    const {
      // countryName,
      email,
      houseAddress,
      accountName,
      accountNumber,
      swiftCode,
      bankName,
      beneficiaryAddress,
      beneficiaryCity,
      stateOrProvince,
      zipCode,
      checkbox,
    } = state;

    const { error } = schema.validate({
      // countryName,
      email,
      houseAddress,
      accountName,
      accountNumber,
      swiftCode,
      bankName,
      beneficiaryAddress,
      beneficiaryCity,
      stateOrProvince,
      zipCode,
      checkbox,
    });

    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      setSuccessful(true);
    }
  };

  return (
    <>
      <div className="mt-[4%] grid grid-cols-2 gap-[7%] h-[] lg:w-[90%]">
        {/* =====================Country Input========================= */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Select Country
          </p>
          <div
            onClick={() => setShowList(!showList)}
            className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]"
          >
            {selected ? (
              <div className="flex gap-[7px] items-center">
                <img
                  className="w-[11px] h-[11px] lg:w-[29px] lg:h-[29px]"
                  src={flag}
                  alt=""
                />
                <p className="text-[10px] font-extrabold lg:text-[14px]">
                  {" "}
                  {countryName}
                </p>
              </div>
            ) : (
              <p></p>
            )}
            <img
              className=" h-[13.3px] w-[13.3px] lg:w-[24px] lg:h-[24px] "
              src="./Images/dashboardImages/arrow-down2.png"
              alt="dropdown"
            />
          </div>
          {errors.countryCode && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.countryCode}
            </div>
          )}
          {showList && (
            <div className="absolute top-[40.5%] rounded-br-[7px] rounded-bl-[7px] shadow-xl bg-[#fff] border w-[41.5%] lg:w-[37.5%] lg:rounded-br-[14px] lg:rounded-bl-[14px] lg:top-[105.3%]">
              {" "}
              {countryList.map((country) => (
                <div
                  className=" cursor-pointer border-b flex items-center p-2 gap-[5px] text-[9px]  md:text-[14px] lg:text-[16px]"
                  key={country.id}
                  onClick={() =>
                    handleCountryClick(
                      country.name,
                      country.flag,
                      country.id,
                      country.code
                    )
                  }
                >
                  <img
                    className="w-[13px] h-[13px] lg:w-[29px] lg:h-[29px]"
                    src={country.flag}
                    alt="/"
                  />
                  {country.name}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* ==================Currency Input============================== */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Select Currency
          </p>
          <div className="border text-[10px] rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            {countryCode}
          </div>
          {errors.currency && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.currency}
            </div>
          )}
        </div>

        {/* ========================Email Address Input ================ */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Email Address
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="email"
              value={state.email}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="email"
            />
          </div>
          {errors.email && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.email}
            </div>
          )}
        </div>

        {/* ==========================House Address====================== */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            House Address
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="houseAddress"
              value={state.houseAddress}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
          </div>
          {errors.bankName && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.bankName}
            </div>
          )}
        </div>

        {/* ============================Bank Name====================== */}

        <div className={` ${styles.inputBox}`}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">Bank Name</p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="bankName"
              value={state.bankName}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
          </div>
          {errors.bankName && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.bankName}
            </div>
          )}
        </div>

        {/* =========================Account Number / IBAN==================== */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Account Number / IBAN
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="accountNumber"
              value={state.accountNumber}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="number"
            />
          </div>
          {errors.accountNumber && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.accountNumber}
            </div>
          )}
        </div>

        {/* ===================Swift Code/ Sort Code / Routine Number ============ */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Swift Code/ Sort Code / Routine Number
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="swiftCode"
              value={state.swiftCode}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
          </div>
          {errors.swiftCode && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.swiftCode}
            </div>
          )}
        </div>

        {/* ===========================Account Name============================ */}

        <div className={`flex justify-end ${styles.inputBox}`}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Account Name
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="accountName"
              value={state.accountName}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
          </div>
          {errors.accountName && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.accountName}
            </div>
          )}
        </div>
        {/* =====================Beneficiary Address=========================== */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Beneficiary Address
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="beneficiaryAddress"
              value={state.beneficiaryAddress}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
          </div>
          {errors.beneficiaryAddress && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.beneficiaryAddress}
            </div>
          )}
        </div>

        {/* ===========================Beneficiary City======================= */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            Beneficiary City
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="beneficiaryCity"
              value={state.beneficiaryCity}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
          </div>
          {errors.beneficiaryCity && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.beneficiaryCity}
            </div>
          )}
        </div>

        {/* ================================State or Province======================== */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            State or Province
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="stateOrProvince"
              value={state.stateOrProvince}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="text"
            />
          </div>
          {errors.stateOrProvince && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.stateOrProvince}
            </div>
          )}
        </div>

        {/* ============================ZIP / Postcode=============================== */}
        <div className={styles.inputBox}>
          <p className="text-[10px] font-extrabold lg:text-[20px]">
            ZIP / Postcode
          </p>
          <div className="border rounded-[5px] h-[25px] flex justify-between items-center p-1 lg:h-[45px] lg:rounded-[10px] lg:border-[1px] lg:border-[#0003]">
            <input
              onChange={handleInputChange}
              name="zipCode"
              value={state.zipCode}
              className="text-[10px] w-[100%] h-[100%] outline-none lg:text-[14px]"
              type="number"
            />
          </div>
          {errors.zipCode && (
            <div className="text-[12px] text-red-500 italic lg:text-[14px]">
              {errors.zipCode}
            </div>
          )}
        </div>

        {/* ==============================Acknowledgement Checks========================= */}
        <div className=" col-span-2">
          <div className=" flex flex-col  gap-[10px]">
            {" "}
            <div className="flex gap-[15px] w-full">
              <input
                className="text-[#0006]"
                type="checkbox"
                value={state.checkbox}
                name="checkbox"
                onChange={handleInputChange}
              />
              <p className="text-[8px] w-full font-bold text-[#00000080] lg:text-[14px]">
                {" "}
                I acknowledge that the details i provide above are correct, and
                i take the full responsibility for any inaccuracy.
              </p>
            </div>
            {errors.checkbox && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.checkbox}
              </div>
            )}
            <div className="flex gap-[15px] w-full">
              <input
                type="checkbox"
                value={state.checkbox}
                name="checkbox"
                onChange={handleInputChange}
              />
              <p className="text-[8px] w-full font-bold text-[#00000080] lg:text-[14px]">
                I have read and agreed to AremxyPlug{" "}
                <Link
                  to="/privacy-policy"
                  className="text-[#04177f] hover:underline"
                >
                  Privacy Policy{" "}
                </Link>
                and{" "}
                <Link
                  to="/terms-and-condition"
                  className="text-[#04177f] hover:underline"
                >
                  Terms & Conditions
                </Link>
              </p>
            </div>
            {errors.checkbox && (
              <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                {errors.checkbox}
              </div>
            )}
          </div>

          {/* ========================Add and Cancel Button================== */}

          <div className="flex ">
            <button
              onClick={handleAddAccount}
              type="submit"
              style={{ backgroundColor: "#0008" }}
              className="hover:cursor-pointer px-[20px] py-1 flex justify-center items-center mb-[5%] lg:mb-[2%]  text-white p-[%] rounded-[6px] mx-auto mt-[7%] text-[9px] lg:px-[5%] lg:mt-[3%] lg:w-[] lg:h-[42px] lg:text-[14px] lg:rounded-lg"
            >
              Add Account
            </button>
            <button
              onClick={() => navigate("/to-my-account")}
              type="submit"
              className="hover:cursor-pointer font-extrabold px-[35px] flex justify-center item-center mb-[5%] lg:mb-[2%]  text-[#F95252] mx-auto text-center mt-[7%] text-[12px] lg:mt-[3%] lg:w-[140px] lg:h-[42px] lg:text-[16px] lg:rounded-lg"
            >
              Cancel
            </button>
          </div>
        </div>

        {currencyAvailable && (
          <Modal>
            <div className="bg-white shadow-lg w-[90%] rounded-[5px] flex flex-col items-center py-[4%] gap-[40px] lg:w-[40%] lg:py-[3%] lg:rounded-[7px]">
              <p className="text-[12px] text-[#04177f] font-extrabold">
                This Currency is Currently Not Available.
              </p>
              <img
                className="w-[50%] h-[50%]"
                src="/Images/addAccountImages/account-unavailable.png"
                alt=""
              />
              <p className="absolute top-[59%] right-[15%] text-[8px] lg:text-[12px] lg:right-[35%]">
                Coming Soon...
              </p>
              <div
                onClick={() => navigate("/to-my-account")}
                className={` ${
                  isDarkMode ? "border" : "bg-[#04177f] "
                } cursor-pointer text-white text-[12px] h-[35px] w-[80%] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[20%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[30%] lg:mx-auto`}
              >
                Okay
              </div>
            </div>
          </Modal>
        )}

        {successful && (
          <Modal>
            <div className={styles.successful}>
              <img
                className="m-2 w-[19.9px] h-[11.81px] "
                src="/Images/addAccountImages/aremxyAddLogo.png"
                alt="/"
              />
              <hr className="h-[6px] bg-[#04177f] border-none" />
              <div className="my-[3%] flex flex-col justify-between h-[70%]">
                <div className="text-center">
                  <p className="text-[11px] font-extrabold">Successful</p>
                  <p className="text-[11px] font-extrabold text-[#00AA48]">
                    Your Account has been added successfully.
                  </p>
                </div>
                <div
                  onClick={() => navigate("/to-my-account")}
                  className={` ${
                    isDarkMode ? "border" : "bg-[#04177f] "
                  } mx-auto cursor-pointer text-white text-[12px] h-[35px] w-[80%] rounded-[5px] flex items-center justify-center md:mx-auto md:w-[20%] md:h-[30px] md:text-[14px] lg:my-[3%] lg:h-[40px] lg:text-[20px] lg:w-[30%] lg:mx-auto`}
                >
                  Done
                </div>
              </div>
            </div>
          </Modal>
        )}
      </div>
      <div className="mt-[25%] mb-[10%] flex gap-[15px] justify-center items-center absolute top-[100%] left-[35%] lg:top-[220%] lg:left-[40%]">
        <div className="text-[8px] md:text-[12px] lg:text-[16px]">
          You need help ?
        </div>
        <Link to="/ContactUs">
          <div
            className={`${
              isDarkMode ? "border " : "bg-[#04177f]"
            } text-[8px] p-1 text-white rounded-[8px]`}
          >
            Contact Us
          </div>
        </Link>
      </div>
    </>
  );
};
