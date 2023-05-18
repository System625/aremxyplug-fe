import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { SiLinkedin } from "react-icons/si";
import { ImFacebook2 } from "react-icons/im";
import { ImInstagram } from "react-icons/im";
import { SiTwitter } from "react-icons/si";
import { GrMail } from "react-icons/gr";

export const Footer = () => {
  const [firstDrop, setFirstDrop] = useState(false);
  const [secondDrop, setSecondDrop] = useState(false);
  const [thirdDrop, setThirdDrop] = useState(false);

  return (
    <>
      {/* MOBILE VIEW */}
      <div className="md:hidden bg-[#04177F] text-[#ffffff] h-[px] pb-[20%]">
        <img
          className="w-[30%] p-[4%]"
          src="./Images/newaremxy.png"
          alt="/aremxyplug"
        />
        <hr />
        <div className="flex flex-wrap gap-[20%] h-[] w-[261px] pt-[15px] mx-auto ">
          <div className="flex flex-col gap-[15px]">
            <div className="w-[81px] h-[16px] text-[13px] font-semibold">
              AremxyPlug
            </div>
            <div className="w-[40px] h-[13px] text-[9px]">About us</div>
            <div className="w-[40px] h-[13px] text-[9px]">Careers</div>
            <div className="w-[40px] h-[13px] text-[9px]">Customers</div>
            <div className="w-[40px] h-[13px] text-[9px]">Partners</div>
            <div className="w-[80px] h-[13px] text-[9px]">Become an Agent</div>
            {firstDrop && (
              <div className="flex flex-col gap-[20px]">
                <div className="w-[90px] h-[13px] text-[9px]">
                  Become a Merchant
                </div>
                <div className="w-[80px] h-[13px] text-[9px]">
                  Become a Partner
                </div>
              </div>
            )}
            <div className="flex" onClick={() => setFirstDrop((prev) => !prev)}>
              <div className="text-[9px] font-bold">More</div>
              <RiArrowDropDownLine />
            </div>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="w-[81px] h-[16px] text-[13px] font-semibold">
              Product
            </div>
            <div className="w-[40px] h-[13px] text-[9px]">Telecom</div>
            <div className="w-[40px] h-[13px] text-[9px]">Payment</div>
            <div className="w-[80px] h-[13px] text-[9px]">Card issuing</div>
            <div className="w-[80px] h-[13px] text-[9px]">Digital Service</div>
            <div className="w-[80px] h-[13px] text-[9px]">Virtual Account</div>
            {secondDrop && (
              <div className="flex flex-col gap-[20px]">
                <div className="w-[96px] h-[13px] text-[9px]">
                  Currency conversion
                </div>
                <div className="w-[100px] h-[13px] text-[9px]">
                  Multi-Currency Wallet
                </div>
                <div className="w-[96px] h-[13px] text-[9px]">
                  International Payment
                </div>
                <div className="w-[94px] h-[13px] text-[9px]">
                  VTU development
                </div>
                <div className="w-[100px] h-[13px] text-[9px]">
                  Business Development
                </div>
              </div>
            )}
            <div
              className="flex"
              onClick={() => setSecondDrop((prev) => !prev)}
            >
              <div className="text-[9px] font-bold">More</div>
              <RiArrowDropDownLine />
            </div>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="w-[81px] h-[16px] text-[13px] font-semibold">
              Solutions
            </div>
            <div className="w-[40px] h-[13px] text-[9px]">Baas</div>
            <div className="w-[40px] h-[13px] text-[9px]">Saas</div>
            <div className="w-[40px] h-[13px] text-[9px]">Businesses</div>
            <div className="w-[40px] h-[13px] text-[9px]">Individuals</div>
            <div className="w-[40px] h-[13px] text-[9px]">Ecommerce</div>
            {thirdDrop && (
              <div className="flex flex-col gap-[20px]">
                <div className="w-[96px] h-[13px] text-[9px]">Collect</div>
                <div className="w-[100px] h-[13px] text-[9px]">Purchase</div>
                <div className="w-[96px] h-[13px] text-[9px]">Automate</div>
                <div className="w-[94px] h-[13px] text-[9px]">Convert</div>
                <div className="w-[100px] h-[13px] text-[9px]">Transfer</div>
              </div>
            )}
            <div className="flex" onClick={() => setThirdDrop((prev) => !prev)}>
              <div className="text-[9px] font-bold">More</div>
              <RiArrowDropDownLine />
            </div>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="w-[81px] h-[16px] text-[13px] font-semibold">
              Resources
            </div>
            <div className="w-[40px] h-[13px] text-[9px]">Pricing</div>
            <div className="w-[40px] h-[13px] text-[9px]">Support</div>
            <div className="w-[40px] h-[13px] text-[9px]">Blog</div>
            <div className="w-[40px] h-[13px] text-[9px]">FAQs</div>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="w-[81px] h-[16px] text-[13px] font-semibold">
              Contact us
            </div>
            <div className="w-[80px] h-[13px] text-[9px]">Live Chat</div>
            <div className="w-[80px] h-[13px] text-[9px]">Contact Sales</div>
            <div className="w-[80px] h-[13px] text-[9px]">Phone</div>
            <div className="w-[80px] h-[13px] text-[9px]">Email</div>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="w-[81px] h-[16px] text-[13px] font-semibold">
              Developer
            </div>
            <div className="w-[90px] h-[13px] text-[9px]">
              API Documentation
            </div>
            <div className="w-[80px] h-[13px] text-[9px]">API Reference</div>
            <div className="w-[80px] h-[13px] text-[9px]">API Changelog</div>
            <div className="w-[80px] h-[13px] text-[9px]">API status</div>
          </div>

          <div className="flex flex-col gap-[15px]">
            <div className="w-[81px] h-[16px] text-[13px] font-semibold">
              Legal
            </div>
            <div className="w-[90px] h-[13px] text-[9px]">Privacy Policy</div>
            <div className="w-[80px] h-[13px] text-[9px]">
              Terms of Services
            </div>
          </div>
        </div>

        <div className=" flex gap-[30px] justify-center mt-[10%]">
          <div className="flex flex-col h-[52px] gap-[15px]">
            <div className="text-[10px]">Follow Us on</div>
            <div className="flex gap-[12px]">
              <div className="text-lg">
                <SiLinkedin />
              </div>
              <div className="text-lg">
                <ImFacebook2 />
              </div>
              <div className="text-lg">
                <ImInstagram />
              </div>
              <div className="text-lg">
                <SiTwitter />
              </div>
              <div className="text-lg">
                <GrMail />
              </div>
            </div>
            <div className="text-[8px]">Email us at: hello@aremxyplug.com</div>
          </div>

          <div className="flex flex-col gap-[10px]">
            <div className="text-[10px]">Download Our App</div>
            <div className="text-[6px] w-[143px]">
              Discover exclusive deals and accounts with our mobile experience.
            </div>
            <div className="flex">
              <img src="./Images/googleplay.png" alt="/" />
              <img src="./Images/applestore.png" alt="/" />
            </div>
          </div>
        </div>

        <div className="mx-auto mt-[10%] w-[312px] h-[40px] text-[6px]">
          AremxyPlug is a business enterprise and telecommunication service
          provider company, not a bank. We offer telecom products, payments, and
          digital services. Banking services are provided by AremxyPlug’s
          payment partners and banks who are duly licensed by CBN, FCA, FDIC,
          and other regulatory bodies. Debit Card Services are issued by our
          partners who are authorized by VISA and MasterCard to carry out card
          payment services.
        </div>
        <div className="mt-[10%] text-center text-[6px] ">
          ©AremxyPlug 2023. All Rights Reserved.
        </div>
      </div>

      {/* TABLET & DESKTOP VIEW */}
      <div className="hidden md:block bg-[#04177F] text-[#ffffff] pb-[5%] h-[] lg:h-[]">
        <img
          className="w-[20%] p-[4%] ml-9 lg:p-[3%] lg:ml-[4%] lg:w-[19%]"
          src="./Images/newaremxy.png"
          alt="/aremxyplug"
        />
        <hr />

        <div className="flex gap-[20%] w-[261px] pt-[15px] ml-[8%] lg:gap-[40%]">
          <div className="flex flex-col gap-[15px] lg:gap-[25px]">
            <div className="w-[81px] h-[16px] text-[14px] font-semibold lg:text-[25px]">
              AremxyPlug
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              About us
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              Careers
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              Customers
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              Partners
            </div>
            <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
              Become an Agent
            </div>

            <div className="flex flex-col gap-[20px]">
              <div className="w-[90px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                Become a Merchant
              </div>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                Become a Partner
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[15px] lg:gap-[25px]">
            <div className="w-[81px] h-[16px] text-[14px] font-semibold lg:text-[25px]">
              Product
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              Telecom
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              Payment
            </div>
            <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
              Card issuing
            </div>
            <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
              Digital Service
            </div>
            <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
              Virtual Account
            </div>
            <div className="flex flex-col gap-[20px]">
              <div className="w-[96px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                Currency conversion
              </div>
              <div className="w-[100px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                Multi-Currency Wallet
              </div>
              <div className="w-[96px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                International Payment
              </div>
              <div className="w-[94px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                VTU development
              </div>
              <div className="w-[100px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                Business Development
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-[15px] lg:gap-[25px]">
            <div className="w-[81px] h-[16px] text-[14px] font-semibold lg:text-[25px]">
              Solutions
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              Baas
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              Saas
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              Businesses
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              Individuals
            </div>
            <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
              Ecommerce
            </div>

            <div className="flex flex-col gap-[20px]">
              <div className="w-[96px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                Collect
              </div>
              <div className="w-[100px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                Purchase
              </div>
              <div className="w-[96px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                Automate
              </div>
              <div className="w-[94px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                Convert
              </div>
              <div className="w-[100px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                Transfer
              </div>
            </div>
          </div>

          <div>
            <div className="flex flex-col gap-[15px] mb-[5%] lg:gap-[25px] lg:mb-[25%]">
              <div className="w-[81px] h-[16px] text-[14px] font-semibold lg:text-[25px]">
                Resources
              </div>
              <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                Pricing
              </div>
              <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                Support
              </div>
              <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                Blog
              </div>
              <div className="w-[40px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                FAQs
              </div>
            </div>
            <div className="flex flex-col gap-[15px] lg:gap-[25px]">
              <div className="w-[81px] h-[13px] text-[14px] font-semibold lg:text-[16px]">
                Legal
              </div>
              <div className="w-[90px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                Privacy Policy
              </div>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                Terms of Services
              </div>
            </div>
          </div>

          <div className="">
            <div className="flex flex-col gap-[15px] mb-[15%] lg:gap-[25px] lg:mb-[25%]">
              <div className="w-[81px] h-[16px] text-[14px] font-semibold lg:text-[25px]">
                Developer
              </div>
              <div className="w-[90px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                API Documentation
              </div>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                API Reference
              </div>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                API Changelog
              </div>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                API status
              </div>
            </div>
            <div className="flex flex-col gap-[15px]">
              <div className="w-[81px] h-[16px] text-[14px] font-semibold lg:text-[16px] lg:w-[166px]">
                Contact us
              </div>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                Live Chat
              </div>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[166px] lg:text-[16px]">
                Contact Sales
              </div>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                Phone
              </div>
              <div className="w-[80px] h-[13px] text-[9px] lg:w-[71px] lg:text-[16px]">
                Email
              </div>
            </div>
          </div>
        </div>

        <div className="a right- flex gap-[90px] ml-[8%] mt-[10%]  lg:gap-[120px]">
          <div className="flex flex-col h-[52px] gap-[15px] ">
            <div className="text-[14px] lg:text-[25px]">Follow Us on</div>
            <div className="flex gap-[12px] lg:gap-[15px]">
              <div className="text-lg lg:text-3xl">
                <SiLinkedin />
              </div>
              <div className="text-lg lg:text-3xl">
                <ImFacebook2 />
              </div>
              <div className="text-lg lg:text-3xl">
                <ImInstagram />
              </div>
              <div className="text-lg lg:text-3xl">
                <SiTwitter />
              </div>
              <div className="text-[20px] lg:text-3xl">
                <GrMail />
              </div>
            </div>
            <div className="text-[11px] lg:text-[20px] lg:w-[356px]">
              Email us at: hello@aremxyplug.com
            </div>
          </div>

          <div className="flex flex-col gap-[10px] ">
            <div className="text-[14px] lg:text-[25px]">Download Our App</div>
            <div className="text-[8px] w-[245px] lg:text-[15px] lg:w-[424px] lg:h-[36px]">
              Discover exclusive deals and accounts with our mobile experience.
            </div>
            <div className="flex gap-[10px]">
              <img
                className="w-[68px] h-[22px] lg:w-[119px] lg:h-[39px]"
                src="./Images/google2.png"
                alt="/"
              />
              <img
                className="w-[68px] h-[22px] lg:w-[119px] lg:h-[39px]"
                src="./Images/apple2.png"
                alt="/"
              />
            </div>
          </div>
        </div>
        <div className=" text-[9px] mx-[40%] mt-[5%] w-[100%] lg:text-[16px] ">
          ©AremxyPlug 2023. All Rights Reserved.
        </div>
        <div className=" w-[702px] h-[30px] text-[7px] mx-[8%] mt-[2%] lg:text-[12px] lg:w-[1213px]">
          AremxyPlug is a business enterprise and telecommunication service
          provider company, not a bank. We offer telecom products, payments, and
          digital services. Banking services are provided by AremxyPlug’s
          payment partners and banks who are duly licensed by CBN, FCA, FDIC,
          and other regulatory bodies. Debit Card Services are issued by our
          partners who are authorized by VISA and MasterCard to carry out card
          payment services.
        </div>
      </div>
    </>
  );
};

// md:flex-nowrap md:gap-[10%] md:w-[100%]
