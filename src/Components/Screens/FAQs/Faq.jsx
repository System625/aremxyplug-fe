import React, { useState } from "react";
import style from "./Faq.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { ContextProvider } from "../../Context";
import { useContext } from "react";
import Bluebutton from "../../bluebutton/Bluebutton";
 

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
    <div className="mx-[5%] mb-[25%] flex flex-col gap-[30px] md:mb-[15%] lg:mx-[8%] ">
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

      {/* ===========================ROW EIGHT====================== */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler8}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            8. Do I need a bank account to carry out any transactions?
          </p>
          {!eigthDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {eigthDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              No, you don't need a bank account to carry out transactions on
              AremxyPlug. However, you can link your bank account to your
              AremxyPlug account to make transactions more convenient.
            </p>
          </div>
        )}
      </div>

      {/* =============================ROW NINE======================= */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler9}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            9. Can I connect my bank account to receive payments instantly?
          </p>
          {!ninethDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {ninethDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              Yes, you can connect your bank account to receive payments
              instantly.
            </p>
          </div>
        )}
      </div>

      {/* ===============================ROW TEN=============================== */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler10}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            10. Do I get charged for creating a card?
          </p>
          {!tenthDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {tenthDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              Yes, there is a fee for creating a physical debit card, but there
              is no fee for creating a virtual debit card.
            </p>
          </div>
        )}
      </div>

      {/* ===============================ROW ELEVEN=============================== */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler11}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            11. How do I fund my virtual and physical debit USD and NGN cards?
          </p>
          {!eleventhDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {eleventhDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              You can fund your virtual and physical USD and NGN debit cards
              using your AremxyPlug wallet balance.
            </p>
          </div>
        )}
      </div>

      {/* ===============================ROW TWELVE=============================== */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler12}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            12. Are there any charges that apply to virtual USD and NGN card
            transactions?
          </p>
          {!twelvethDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {twelvethDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              Yes, there may be charges for virtual USD and NGN card
              transactions, depending on the type of transaction and the
              currency involved.
            </p>
          </div>
        )}
      </div>

      {/* ===============================ROW THIRTEEN=============================== */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler13}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            13. How can I fund my wallet using ATM card payments?
          </p>
          {!thirteenDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {thirteenDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              You can fund your wallet using ATM card payments by selecting the
              appropriate option on the AremxyPlug app or website and following
              the instructions..
            </p>
          </div>
        )}
      </div>

      {/* ===============================ROW FOURTEEN=============================== */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler14}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            14. Are there any benefits to upgrading my account?
          </p>
          {!fourteenDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {fourteenDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              Yes, you can connect your bank account to receive payments
              instantly.
            </p>
          </div>
        )}
      </div>

      {/* ===============================ROW FIFTEEN=============================== */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler15}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            15. What are the benefits of becoming an agent?
          </p>
          {!fiftheenDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {fiftheenDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              As an AremxyPlug agent, you can earn commissions on transactions
              made by your customers and increase your revenue streams.
            </p>
          </div>
        )}
      </div>

      {/* ===============================ROW SIXTEEN=============================== */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler16}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            16. How can I become a merchant?
          </p>
          {!sixteenthDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {sixteenthDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              To become a merchant on AremxyPlug, you must sign up and meet the
              eligibility criteria. Once approved, you can set up a VTU platform
              to run your Telecom business.
            </p>
          </div>
        )}
      </div>

      {/* ===============================ROW SEVENTEEN=============================== */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler17}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            17. Are there any specific rates for currency conversion?
          </p>
          {!seventeenthDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {seventeenthDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              Yes, there are specific rates for currency conversion that are
              determined by the prevailing exchange rate and may be subject to
              fluctuations. AremxyPlug uses real-time market rates to ensure
              fair and transparent pricing.
            </p>
          </div>
        )}
      </div>

      {/* ===============================ROW EIGHTEEN=============================== */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler18}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            18. Are there any additional charges for converting one currency to
            another?
          </p>
          {!eighteenthDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {eighteenthDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              Yes, there may be additional charges for converting one currency
              to another. The charges depend on various factors, such as the
              currency pair, the amount being converted, and the payment method
              used.
            </p>
          </div>
        )}
      </div>

      {/* ===============================ROW NINETEEN=============================== */}
      <div>
        {" "}
        <div className={style.faq2} onClick={setDropHandler19}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            19. How often are AremxyPlug's business development and digital
            services encrypted, safe, and trusted?
          </p>
          {!ninteenthDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {ninteenthDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              AremxyPlug's business development and digital services are
              encrypted, safe, and trusted at all times. The platform uses
              industry-standard security protocols and advanced encryption
              technologies to protect user data and transactions.
            </p>
          </div>
        )}
      </div>

      {/* ===============================ROW TWENTY=============================== */}
      <div className="mb-[5%]">
        {" "}
        <div className={style.faq2} onClick={setDropHandler20}>
          <p className="text-[12px] font-semibold lg:text-[18px] lg:text-left">
            20. Your inquiry is not addressed on this page?
          </p>
          {!twentiethDrop ? (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropDownLine />
            </div>
          ) : (
            <div className="lg:text-3xl lg:w-[30px]">
              <RiArrowDropUpLine />
            </div>
          )}
        </div>
        {twentiethDrop && (
          <div className={style.faq}>
            <p className="text-[10px] text-justify p-3 lg:text-[16px] lg:w-[540px] lg:p-[3%]">
              You can reach out to AremxyPlug's customer support team for
              assistance. We are available 24/7 to help you with any questions
              or concerns you may have. You can contact us through the
              AremxyPlug app or website, or via email or phone.
            </p>
          </div>
        )}
      </div>

<Bluebutton/>
    </div>
  );
};
