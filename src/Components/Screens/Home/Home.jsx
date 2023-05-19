import React, { useState } from "react";
import styles from "./Home.module.css";
import { RiArrowDropDownLine } from "react-icons/ri";

export const Home = () => {
  const [firstDrop, setFirstDrop] = useState(false);
  const [secondDrop, setSecondDrop] = useState(false);
  return (
    <>
      <div className={styles.hero}>
        <div className=" w-[90%] pt-[40%] mx-auto">
          <div className="tracking-widest w-[312px] h-[120px] text-[#04177F] text-[20px] font-semibold leading-[30px] ">
            The One-Stop Shop for Individuals and Businesses for Telecom,
            Payments, and Digital Services.
          </div>
          <div className="text-[12px] w-[290px] mt-[5%]">
            With AremxyPlug's robust APIs and software solutions intended to
            help you increase2 revenue, you can accept payments and transfer
            money internationally.
          </div>
          <div className="flex gap-[6%] mt-[5%]">
            <button className="bg-[#04177F] text-[#ffffff] p-[3%] rounded-lg w-[108px] text-[10px]">
              Sign up
            </button>
            <button className="bg-[#04177F] text-[#ffffff] p-[3%] rounded-lg w-[108px] text-[10px]">
              Sign in
            </button>
          </div>
        </div>
        <img className="mx-auto mt-[12%]" src="./Images/macpro.png" alt="/" />
      </div>

      {/* WHY CHOOSE US */}
      <div className="flex flex-col bg-[#04177F] text-[#ffffff] px-[5%] py-[10%] gap-[15px]">
        <p className="text-[20px] font-semibold text-center">Why Choose Us?</p>
        <div className="text-[12px] text-center w-[95%]">
          The team at AremxyPlug is made up of a variety of individuals who
          share the traits of resilience and problem-solving abilities. As a
          result, we made the decision to pool our resources and develop a
          platform that offers services for your digital needs.
        </div>
        <p className="text-[20px] font-semibold text-center">Reliable</p>
        <div className="text-[12px] text-center w-[312px]">
          We use technology to provide business solutions that open up new
          possibilities, and enhance company's productivity.
        </div>
        <p className="text-[20px] font-semibold text-center">Trusted</p>
        <div className="text-[12px] text-center w-[95%]">
          We built reputation as a trusted service provider to deliver
          high-quality services with honesty, integrity, and transparency.
        </div>
        <p className="text-[20px] font-semibold text-center">Affordable</p>
        <div className="text-[12px] text-center w-[95%]">
          We offer competitive and affordable pricing to ensure that our
          services are accessible to everyone.
        </div>
        {firstDrop && (
          <>
            <p className="text-[20px] font-semibold text-center">
              Swift 24/7 Delivery
            </p>
            <div className="text-[12px] text-center w-[95%]">
              We offer swift 24/7 delivery to ensure that your needs are met
              promptly and efficiently.
            </div>
            <p className="text-[20px] font-semibold text-center">
              Secure and Automated
            </p>
            <div className="text-[12px] text-center w-[95%]">
              We use the latest security protocols and technologies to protect
              your data and information.
            </div>
            <p className="text-[20px] font-semibold text-center">
              Customer Support
            </p>
            <div className="text-[12px] text-center w-[95%]">
              We value your feedback and strive to provide exceptional customer
              support when you need help.
            </div>
          </>
        )}
        <div
          className="flex justify-center items-center font-semibold text-[#04177F] bg-[#ffffff] w-[25%] mx-auto rounded-md p-[2%]"
          onClick={() => setFirstDrop((prev) => !prev)}
        >
          <div className="text-[12px]">More</div>
          <div className="w-[11px] text-[20px]  ">
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>


      {/* ABOUT US */}
      <div className="px-[5%] flex flex-col gap-[20px] py-[20%]">
        <div className="text-[20px] font-semibold text-center text-[#04177F]">
          About Us
        </div>
        <p className="text-[12px]">
          AremxyPlug is a business enterprise and telecommunication service
          provider that offers individuals and businesses full access to quick,
          secure, and dependable solutions for their digital and
          telecommunication service needs.
          <br />
          <br />
          At AremxyPlug, we provide seamless and limitless digital living needs
          to our users. Our objectives are to operate transparent and secure
          transactions, provide quick and dependable services, and to ensure
          that our services take our customers to the pinnacle of their
          aspirations in order to be the best service provider.
        </p>
        <div className="mx-auto flex text-[12px] bg-[#04177F] text-[#ffffff] w-[28%] h-[35px] justify-center items-center rounded-md">
          Learn more
        </div>
        <img
          className="w-[65%] mx-auto py-[5%]"
          src="./Images/illustration.png"
          alt="/"
        />
      </div>


      {/* OUR SERVICE */}
      <div className="bg-[#04177f] flex flex-col gap-[15px] py-[7%] h-[]">
        <div className="text-[20px] text-[#ffffff] font-semibold text-center">
          Our Service
        </div>
        <div className="flex items-center gap-[2%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
          <img
            className="w-[28%] h-[80px]"
            src="./Images/telecom.png"
            alt="/"
          />
          <div>
            <div className="text-[13px] font-semibold">Telecom</div>
            <div className="text-[9px] tracking-wide w-[100%]">
              We offer secure VTU development, affordable airtime, and data
              purchase.
            </div>
            <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md">
              Learn More
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[2%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
          <img
            className="w-[34%] h-[75px]"
            src="./Images/payment.png"
            alt="/"
          />
          <div>
            <div className="text-[13px] font-semibold">Payment</div>
            <div className="text-[9px] tracking-wide w-[100%]">
              Our payment solutions ensure our clients have the utmost control
              of their finances.
            </div>
            <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md">
              Learn More
            </div>
          </div>
        </div>
        <div className="flex items-center gap-[2%] bg-[#E2F3FF] p-[5%] mx-[5%] rounded-md">
          <img
            className="w-[30%] h-[55px]"
            src="./Images/cardissuing.png"
            alt="/"
          />
          <div>
            <div className="text-[13px] font-semibold">Card Issuing</div>
            <div className="text-[9px] tracking-wide w-[100%]">
              We issue 3D secured virtual and physical debit USD and NGN cards
              to both individuals and businesses.
            </div>
            <div className="bg-[#04177f] mt-[10%] w-[35%] text-[9px] text-[#ffffff] p-[3%] text-center rounded-md">
              Learn More
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
          className="flex justify-center items-center font-semibold text-[#04177F] bg-[#ffffff] w-[25%] mx-auto rounded-md p-[2%]"
          onClick={() => setSecondDrop((prev) => !prev)}
        >
          <div className="text-[12px]">More</div>
          <div className="w-[11px] text-[20px]  ">
            <RiArrowDropDownLine />
          </div>
        </div>
      </div>

      
    </>
  );
};

// #04177F
// {

// }
