import React, { useState } from "react";
import styles from "./Home.module.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { RiArrowDropDownLine } from "react-icons/ri";
// import { RiArrowDropUpLine } from "react-icons/ri";
import { AiFillMinusCircle } from "react-icons/ai";

const items = [
  <div
    className="flex flex-col gap-[10px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] lg:w-[30%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">Airtime Top Up</div>
    <div className="text-[12px] lg:text-[16px] lg:leading-5">
      With just a few clicks. Never run out of airtime. Simply top up your phone
      online from the comfort of your home.
    </div>
    <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Buy Now
    </div>
  </div>,
  <div
    className="flex flex-col gap-[10px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] md:ml-[-55%] lg:w-[30%] lg:ml-[-65%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">Data Bundles</div>
    <div className="text-[12px] lg:text-[16px]">
      Our Data Bundles service has got you covered with flexible plans to suit
      your needs and stream like never before!
    </div>
    <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Buy Now
    </div>
  </div>,
  <div
    className="flex flex-col gap-[18px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] md:ml-[-110%] lg:w-[30%] lg:ml-[-130%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">Education Pins</div>
    <div className="text-[12px] lg:text-[16px]">
      With our Education Pins service, you can access your exam results in just
      a few clicks.
    </div>
    <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Buy Now
    </div>
  </div>,
  <div
    className="flex flex-col gap-[10px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] md:ml-[-165%] lg:w-[30%] lg:ml-[-195%] lg:gap-[18px]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">TV Subscription</div>
    <div className="text-[12px] lg:text-[16px]">
      Enjoy unlimited streaming on multiple channels. Sign up now and never miss
      your favorite show again!
    </div>
    <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Buy Now
    </div>
  </div>,
  <div
    className="flex flex-col gap-[10px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] md:ml-[-220%] lg:w-[30%] lg:ml-[-260%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">Electricity Bills</div>
    <div className="text-[12px] lg:text-[16px]">
      Keep track of your bills and make sure you never miss a payment. Try our
      bills payment service right away to make life easier.
    </div>
    <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Buy Now
    </div>
  </div>,
  <div
    className="flex flex-col gap-[18px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] md:ml-[-275%] lg:w-[30%] lg:ml-[-325%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">Airtime Conversion</div>
    <div className="text-[12px] lg:text-[16px]">
      You can quickly convert your bulk airtime to get cash to your wallet or
      bank account in just few minutes.
    </div>
    <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Buy Now
    </div>
  </div>,
  <div
    className="flex flex-col gap-[18px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] md:ml-[-330%] lg:w-[30%] lg:ml-[-390%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">Bulk SMS</div>
    <div className="text-[12px] lg:text-[16px]">
      Try our bulk SMS service now and take your communication to the next
      level.
    </div>
    <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md ">
      Buy Now
    </div>
  </div>,
  <div
    className="flex flex-col gap-[10px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] md:ml-[-385%] lg:w-[30%] lg:ml-[-455%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">Recharge Card Printing</div>
    <div className="text-[12px] lg:text-[16px]">
      Try our RCP service today, print recharge cards with your business name
      and make a resell without any hassle.
    </div>
    <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Buy Now
    </div>
  </div>,
];

const secondItems = [
  <div
    className="flex flex-col gap-[10px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] lg:w-[30%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">Wallet System</div>
    <div className="text-[12px] lg:text-[16px]">
      You can conveniently store, send, and receive money without any hassle by
      using our user-friendly wallet system.
    </div>
    <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Explore
    </div>
  </div>,
  <div
    className="flex flex-col gap-[10px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] md:ml-[-55%] lg:w-[30%] lg:ml-[-65%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">Global Virtual Accounts</div>
    <div className="text-[12px] lg:text-[16px]">
      Try our global virtual accounts services today and experience hassle-free
      banking at your fingertips.
    </div>
    <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Buy Now
    </div>
  </div>,
  <div
    className="flex flex-col gap-[10px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] md:ml-[-110%] lg:w-[30%] lg:ml-[-130%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">Card Payment</div>
    <div className="text-[12px] lg:text-[16px]">
      Whether you're shopping online or in-store, our card payment solutions
      offer fast and hassle-free transactions.
    </div>
    <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Buy Now
    </div>
  </div>,
  <div
    className="flex flex-col gap-[18px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] md:ml-[-165%] lg:w-[30%] lg:ml-[-195%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">Money Transfer</div>
    <div className="text-[12px] lg:text-[16px]">
      With our dependable money transfer services, you can send and receive
      money without any hassle.
    </div>
    <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Buy Now
    </div>
  </div>,
  <div
    className="flex flex-col gap-[18px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] md:ml-[-220%] lg:w-[30%] lg:ml-[-260%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">International Payment</div>
    <div className="text-[12px] lg:text-[16px]">
      With our international payment structure, you can send and receive money
      from anywhere in the world.
    </div>
    <div className="bg-[#04177f] w-[30%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Buy Now
    </div>
  </div>,
];

const thirdItems = [
  <div
    className="flex flex-col gap-[20px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] lg:w-[30%] "
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">Content Marketing</div>
    <div className="text-[12px] lg:text-[16px]">
      Content marketing is a powerful tool for businesses looking to connect
      with their audience and drive engagement.
    </div>
    <div className="bg-[#04177f] w-[35%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Learn More...
    </div>
  </div>,
  <div
    className="flex flex-col gap-[20px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] md:ml-[-55%] lg:w-[30%] lg:ml-[-65%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">Social Media Marketing</div>
    <div className="text-[12px] lg:text-[16px]">
      Try our global virtual accounts services today and experience hassle-free
      banking at your fingertips.
    </div>
    <div className="bg-[#04177f] w-[35%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Learn More...
    </div>
  </div>,
  <div
    className="flex flex-col gap-[20px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] md:ml-[-110%] lg:w-[30%] lg:ml-[-130%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">SEO Marketing</div>
    <div className="text-[12px] lg:text-[16px]">
      SEO is the practice of optimizing your website and its content to improve
      its visibility and ranking on search engine results pages.
    </div>
    <div className="bg-[#04177f] w-[35%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Learn More...
    </div>
  </div>,
  <div
    className="flex flex-col gap-[20px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] md:ml-[-165%] lg:w-[30%] lg:ml-[-195%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">Email Marketing</div>
    <div className="text-[12px] lg:text-[16px]">
      Your business needs an email marketing strategy that boost sales and
      create a bond with your customers.
    </div>
    <div className="bg-[#04177f] w-[35%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Learn More...
    </div>
  </div>,
  <div
    className="flex flex-col gap-[15px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] md:ml-[-220%] lg:w-[30%] lg:ml-[-260%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">Product Design</div>
    <div className="text-[12px] lg:text-[16px]">
      Product design is the process of identifying a market opportunity, clearly
      defining the problem, and validating the solution with real user
      interfaces.
    </div>
    <div className="bg-[#04177f] w-[35%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Learn More...
    </div>
  </div>,
  <div
    className="flex flex-col gap-[15px] w-[70%] p-[5%] rounded-md bg-[#F2FAFF] md:w-[40%] md:p-[3%] md:ml-[-275%] lg:w-[30%] lg:ml-[-325%]"
    style={{ boxShadow: "0px 0px 11.676px rgba(28, 12, 249, 0.5)" }}
  >
    <div className="font-medium lg:text-[24px]">Graphic Design</div>
    <div className="text-[12px] lg:text-[16px]">
      Graphic design is the creation of visual compositions to solve problems
      and communicate ideas through typography, imagery, color, and form.
    </div>
    <div className="bg-[#04177f] w-[35%] text-[9px] mt-[10%] text-[#ffffff] p-[3%] text-center rounded-md">
      Learn More...
    </div>
  </div>,
];

const feedback = [
  <div className="bg-[#D9D9D9] h-[61px] w-[72px] md:h-[135px] md:w-[160px] lg:h-[243px] lg:w-[288px]"></div>,
  <div className="bg-[#D9D9D9] h-[61px] w-[72px] ml-[-75%] md:h-[135px] md:w-[160px] lg:h-[243px] lg:w-[288px]"></div>,
  <div className="bg-[#D9D9D9] h-[61px] w-[72px] ml-[-150%] md:h-[135px] md:w-[160px] lg:h-[243px] lg:w-[288px]"></div>,
  <div className="bg-[#D9D9D9] h-[61px] w-[72px] ml-[-225%] md:h-[135px] md:w-[160px] lg:h-[243px] lg:w-[288px]"></div>,
];

export const Home = () => {
  const [firstDrop, setFirstDrop] = useState(false);
  const [secondDrop, setSecondDrop] = useState(false);
  const [buttonText, setButtonText] = useState("More");
  const [buttonTextTwo, setButtonTextTwo] = useState("More");
  // const [icon, setIcon] = useState(<RiArrowDropDownLine />);

  function handleClick() {
    setFirstDrop((prev) => !prev);
    setButtonText((prevText) => (prevText === "More" ? "Less" : "More"));
    // setIcon((prev) =>
    //   prev === (<RiArrowDropDownLine /> )? (
    //     <RiArrowDropUpLine />
    //   ) : (
    //     <RiArrowDropDownLine />
    //   )
    // );
  }

  function handleClickTwo() {
    setSecondDrop((prev) => !prev);
    setButtonTextTwo((prevText) => (prevText === "More" ? "Less" : "More"));
  }
  return (
    <>
      <div className={styles.hero}>
        <div className=" w-[90%] pt-[40%] mx-auto md:pt-[10%] md:w-[] lg:pt-[25%]">
          <div className=" tracking-widest w-[100%] text-[#04177F] text-[20px] font-semibold leading-[40px] md:text-[25px] lg:text-[45px] lg:font-medium lg:leading-[60px]">
            The One-Stop Shop for Individuals and Businesses for Telecom,
            Payments, and Digital Services.
          </div>
          <div className="text-[12px] w-[%] mt-[5%] lg:text-[18px] lg:w-[515px]">
            With AremxyPlug's robust APIs and software solutions intended to
            help you increase2 revenue, you can accept payments and transfer
            money internationally.
          </div>
          <div className="flex gap-[6%] mt-[5%]">
            <button className="bg-[#04177F] text-[#ffffff] p-[3%] rounded-lg w-[108px] text-[10px] lg:w-[25%] lg:text-[20px] lg:p-[1%]">
              Sign up
            </button>
            <button className="bg-[#04177F] text-[#ffffff] p-[3%] rounded-lg w-[108px] text-[10px] lg:w-[25%] lg:text-[20px] lg:p-[1%]">
              Sign in
            </button>
          </div>
        </div>
        <img
          className="mx-auto mt-[12%] md:w-[40%] md:h-[30%] lg:w-[50%] lg:h-[40%]"
          src="./Images/macpro.png"
          alt="/"
        />
      </div>

      {/* WHY CHOOSE US */}
      <div className="flex flex-col bg-[#04177F] text-[#ffffff] px-[5%] py-[15%] gap-[30px] lg:py-[8%] lg:px-[8%]">
        <div>
          <p className="text-[20px] font-semibold text-center md:text-[26px] lg:text-[45px]">
            Why Choose Us?
          </p>
          <div className="text-[12px] text-center w-[95%] lg:text-[18px]">
            The team at AremxyPlug is made up of a variety of individuals who
            share the traits of resilience and problem-solving abilities. As a
            result, we made the decision to pool our resources and develop a
            platform that offers services for your digital needs.
          </div>
        </div>
        <div className="md:grid md:grid-cols-3 md:mt-[5%] md:gap-y-[25%]">
          <div className="mb-[20px]">
            <p className="text-[20px] font-semibold text-center md:text-left md:text-[14px] md:mb-[5%] lg:text-[24px]">
              Reliable
            </p>
            <div className="text-[12px] text-center w-[95%] md:text-left md:w-[100%] md:text-[10px] lg:text-[16px]">
              We use technology to provide business solutions that open up new
              possibilities, and enhance company's productivity.
            </div>
          </div>
          <div className="mb-[20px]">
            <p className="text-[20px] font-semibold text-center md:text-left md:text-[14px] md:mb-[5%] lg:text-[24px]">
              Trusted
            </p>
            <div className="text-[12px] text-center w-[95%] md:text-left md:w-[100%] md:text-[10px] lg:text-[16px]">
              We built reputation as a trusted service provider to deliver
              high-quality services with honesty, integrity, and transparency.
            </div>
          </div>
          <div>
            <p className="text-[20px] font-semibold text-center md:text-left md:text-[14px] md:mb-[5%] lg:text-[24px]">
              Affordable
            </p>
            <div className="text-[12px] text-center w-[95%] md:text-left md:w-[100%] md:text-[10px] lg:text-[16px]">
              We offer competitive and affordable pricing to ensure that our
              services are accessible to everyone.
            </div>
          </div>
          <div>
            <p className="hidden md:block lg:block text-[20px] font-semibold text-center md:text-left md:text-[14px] md:mb-[5%] lg:text-[24px]">
              Swift 24/7 Delivery
            </p>
            <div className="hidden md:block lg:block text-[12px] text-center w-[95%] md:text-left md:w-[100%] md:text-[10px] lg:text-[16px] ">
              We offer swift 24/7 delivery to ensure that your needs are met
              promptly and efficiently.
            </div>
          </div>
          <div>
            <p className="hidden md:block lg:block text-[20px] font-semibold text-center md:text-left md:text-[14px] md:mb-[5%] lg:text-[24px]">
              Secure and Automated
            </p>
            <div className="hidden md:block lg:block text-[12px] text-center w-[95%] md:text-left md:w-[100%] md:text-[10px] lg:text-[16px]">
              We use the latest security protocols and technologies to protect
              your data and information.
            </div>
          </div>
          <div>
            <p className="hidden md:block lg:block text-[20px] font-semibold text-center md:text-left md:text-[14px] md:mb-[5%] lg:text-[24px]">
              Customer Support
            </p>
            <div className="hidden md:block lg:block text-[12px] text-center w-[95%] md:text-left md:w-[100%] md:text-[10px] lg:text-[16px]">
              We value your feedback and strive to provide exceptional customer
              support when you need help.
            </div>
          </div>
        </div>
        {firstDrop && (
          <>
            <div>
              <p className="text-[20px] font-semibold text-center">
                Swift 24/7 Delivery
              </p>
              <div className="text-[12px] text-center w-[95%]">
                We offer swift 24/7 delivery to ensure that your needs are met
                promptly and efficiently.
              </div>
            </div>
            <div>
              <p className="text-[20px] font-semibold text-center">
                Secure and Automated
              </p>
              <div className="text-[12px] text-center w-[95%]">
                We use the latest security protocols and technologies to protect
                your data and information.
              </div>
            </div>
            <div>
              <p className="text-[20px] font-semibold text-center">
                Customer Support
              </p>
              <div className="text-[12px] text-center w-[95%]">
                We value your feedback and strive to provide exceptional
                customer support when you need help.
              </div>
            </div>
          </>
        )}
        <div
          className="md:hidden flex justify-center items-center font-semibold text-[#04177F] bg-[#ffffff] w-[25%] mx-auto rounded-md p-[2%]"
          onClick={handleClick}
        >
          <div className="text-[12px]">{buttonText}</div>
          <div className="w-[11px] text-[20px]  ">
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>

      {/* ABOUT US */}
      <div className="px-[5%] flex flex-col gap-[20px] py-[20%] md:flex-row md:justify-center md:items-center md:py-[10%] lg:py-[5%] lg:gap-[10px] lg:px-[8%]">
        <div className="flex flex-col gap-[15px]">
          <div className="text-[20px] font-semibold text-center text-[#04177F] md:text-left md:text-[26px] lg:text-[45px]">
            About Us
          </div>
          <p className="text-[12px] md:text-[10px] lg:text-[16px] lg:w-[80%]">
            AremxyPlug is a business enterprise and telecommunication service
            provider that offers individuals and businesses full access to
            quick, secure, and dependable solutions for their digital and
            telecommunication service needs.
            <br />
            <br />
            At AremxyPlug, we provide seamless and limitless digital living
            needs to our users. Our objectives are to operate transparent and
            secure transactions, provide quick and dependable services, and to
            ensure that our services take our customers to the pinnacle of their
            aspirations in order to be the best service provider.
          </p>
          <div className="mx-auto flex text-[12px] bg-[#04177F] text-[#ffffff] w-[28%] h-[35px] justify-center items-center rounded-md md:mx-[0px] md:text-[14px] lg:w-[20%] lg:h-[40px]">
            Learn more
          </div>
        </div>
        <img
          className="w-[65%] mx-auto py-[5%] md:w-[50%]"
          src="./Images/illustration.png"
          alt="/"
        />
      </div>

      {/* OUR SERVICE */}
      <div className="bg-[#04177f] flex flex-col gap-[15px] py-[7%] h-[] lg:px-[8%]">
        <div className="text-[20px] text-[#ffffff] font-semibold text-center md:text-[25px] lg:text-[45px]">
          Our Services
        </div>
        <div className="md:grid md:grid-cols-2 flex flex-col gap-[15px]">
          <div className="flex items-center gap-[2%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[28%] h-[80px] lg:w-[40%] lg:h-[120px]"
              src="./Images/telecom.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                Telecom
              </div>
              <div className="text-[9px] tracking-wide w-[100%] lg:text-[16px]">
                We offer secure VTU development, affordable airtime, and data
                purchase.
              </div>
              <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px]">
                Learn More
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[2%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[34%] h-[75px] lg:w-[30%] lg:h-[90px]"
              src="./Images/payment.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                Payment
              </div>
              <div className="text-[9px] tracking-wide w-[100%] lg:text-[16px]">
                Our payment solutions ensure our clients have the utmost control
                of their finances.
              </div>
              <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px]">
                Learn More
              </div>
            </div>
          </div>
          <div className="flex items-center gap-[2%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[30%] h-[55px] lg:w-[30%] lg:h-[90px]"
              src="./Images/cardissuing.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                Card Issuing
              </div>
              <div className="text-[9px] tracking-wide w-[100%] lg:text-[16px]">
                We issue 3D secured virtual and physical debit USD and NGN cards
                to both individuals and businesses.
              </div>
              <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px]">
                Learn More
              </div>
            </div>
          </div>

          <div className="hidden sm:flex items-center gap-[2%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[28%] h-[80px] lg:w-[40%] lg:h-[120px]"
              src="./Images/digital.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                Digital Services
              </div>
              <div className="text-[9px] tracking-wide w-[100%] lg:text-[16px]">
                We offer a variety of digital services that can be customized to
                fit your company's needs.
              </div>
              <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px]">
                Learn More
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-[2%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[28%] h-[80px] md:h-[60px] lg:w-[30%] lg:h-[90px]"
              src="./Images/VTU.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                VTU Development
              </div>
              <div className="text-[9px] tracking-wide w-[100%] lg:text-[16px]">
                We develop a VTU website with services like airtime top-up, data
                bundles, and bills payment platform.
              </div>
              <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px]">
                Learn More
              </div>
            </div>
          </div>
          <div className="hidden sm:flex items-center gap-[2%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
            <img
              className="w-[28%] h-[80px] lg:w-[30%] lg:h-[90px]"
              src="./Images/Business.png"
              alt="/"
            />
            <div>
              <div className="text-[13px] font-semibold lg:text-[24px]">
                Business Development
              </div>
              <div className="text-[9px] tracking-wide w-[100%] lg:text-[16px]">
                When it comes to business development, trust us to save you time
                and stress.
              </div>
              <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md lg:text-[14px]">
                Learn More
              </div>
            </div>
          </div>
        </div>

        {secondDrop && (
          <>
            <div className="flex gap-[2%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
              <img
                className="w-[28%] h-[80px]"
                src="./Images/telecom.png"
                alt="/"
              />
              <div>
                <div className="text-[13px] font-semibold">
                  Digital Services
                </div>
                <div className="text-[9px] tracking-wide w-[100%]">
                  We offer a variety of digital services that can be customized
                  to fit your company's needs.
                </div>
                <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md">
                  Learn More
                </div>
              </div>
            </div>
            <div className="flex gap-[2%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
              <img
                className="w-[28%] h-[80px]"
                src="./Images/telecom.png"
                alt="/"
              />
              <div>
                <div className="text-[13px] font-semibold">VTU Development</div>
                <div className="text-[9px] tracking-wide w-[100%]">
                  We develop a VTU website with services like airtime top-up,
                  data bundles, and bills payment platform.
                </div>
                <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md">
                  Learn More
                </div>
              </div>
            </div>
            <div className="flex gap-[2%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
              <img
                className="w-[28%] h-[80px]"
                src="./Images/telecom.png"
                alt="/"
              />
              <div>
                <div className="text-[13px] font-semibold">
                  Business Development
                </div>
                <div className="text-[9px] tracking-wide w-[100%]">
                  When it comes to business development, trust us to save you
                  time and stress.
                </div>
                <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md">
                  Learn More
                </div>
              </div>
            </div>{" "}
          </>
        )}
        <div
          className="md:hidden lg:hidden flex justify-center items-center font-semibold text-[#04177F] bg-[#ffffff] w-[25%] mx-auto rounded-md p-[2%]"
          onClick={handleClickTwo}
        >
          <div className="text-[12px]">{buttonTextTwo}</div>
          <div className="w-[11px] text-[20px]  ">
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>

      {/* SERVICES CONTINUED */}
      <div className="px-[5%] py-[10%] lg:px-[8%] lg:py-[0%] lg:pt-[5%]">
        <div className="">
          <div className="flex justify-between items-center text-[#04177f] font-semibold text-[20px] md:justify-left lg:text-[30px]">
            Telecom Services
            <div>
              <AiFillMinusCircle />
            </div>
          </div>
          <div className="text-[12px] mt-[5%] md:w-[60%] lg:text-[18px] ">
            We are the telecom company you can trust, with affordable prices and
            excellent customer support. Sign up today and start enjoying
            seamless Telecom service!
          </div>
        </div>
        {/* <br /> */}
        <br />
        <AliceCarousel
          mouseTracking
          disableDotsControls
          // autoHeight
          items={items}
        />
      </div>

      <div className="px-[5%] py-[10%] lg:px-[8%] lg:py-[0%]">
        <div className="">
          <div className="flex justify-between items-center text-[#04177f] font-semibold text-[20px] lg:text-[30px]">
            Payment Services
            <div>
              <AiFillMinusCircle />
            </div>
          </div>
          <div className="text-[12px] mt-[5%] lg:text-[18px]">
            We offer quick and secure payment processing to make sure your
            transactions go off without a hitch, using our user-friendly
            interface to receive money both locally and internationally.
          </div>
        </div>
        <br />
        {/* <br /> */}
        <AliceCarousel
          mouseTracking
          disableDotsControls
          // autoHeight
          items={secondItems}
        />
      </div>

      <div className="px-[5%] py-[10%] lg:px-[8%] lg:py-[0%]">
        <div className="">
          <div className="flex justify-between items-center text-[#04177f] font-semibold text-[20px] lg:text-[30px]">
            Digital Services
            <div>
              <AiFillMinusCircle />
            </div>
          </div>
          <div className="text-[12px] mt-[5%] lg:text-[18px]">
            We offer a variety of digital services that can be customized to fit
            your company's needs. Our services are affordable and designed to
            deliver outstanding results for your company.
          </div>
        </div>
        <br />
        {/* <br /> */}
        <AliceCarousel
          mouseTracking
          disableDotsControls
          // autoHeight
          items={thirdItems}
        />
      </div>

      {/* CARD ISSUING */}
      <div className="flex flex-col gap-[50px] bg-[#04177f] px-[5%] text-[#ffffff] py-[7%] md:flex-row md:px-[8%] md:gap-[10px] lg:gap-[30px]">
        <div>
          <div className="text-[20px] font-medium text-center mb-[4%] md:text-[26px] md:text-left lg:text-[45px]">
            Card Issuing
          </div>
          <div className="text-[12px] md:text-[10px] md:leading-2 md:tracking-widest lg:text-[18px]">
            Our card issuing service can be tailored to your specific needs as
            an Individual or business. we issue 3D secured virtual and physical
            debit USD and NGN cards to spend anywhere Verve, Visa, and
            Mastercard are accepted, both in-store and online, anytime,
            anywhere.
          </div>
        </div>
        <img
          className="md:w-[40%] h-[] lg:w-[50%]"
          src="./Images/cards.png"
          alt="/"
        />
      </div>

      {/* CROSS-BORDER PAYMENT */}
      <div className="mx-[5%] flex flex-col gap-[30px] my-[10%] md:flex-row md:justify-center md:items-center md:gap-[25%] md:mx-[8%] lg:gap-[15%]">
        <div className="">
          <div className="text-[20px] text-[#04177F] text-center font-medium md:text-[18px] md:text-left">
            Cross-border Payment
          </div>
          <div className="text-[12px] md:text-[15px] lg:w-[60%] lg:tracking-widest">
            Our cross-border payment services make it simple and practical to
            send money to family and friends, receive money both locally and
            internationally.
          </div>
        </div>
        <img
          className="w-[50%] mx-auto md:w-[25%]"
          src="./Images/Group2.png"
          alt="/"
        />
      </div>

      {/* CURRENCY CONVERSION */}
      <div className="mx-[5%] flex flex-col gap-[30px] mb-[10%] md:flex-row md:justify-center md:items-center md:gap-[25%] md:mx-[8%] lg:gap-[15%]">
        <div className="">
          <div className="text-[20px] text-[#04177F] text-center font-medium md:text-[18px] md:text-left">
            Currency Conversion
          </div>
          <div className="text-[12px] md:text-[15px] lg:w-[60%] lg:tracking-widest">
            With our currency conversion service, you can get the most
            convenient exchange rates and convert any currency in a matter of
            seconds with no hidden fees.
          </div>
        </div>
        <div className="flex md:gap-[10%] md:justify-center">
          <img
            className="w-[40%] mx-auto md:w-[80%]"
            src="./Images/currency1.png"
            alt="/"
          />
          <img
            className="w-[40%] mx-auto md:w-[80%]"
            src="./Images/currency2.png"
            alt="/"
          />
        </div>
      </div>

      {/* MULTI-CURRENCY WALLETS */}
      <div className="mx-[5%] flex flex-col gap-[30px] mb-[10%] md:flex-row md:justify-center md:items-center md:gap-[25%] md:mx-[8%]">
        <div className="">
          <div className="text-[20px] text-[#04177F] text-center font-medium md:text-[18px] md:text-left">
            Multi-Currency Wallets
          </div>
          <div className="text-[12px] md:text-[15px] lg:w-[60%] lg:tracking-widest">
            Our Multi-Currency Wallets services are the best way to manage all
            your currencies, keep a track and conveniently store, send, and
            receive digital assets in one location.
          </div>
        </div>
        <img
          className="w-[60%] mx-auto md:w-[25%]"
          src="./Images/currency3.png"
          alt="/"
        />
      </div>

      {/* BECOME AN AGENT */}
      <div className="mx-[5%] mb-[15%] md:flex md:flex-row md:justify-center md:items-center md:gap-[15%] md:mx-[8%] ">
        <div className="flex flex-col gap-[30px] md:gap-[15px] lg:gap-[40px ">
          <div className="text-[20px] text-[#04177F] text-center font-medium md:text-[18px] md:text-left">
            Become an Agent
          </div>
          <div className="text-[12px] md:text-[15px] lg:tracking-widest">
            Becoming AremxyPlug agent will be a lucrative and rewarding
            opportunity. You will have the opportunity to make money while
            giving your clients beneficial services.
            <br />
            <br />
            Depending on your needs and goal, you can decide whether to work
            full- or part-time. You will assist clients in managing their
            accounts, making payments using digital tools that can simplify
            their lives and work at your own schedule. 
          </div>
          <div className="text-[10px] bg-[#04177f] w-[45%] text-center text-[#ffffff] p-[2%] rounded-md mx-auto md:mx-0 lg:text-[15px] lg:font-semibold">
            Join Our Agent Program
          </div>
        </div>
        <img
          className=" w-[50%] mx-auto mt-[10%] md:w-[25%] lg:mt-[0%]"
          src="./Images/agent.png"
          alt="/"
        />
      </div>

      <div className="bg-[#04177f] text-[#ffffff] py-[5%] px-[5%] flex flex-col gap-[50px] md:flex-row md:justify-center md:items-center">
        <img
          className="w-[80%] mx-auto md:w-[40%] md:h-[40%] lg:w-[30%]"
          src="./Images/chart.png"
          alt="/"
        />
        <div className="flex flex-col gap-[30px] lg:w-[50%]">
          <div className="text-center text-[20px] font-semibold md:text-left lg:text-[30px]">
            Earn on Our Platform
          </div>
          <div className="text-[12px] tracking-wide lg:text-[16px]">
            You have the opportunity to earn with AremxyPlug, The Nigeria's
            fastest-growing payment company to distribute in-demand services
            throughout your network and beyond.
            <br />
            <br />
            With services like airtime top-up, data bundles, education pins,
            among others, you can generate revenue using our API and Earn a 50%
            bonus on all of our services when you refer a friend.
          </div>
          <div className="mx-auto bg-[#ffffff] text-[#04177f] p-[3%] text-[10px] font-bold w-[35%] text-center rounded-md md:mx-[0px] lg:text-[14px] lg:w-[30%] lg:font-extrabold">
            Learn More
          </div>
        </div>
      </div>

      {/* OUR PARTNERS */}
      <div
        className="flex flex-col gap-[20px] py-[20%] md:py-[5%]
      "
      >
        <div className="text-[20px] text-[#04177f] text-center font-semibold lg:text-[30px] lg:font-bold">
          Our Partners
        </div>
        <img
          className="w-[60%] md:w-[50%] mx-auto lg:w-[30%]"
          src="./Images/network.png"
          alt="/"
        />
      </div>

      <div className="px-[5%] py-[5%] flex flex-col gap-[20px] bg-[#04177f] text-[#ffffff] md:flex-row md:gap-[70px] md:jsutfiy-center md:items-center lg:gap-[90px] lg:tracking-widest ">
        <div className="flex flex-col gap-[25px]">
          <div className="text-[20px] text-center md:text-[17px] md:text-left lg:text-[30px] lg:font-bold">
            Are you a Developer?
          </div>
          <div className="text-[12px] tracking-widermd:text-[11px] lg:text-[18px] lg:w-[90%]">
            AremxyPlug API offers robust and comprehensive functionality that
            developers can use to build high-quality applications with several
            features, such as data access, integration with third-party
            services, and custom workflows. Our API is well-documented and it
            provides clear instructions for integration and usage, with
            easy-to-use integration with your existing workflows.
          </div>
          <div className="text-[20px] mx-auto w-[60%] md:mx-0 lg:text-[30px] lg:font-bold lg:w-[40%]">
            A Well Documented Easy-to-use API
          </div>
        </div>
        <img
          className="md:w-[40%] md:h-[40%] lg:w-[30%] lg:h-[30%]"
          src="./Images/codegif.png"
          alt="/"
        />
      </div>

      {/* FEEDBACK */}
      <div className="py-[15%] mx-[5%]">
        <div className="text-[#04177f] text-center font-semibold text-[20px] lg:text-[30px] lg:font-bold mb-[5%]">
          Feedbacks
        </div>
        <AliceCarousel
          mouseTracking
          disableButtonsControls
          items={feedback}
          swipeExtraPadding
          // touchTracking
        />
      </div>

      {/* FREQUENTLY ASKED QUESTIONS */}
      <div className="mx-[5%] mb-[25%]">
        <div className="text-[#04177f] text-[25px] font-semibold text-center">
          Frequently Asked Questions
        </div>
        <br />
        <div className="flex flex-col gap-[10px] md:gap-[20px]">
          <div
            className="flex p-1 rounded-md md:p-4"
            style={{ boxShadow: "0px 0px 11.14427px rgba(28, 12, 249, 0.5)" }}
          >
            <div className="text-[#04177f] text-xl">
              <RiArrowDropDownLine />
            </div>
            <div>************************</div>
          </div>
          <div
            className="flex p-1 rounded-md md:p-4"
            style={{ boxShadow: "0px 0px 11.14427px rgba(28, 12, 249, 0.5)" }}
          >
            <div className="text-[#04177f] text-xl">
              <RiArrowDropDownLine />
            </div>
            <div>************************</div>
          </div>
          <div
            className="flex p-1 rounded-md md:p-4"
            style={{ boxShadow: "0px 0px 11.14427px rgba(28, 12, 249, 0.5)" }}
          >
            <div className="text-[#04177f] text-xl">
              <RiArrowDropDownLine />
            </div>
            <div>************************</div>
          </div>
          <div
            className="flex p-1 rounded-md md:p-4"
            style={{ boxShadow: "0px 0px 11.14427px rgba(28, 12, 249, 0.5)" }}
          >
            <div className="text-[#04177f] text-xl">
              <RiArrowDropDownLine />
            </div>
            <div>************************</div>
          </div>
          <div
            className="flex p-1 rounded-md md:p-4"
            style={{ boxShadow: "0px 0px 11.14427px rgba(28, 12, 249, 0.5)" }}
          >
            <div className="text-[#04177f] text-xl">
              <RiArrowDropDownLine />
            </div>
            <div>************************</div>
          </div>
          <div
            className="flex p-1 rounded-md md:p-4"
            style={{ boxShadow: "0px 0px 11.14427px rgba(28, 12, 249, 0.5)" }}
          >
            <div className="text-[#04177f] text-xl">
              <RiArrowDropDownLine />
            </div>
            <div>************************</div>
          </div>
        </div>
      </div>
    </>
  );
};

// #04177F
// {

// }
