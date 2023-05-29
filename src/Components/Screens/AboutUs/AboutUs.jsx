import React from "react";
import styles from "./aboutus.module.css";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 4,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 4,
  },
};

export const AboutUs = () => {
  return (
    <>
      <div className={styles.hero2}>
        <div className="mx-[10%] md:mx-[15%] leading-5 lg:leading-6">
          <div className="font-semibold text-[20px] flex justify-center pt-[20%] md:text-[26.06px] lg:pt-[15%] lg:text-[45px]">
            About Us
          </div>
          <br></br>
          <div className="text-[12px] text-extrabold text-justify lg:text-[18px]">
            AremxyPlug is a business enterprise and telecommunication service
            provider that offers individuals and businesses full access to
            quick, secure, and dependable solutions for their digital and
            telecommunication service needs.
            <br></br>
            <br></br>
            At AremxyPlug, we provide seamless and limitless digital living
            needs to our users. Our objectives are to operate transparent and
            secure transactions, provide quick and dependable services, and to
            ensure that our services take our customers to the pinnacle of their
            aspirations in order to be the best service provider.
          </div>
        </div>
      </div>

      {/* OUR VISION */}
      <div className="mb-[20%] mx-[5%] mt-[6%] md:flex md:gap-[15%] md:justify-center md:items-center lg:mx-[8%]">
        <div className="md:h-[150px] leading-5 lg:leading-7">
          <div className="font-extrabold text-[20px] text-center md:text-left md:text-[17px] lg:text-[30px]">
            Our Vision
          </div>
          <br></br>
          <div className="text-justify text-[12px] mb-[25%] md:text-[10px] lg:text-[18px] lg:w-[] ">
            Our vision define digital solutions beyond imagination. We take
            security seriously, and our customers are our top priority, we are
            curated to keep fostering solutions to individuals and businesses in
            the digital space over decades.
          </div>
        </div>
        <img
          className="md:w-[45%] md:h-[200px] lg:w-[500px] lg:h-[325px]"
          src="./Images/aboutimages/ourBus.png"
          alt="/"
        />
      </div>

      {/* OUR MISSION */}
      <div className="mb-[20%] mx-[5%] mt-[6%] md:flex md:flex-row-reverse md:gap-[15%] md:justify-center md:items-center lg:mx-[8%]">
        <div className="md:h-[150px] leading-5 lg:leading-7">
          <div className="font-extrabold text-[20px] text-center md:text-left md:text-[17px] lg:text-[30px]">
            Our Mission
          </div>
          <br></br>
          <div className="text-justify text-[12px] mb-[25%] md:text-[10px] lg:text-[18px]">
            Our mission is to offer both individuals and businesses a
            trustworthy and secure platform for hassle-free telecom products,
            payment and card issuing, e-commerce, VTU, and business development
            solutions, as well as a range of digital services to develop
            capacity.
          </div>
        </div>
        <img
          className="md:w-[45%] md:h-[200px] lg:w-[500px] lg:h-[325px]"
          src="./Images/aboutimages/skyscrapper.png"
          alt="/"
        />
      </div>

      {/* OUR VALUES */}
      <div className=" md:flex md:flex-row-reverse md:ml-[%] leading-3 lg:flex lg:justify-center lg:items-center">
        <div className="mb-[15%] mx-[5%] mt-[6%] md:mt-[0%] lg:mb-[0%]">
          <div className=" font-extrabold text-[20px] text-center md:hidden ">
            Our Values
          </div>
          <br></br>
          <br></br>
          <img
            className="w-[700px] h-[250px] lg:w-[1350px] lg:h-[440px]"
            src="./Images/aboutimages/skytop.png"
            alt="/"
          />
        </div>

        <div className=" lg:h-[420px] mx-[5%]">
          <div className="hidden font-extrabold text-[20px] text-center md:text-[17px] lg:block lg:text-[30px] lg:mb-10">
            Our Values
          </div>
          <br></br>
          <div className="flex flex-col gap-[9px] mx-[5%] mb-[15%] text-center md:text-left md:flex md:flex-col md:gap-[5px] md:mb-[5%] lg:flex lg:flex-col lg:gap-[12px]">
            <div className="text-15px font-bold md:text-[10px] lg:text-[18px]">
              Efficient
            </div>
            <div className="text-[10px] text-[#04177f] lg:text-[12px]">
              Swift and Automated.
            </div>
            <div className="leading-4 text-justify text-[10px] md:text-[6.95px] lg:text-[12px] lg:leading-4">
              One of our core value at AremxyPlug is efficiency. We prioritize
              our customers time, and pride ourselves with delivering swift and
              faultless results at all time.
            </div>
          </div>

          <div className="flex flex-col gap-[9px] mx-[5%] mb-[15%] text-center md:text-left md:flex md:flex-col md:gap-[5px] md:mb-[5%] lg:flex lg:flex-col lg:gap-[12px]">
            <div className="text-15px font-bold md:text-[10px] lg:text-[18px]">
              Security
            </div>
            <div className="text-[10px] text-[#04177f] lg:text-[12px]">
              Safe and Secure
            </div>
            <div className="leading-4 text-justify text-[10px]  md:text-[6.95px] lg:text-[12px] lg:leading-4">
              As a business solution provider, security is non negotiable. We
              have built the best platforms with impeccable security to protect
              our customers’ funds, information, and privacy.
            </div>
          </div>

          <div className="flex flex-col gap-[9px] mx-[5%] mb-[35%] text-center md:text-left md:flex md:flex-col md:gap-[5px] md:mb-[5%] lg:flex lg:flex-col lg:gap-[12px] lg:mb-[2%]">
            <div className="text-15px font-bold md:text-[10px] lg:text-[18px]">
              Transparency
            </div>
            <div className="text-[10px] text-[#04177f] lg:text-[12px]">
              Trusthworthy and Reliable.
            </div>
            <div className="leading-4 text-justify text-[10px]  md:text-[6.95px] lg:text-[12px] lg:leading-4">
              The heart of our core value is transparency. As a business, we
              ensure you obtain a clear information pertaining to the solutions
              we provide for your needs. What is business without trust?
              AremxyPlug is 100% devoted to rendering reliable services.
            </div>
          </div>
        </div>
      </div>

      {/* OUR TEAM */}
      <div>
        <div className="mx-[5%]">
          <div className="text-[20px] text-center">Our Team</div>
          <div className="text-[12px] text-justify">
            At AremxyPlug, we think that the success of our company is built on
            the strength of our team. We take great pride in having a skilled
            and experienced team of experts who are committed to giving our
            clients excellent services.
          </div>
        </div>

        <Carousel
          swipeable={true}
          draggable={true}
          responsive={responsive}
          autoPlay={true}
          infinite={true}
          keyBoardControl={true}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          transitionDuration={1000}
          showDots={true}
          customTransition="transform 1800ms ease-in-out"
        >
        <div className="">
          <img src="" alt="/" />
          <div className="text-[9.42px] text-center">Name</div>
          <div className="text-[9.42px]">Business Consultant</div>
          <div className="text-[7.06px]">
            Lorem ipsum dolor sit amet consectetur. Congue morbi nequevenenatis
            faucibus proin. Neque feugiat vel volutpat at aliquam. Consequat al.
          </div>
        </div>
        <div className="">
          <img src="" alt="/" />
          <div className="text-[9.42px]">Name</div>
          <div className="text-[9.42px]">Developer</div>
          <div className="text-[7.06px]">
            Lorem ipsum dolor sit amet consectetur. Congue morbi nequevenenatis
            faucibus proin. Neque feugiat vel volutpat at aliquam. Consequat al.
          </div>
        </div>
        <div className="">
          <img src="" alt="/" />
          <div className="text-[9.42px]">Name</div>
          <div className="text-[9.42px]">Product Design</div>
          <div className="text-[7.06px]">
            Lorem ipsum dolor sit amet consectetur. Congue morbi nequevenenatis
            faucibus proin. Neque feugiat vel volutpat at aliquam. Consequat al.
          </div>
        </div>
        <div className="">
          <img src="" alt="/" />
          <div className="text-[9.42px]">Name</div>
          <div className="text-[9.42px]">Developer</div>
          <div className="text-[7.06px]">
            Lorem ipsum dolor sit amet consectetur. Congue morbi nequevenenatis
            faucibus proin. Neque feugiat vel volutpat at aliquam. Consequat al.
          </div>
        </div>
        <div className="">
          <img src="" alt="/" />
          <div className="text-[9.42px]">Name</div>
          <div className="text-[9.42px]">Developer</div>
          <div className="text-[7.06px]">
            Lorem ipsum dolor sit amet consectetur. Congue morbi nequevenenatis
            faucibus proin. Neque feugiat vel volutpat at aliquam. Consequat al.
          </div>
        </div>
        </Carousel>
      </div>
    </>
  );
};

// #04177f
