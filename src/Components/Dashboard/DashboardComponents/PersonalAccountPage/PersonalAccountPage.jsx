import React, { useState } from "react";
import { useContext } from "react";
import { ContextProvider } from "../../../Context";
import { DashBoardLayout } from "../../Layout/DashBoardLayout";
import styles from "../TransferComponent/transfer.module.css";
import { Link } from "react-router-dom";
import { Modal } from "../../../Screens/Modal/Modal";
import Joi from "joi";

export const PersonalAccountPage = () => {
  const { isDarkMode, image, code, toggleSideBar } =
    useContext(ContextProvider);
  const [tfPopUp, setTfPopUp] = useState(false);
  const [confirmationPopUp, setConfirmationPopUp] = useState(false);
  const [amtToTransfer, setAmtToTransfer] = useState("");
  const [errors, setErrors] = useState({});

  const transferFee = 50;

  const pointsEarned = "+2.00";

  const TotalAmount = amtToTransfer;

  console.log(amtToTransfer);
  const amountHandler = (e) => {
    setAmtToTransfer(e.target.value);
  };

  const schema = Joi.object({
    amtToTransfer: Joi.string()
      .pattern(new RegExp(/\d{4,}/))
      .required()
      .messages({
        "string.pattern.base": "Amount can not be less than 1000",
      }),
  });

  const handleProceed = (event) => {
    event.preventDefault();

    const { error } = schema.validate({
      amtToTransfer,
    });

    if (error) {
      setErrors(
        error.details.reduce((acc, curr) => {
          acc[curr.path[0]] = curr.message;
          return acc;
        }, {})
      );
    } else {
      setConfirmationPopUp(true);
      setTfPopUp(false);
      setErrors({});
    }
  };
  return (
    <DashBoardLayout>
      <div className=" flex flex-col justify-between md:mt-[-4%]">
        <div>
          {" "}
          <img
            className=" w-[100%] h-[80px] md:h-[180px] lg:h-[230px]"
            src="/Images/dashboardImages/ToMyAccount.png"
            alt="/"
          />
          <div className="flex my-[5%] gap-11 font-extrabold md:w-[80%]">
            <button
              onClick={() => setTfPopUp(true)}
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
            {tfPopUp && (
              <Modal>
                (
                <div
                  className={` ${styles.transferMoneyPop} ${
                    toggleSideBar ? "md:w-[45%]" : ""
                  } md:w-[45%] w-[90%]`}
                >
                  <img
                    onClick={() => setTfPopUp(false)}
                    className="absolute right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                    src="/Images/transferImages/close-circle.png"
                    alt=""
                  />
                  <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
                  <h2 className="text-[12px] my-[5%] text-center md:text-[20px] md:my-[4%]">
                    Transfer Money to Account
                  </h2>
                  <div className="w-[90%] mx-auto flex flex-col gap-[10px] md:grid md:grid-cols-2">
                    <div>
                      <p className="text-[10px] font-extrabold md:text-[16px]">
                        Bank Name
                      </p>
                      <div className="border-[0.55px] h-[18px] justify-between p-[1%] rounded-[4px] md:p-[3%] md:rounded-[8px] md:h-[40px] md:border-[1.5px]">
                        <p className="text-[8px] text-[#0008] md:text-[14px]">
                          GT Bank
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold md:text-[16px]">
                        Account Name
                      </p>
                      <div className="border-[0.55px] h-[18px] flex flex-col justify-between p-[1%] rounded-[4px] md:p-[3%]  md:rounded-[8px] md:h-[40px] md:border-[1.5px]">
                        <p className="text-[8px] text-[#0008] md:text-[14px]">
                          Habib Kamaldeen
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold md:text-[16px]">
                        Account Number
                      </p>
                      <div className="border-[0.55px] h-[18px] flex flex-col justify-between p-[1%] rounded-[4px] md:p-[3%] md:rounded-[8px] md:h-[40px] md:border-[1.5px]">
                        <p className="text-[8px] text-[#0008] md:text-[14px]">
                          0123456789
                        </p>
                      </div>
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold md:text-[16px]">
                        Amount To Transfer
                      </p>
                      <input
                        onChange={amountHandler}
                        type="number"
                        className="outline-none text-[10px] text-[#0008] border-[0.55px] w-full h-[18px] flex flex-col justify-between p-[1%] rounded-[4px] md:text-[14px] md:p-[3%] md:rounded-[8px] md:h-[40px] md:border-[1.5px]"
                      />
                      {errors.amtToTransfer && (
                        <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                          {errors.amtToTransfer}
                        </div>
                      )}
                    </div>
                    <div>
                      <p className="text-[10px] font-extrabold md:text-[16px]">
                        Available Balance
                      </p>
                      <div className="border-[0.55px] h-[20px] flex justify-between p-[1%] rounded-[4px] md:p-[3%] md:rounded-[8px] md:h-[40px] md:border-[1.5px]">
                        <p className="text-[8px] text-[#0008] md:text-[14px]">
                          &#8358;50,000.00
                        </p>
                        <img
                          className="w-[13px] h-[13px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                          src={image}
                          alt="/"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="w-[90%] mx-auto mt-[15px] md:w-[50%] md:ml-[5%] md:mx-0">
                    <p className="text-[10px] font-extrabold md:text-[16px]">
                      Message
                    </p>
                    <textarea
                      placeholder="Optional"
                      className="text-[10px] outline-none w-full border-[0.55px] h-[80px] flex flex-col justify-between p-[1%] rounded-[4px] md:h-[100px] md:text-[14px] md:rounded-[8px] md:border-[1.5px]"
                    ></textarea>
                  </div>
                  <button
                    onClick={handleProceed}
                    className={`${
                      amtToTransfer ? "bg-[#04177f]" : "bg-[#0008]"
                    } my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:h-[35px]`}
                  >
                    Proceed
                  </button>
                </div>
                )
              </Modal>
            )}

            {/* =============Confirm Transaction popup====================== */}
            {confirmationPopUp && (
              <Modal>
                (
                <div
                  className={`${styles.transferConfirmation} ${
                    toggleSideBar ? "md:w-[45%]" : ""
                  } md:w-[45%] w-[90%]`}
                >
                  <img
                    onClick={() => setConfirmationPopUp(false)}
                    className="absolute right-2 w-[18px] h-[18px] my-[1%] md:w-[35px] md:h-[35px] lg:w-[29px] lg:h-[29px]"
                    src="/Images/transferImages/close-circle.png"
                    alt=""
                  />
                  <hr className="h-[6px] bg-[#04177f] border-none mt-[8%] md:mt-[6%] md:h-[10px]" />
                  <h2 className="text-[12px] my-[5%] text-center md:text-[20px] md:my-[4%]">
                    Confirm Transaction
                  </h2>
                  <p className="text-[8px] text-[#0008] text-center mb-2">
                    You are about to transfer{" "}
                    <span className="text-[#000] font-extrabold text-[10px]">
                      &#8358;{amtToTransfer}.00{" "}
                    </span>
                    from your NGN wallet to{" "}
                  </p>

                  <div className="flex flex-col gap-3">
                    <div className="flex text-[10px] w-[90%] mx-auto justify-between">
                      <p className="text-[#0008]">Bank Name</p>
                      <span>Sporta</span>
                    </div>
                    <div className="flex text-[10px] w-[90%] mx-auto justify-between">
                      <p className="text-[#0008]">Account Name</p>
                      <span>Habib Kamaldeen</span>
                    </div>
                    <div className="flex text-[10px] w-[90%] mx-auto justify-between">
                      <p className="text-[#0008]">Account Number</p>
                      <span>7785695102</span>
                    </div>
                    <div className="flex text-[10px] w-[90%] mx-auto justify-between">
                      <p className="text-[#0008]">Amount to Transfer</p>
                      <span>&#8358;{amtToTransfer}.00</span>
                    </div>
                    <div className="flex text-[10px] w-[90%] mx-auto justify-between">
                      <p className="text-[#0008]">Transfaction fee</p>
                      <span>&#8358;{transferFee}.00</span>
                    </div>
                    <div className="flex text-[10px] w-[90%] mx-auto justify-between">
                      <p className="text-[#0008]">Vat Fee</p>
                      <span>&#8358;00.00</span>
                    </div>
                    <div className="flex text-[10px] w-[90%] mx-auto justify-between">
                      <p className="text-[#0008]">Total Amount</p>
                      <span>&#8358;{TotalAmount.toLocaleString()}.00</span>
                    </div>
                    <div className="flex text-[10px] w-[90%] mx-auto justify-between">
                      <p className="text-[#0008]">Points Earned</p>
                      <span className="text-[#00AA48]">{pointsEarned}</span>
                    </div>
                  </div>

                  <div className="bg-[#0001] h-[45px] my-5 flex justify-between items-center px-[4%]">
                    <div className="flex gap-2 items-center">
                      <div className="bg-white rounded-full h-[27px] w-[27px] flex justify-center items-center">
                        <img
                          className="w-[16px] h-[16px]"
                          src={image}
                          alt="/"
                        />
                      </div>
                      <p className="text-[10px]">Available Balance <span className="text-[#0003]">(&#8358;50,000.00)</span></p>
                    </div>
                    <img
                      className="w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
                      src="./Images/Dashboardimages/arrowright.png"
                      alt="/"
                    />
                  </div>
                  <button
                    onClick={handleProceed}
                    className={`${
                      amtToTransfer ? "bg-[#04177f]" : "bg-[#0008]"
                    } my-[5%] w-[88%] flex justify-center items-center mx-auto cursor-pointer text-[14px] font-extrabold h-[40px] text-white rounded-[6px] md:w-[25%] md:rounded-[8px] md:text-[20px] lg:h-[35px]`}
                  >
                    Confirmed
                  </button>
                </div>
                )
              </Modal>
            )}

            {/* ===================Transfer Money To Account pop up====================== */}

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
            {/* ======================COUNTRY================== */}
            <div
              className={`${styles.boxes} h-[60px] w-full flex justify-between items-center px-[3%] md:h-[90px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Country
                </p>
                <p className="text-[10px] md:text-[15px]">Nigeria</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src={image}
                alt="/"
              />
            </div>

            {/* ===================CURRENCY==================== */}
            <div
              className={`${styles.boxes} w-full h-[60px] px-[3%] gap-[5px] flex flex-col justify-center md:h-[90px] md:gap-[10px]`}
            >
              <p className="text-[13px] font-extrabold md:text-[20px]">
                Currency
              </p>
              <p className="text-[10px] md:text-[15px]">{code}</p>
            </div>

            {/* ===================EMAIL ADDRESS================= */}
            <div
              className={`${styles.boxes} ${styles.boxes3} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px] md:gap-[10px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Email Address
                </p>
                <p className="text-[10px] md:text-[15px]">habib@gmail.com</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/email-address.png"
                alt="/"
              />
            </div>

            {/* =====================HOME ADDRESS==================== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px] lg:w-[]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Home Address
                </p>
                <p className="text-[10px] md:text-[15px]">
                  AC 123 AremxyPlug Street, Nigeria
                </p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/home-address.png"
                alt="/"
              />
            </div>

            {/* =====================ACCOUNT NUMBER/IBAN=============== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between px-[3%] items-center md:h-[90px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Account Number/IBAN
                </p>
                <p className="text-[10px] md:text-[15px]">0123456789</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/iban.png"
                alt="/"
              />
            </div>

            {/* ====================ACCOUNT NAME====================== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Account Name
                </p>
                <p className="text-[10px] md:text-[15px]">Habib Kamaldeen</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/account-name.png"
                alt="/"
              />
            </div>

            {/* =========================SWIFT CODE==================== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px]`}
            >
              <div className="flex flex-col gap-[3px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Swift Code/Sort Code/ Routine Number
                </p>
                <p className="text-[10px] md:text-[13px]">AREMXYYYY</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/barcode.png"
                alt="/"
              />
            </div>

            {/* =====================BANK NAME======================== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Bank Name
                </p>
                <p className="text-[10px] md:text-[15px]">GT Bank</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/bank-name.png"
                alt="/"
              />
            </div>

            {/* ====================BENEFICIARY ADDRESS=============== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Beneficiary Address
                </p>
                <p className="text-[10px] md:text-[15px]">
                  AC 123 AremxyPlug Street, Nigeria
                </p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/beneficiary-address.png"
                alt="/"
              />
            </div>

            {/* ========================BENEFICIARY CITY================== */}
            <div
              className={`${styles.boxes}  w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Beneficiary City
                </p>
                <p className="text-[10px] md:text-[15px]">Kaduna City</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/beneficiary.png"
                alt="/"
              />
            </div>

            {/* =====================STATE OR PROVINCE=================== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  State or Province
                </p>
                <p className="text-[10px] md:text-[15px]">Kaduna City</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:w-[24px] md:h-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/direct-notification.png"
                alt="/"
              />
            </div>

            {/* ======================ZIP CODE===================== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[90px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px] ">
                  ZIP / Postcode
                </p>
                <p className="text-[10px] md:text-[15px]">235642</p>
              </div>
              <img
                className="w-[18px] h-[18px] md:h-[24px] md:w-[24px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/zip.png"
                alt="/"
              />
            </div>

            {/* ====================REFERENCE NUMBER================== */}
            <div
              className={`${styles.boxes} w-full h-[60px] flex justify-between items-center px-[3%] md:h-[88px]`}
            >
              <div className="flex flex-col gap-[5px] md:gap-[10px]">
                <p className="text-[13px] font-extrabold md:text-[20px]">
                  Reference Number
                </p>
                <p className="text-[10px] md:text-[15px]">AP-20230703-001 </p>
              </div>
              <img
                className="w-[18px] h-[18px] md:h-[40px] md:w-[40px] lg:w-[29px] lg:h-[29px]"
                src="./Images/Dashboardimages/reference.png"
                alt="/"
              />
            </div>
          </div>
          {/* ===================EDIT ACCOUNT AND DELETE BUTTON================== */}
          <div className="flex gap-8 my-[9%]  lg:gap-1 lg:w-[54%]">
            <button className="cursor-pointer text-[12px] font-extrabold h-[45px] bg-[#04177f] text-white w-full rounded-[6px] md:rounded-[8px] md:text-[20px]">
              Edit Account Details
            </button>
            <button className="cursor-pointer text-[#F95252] text-[14px] w-full rounded-[6px] font-extrabold md:text-[20px] lg:text-[20px]">
              Delete Account
            </button>
          </div>
        </div>
        <div
          className={`${
            isDarkMode ? "mb-[1%]" : "mb-[5%]"
          } flex gap-[15px] justify-center items-center mt-[] md:mt-[38%] lg:mt-[26%] lg:mb-[%]`}
        >
          <div className="text-[10px] md:text-[12px] lg:text-[14px]">
            You need help ?
          </div>
          <Link to="/ContactUs">
            <div
              className={`${isDarkMode ? "" : "bg-[#04177f]"} ${
                styles.contactus
              } text-[8px] p-1 text-white rounded-[8px]`}
            >
              Contact Us
            </div>
          </Link>
        </div>
      </div>
    </DashBoardLayout>
  );
};
