import React, { useState } from "react";
import style from "./Faq.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { ContextProvider } from "../../Context";
import { useContext } from "react";

export const Faq = () => {
  const {
    firstDrop,
    secondDrop,
    thirdDrop,
    fourthDrop,
    fifthDrop,
    sixthDrop,
    seventhDrop,
    eigthDrop,
    ninethDrop,
    tenthDrop,
    eleventhDrop,
    twelvethDrop,
    thirteenDrop,
    fourteenDrop,
    fiftheenDrop,
    sixteenthDrop,
    seventeenthDrop,
    eighteenthDrop,
    ninteenthDrop,
    twentiethDrop,
    setDropHandler,
    setDropHandler2,
    setDropHandler3,
    setDropHandler4,
    setDropHandler5,
    setDropHandler6,
    setDropHandler7,
    setDropHandler8,
    setDropHandler9,
    setDropHandler10,
    setDropHandler11,
    setDropHandler12,
    setDropHandler13,
    setDropHandler14,
    setDropHandler15,
    setDropHandler16,
    setDropHandler17,
    setDropHandler18,
    setDropHandler19,
    setDropHandler20,
  } = useContext(ContextProvider);

  return (
    <div className="mx-[5%] flex flex-col gap-[30px] lg:mx-[8%] ">
      <p className="pt-[15%] text-[20px] font-bold text-center md:text-[26.6px] lg:text-[45px] lg:pt-[10%]">
        Frequently Asked Questions
      </p>
      <br></br>

      {/* ========================ROW ONE======================= */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            1. What are Global Virtual Accounts?
          </p>
          {!firstDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {firstDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              Global Virtual Accounts are virtual bank accounts that allow users
              to send, receive, and store money securely, without having to open
              a physical bank account. They are designed to simplify
              cross-border payments and reduce transaction costs for businesses
              and individuals.
            </p>
          </div>
        )}
      </div>

      {/* ======================ROW TWO======================= */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler2}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            2. Can I receive local and international bank transfers to my global
            virtual accounts?
          </p>
          {!secondDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {secondDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              Yes, you can receive both local and international bank transfers
              to your global virtual account.
            </p>
          </div>
        )}
      </div>

      {/* ======================ROW THREE======================= */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler3}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            3. How Automated is AremxyPlug's wallet to reflect payments
            instantly?
          </p>
          {!thirdDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {thirdDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              AremxyPlug's wallet system is fully automated and designed to
              reflect payments instantly. Once a payment is made, it is
              immediately reflected in your wallet balance.
            </p>
          </div>
        )}
      </div>

      {/* ===================ROW FOUR=========================== */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler4}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            4. How does the wallet system work?
          </p>
          {!fourthDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {fourthDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              The wallet system allows you to store funds securely and make
              payments for goods and services. You can fund your wallet using
              various payment methods, such as bank transfer, card payment, or
              cash deposit.
            </p>
          </div>
        )}
      </div>

      {/* ==================ROW FIVE==================== */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler5}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            5. Can I send money from my wallet to another AremxyPlug user's
            wallet?
          </p>
          {!fifthDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {fifthDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              Yes, you can send money from your wallet to another AremxyPlug
              user's wallet instantly and free of charge.
            </p>
          </div>
        )}
      </div>

      {/* ===========================SIX ROW====================== */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler6}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            6. How can I fulfill airtime top-ups, data bundles, and bill
            payments after funding my wallet?
          </p>
          {!sixthDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {sixthDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              You can fulfill airtime top-ups, data bundles, and bill payments
              by selecting the appropriate service from the AremxyPlug app or
              website and entering the necessary information. The payment will
              be deducted from your wallet balance.
            </p>
          </div>
        )}
      </div>

      {/* ===========================ROW SEVEN===================== */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler7}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            7. How do I create Virtual and Physical debit USD and NGN cards?
          </p>
          {!seventhDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {seventhDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              To create a virtual or physical USD or NGN debit card, log in to
              your AremxyPlug account and follow the instructions provided. You
              will need to provide some personal and financial information and
              upload a valid ID document.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};
