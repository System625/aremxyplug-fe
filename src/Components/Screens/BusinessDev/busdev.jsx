import React, { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { RiArrowDropUpLine } from "react-icons/ri";
import { Player } from "@lottiefiles/react-lottie-player";
import styles from "../BusinessDev/busdev.module.css";
import { Link } from "react-router-dom";

export const BusinessDev = () => {
  const [firstDrop, setFirstDrop] = useState(false);
  const [buttonText, setButtonText] = useState("More");

  function handleClick() {
    setFirstDrop((prev) => !prev);
    setButtonText((prevText) => (prevText === "More" ? "Less" : "More"));
  }

  return (
    <div className="mx-[5%] mt-[15%] md:mt-[10%] lg:px-[3%]">
      {/* SECTION ONE */}
      <div className="md:flex md:gap-[100px] md:mb-[15%]">
        <div className="flex flex-col gap-[25px] md:gap-[30px]">
          <div className="text-[20px] text-[#04177f] w-[195px] font-semibold lg:text-[45px]">
            Business Development
          </div>
          <div className="text-[12px] text-justify md:w-[289px] h-[80px] lg:text-[18px] lg:w-[500px] lg:h-[135px]">
            Our team of business experts will develop the best strategies to
            assist you in developing, implementing, and enhancing your digital
            business capabilities within your company. When it comes to business
            development, trust us to save you time and stress.
          </div>
          <Link to="/ContactUs">
            {" "}
            <div className="text-white bg-[#04177f] text-[7.9px] w-[122px] h-[28px] rounded-md flex justify-center items-center lg:w-[196px] lg:h-[45px] lg:text-[12px] lg:font-bold">
              Talk to an Expert Today!
            </div>
          </Link>
        </div>
        <img
          className="w-[270px] h-[185px] my-[20%] mx-auto md:my-[0] md:w-[318px] md:h-[219px] lg:w-[550px] lg:h-[379px]"
          src="./Images/businessimages/busimg.png"
          alt="/"
        />
      </div>

      <div className="mb-[20%] md:flex md:flex-col md:justify-center md:items-center">
        <div className="text-[18px] font-extrabold w-[312px] h-[px] text-justify leading-[22.5px] md:text-[15px] md:w-[347px] md:text-center md:font-bold lg:text-[24px] lg:w-[600px]">
          Let's take your strategic ideas into realities
        </div>
        <br></br>
        <div className="text-[12px] w-[312px] text-justify md:text-[10.42px] md:text-center md:w-[434px] lg:text-[18px] lg:w-[750px]">
          Our aim is to provide comprehensive support to businesses across
          various stages of development with holistic approach to drive growth,
          increase profitability, and achieve a long-term success.
        </div>
      </div>

      {/* SECTION TWO */}
      <div
        className="special mx-[-6%] px-[5%] py-[10%] md:px-[10%] lg:mx-[-9.5%]"
        style={{
          backgroundImage: "url(./Images/businessimages/dottedBG.png)",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
          backgroundSize: "cover",
          // width:"100%"

          // "url(.png), linear-gradient(90.67deg, #92ABFE 0.49%, #05E2FF 99.34%)",
        }}
      >
        <div className="md:flex mb-[20%] md:justify-center md:items-center md:gap-[250px] lg:gap-[300px] lg:mb-[10%]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[20px] font-semibold text-center w-[233px] mx-auto md:text-[17px] md:w-[286px] lg:text-[30px] lg:w-[494px] lg:text-left">
              Critical and Innovative Thinking
            </div>
            <div className="text-[12px] text-justify md:text-[10px] md:w-[300px] lg:text-[18px] lg:w-[554px]">
              Innovative thinking can benefits fostering a growth mindset,
              enhancing problem-solving abilities, and boosting adaptability and
              resilience, which all contribute to the success of businesses.
            </div>
          </div>

          {/* <img
            className="w-[234.11px] h-[234.11px] mx-auto md:w-[188px] md:h-[188px] md:mx-0 lg:w-[325px] lg:h-[325px]"
            src="/Images/businessimages/busimg2.png"
            alt="/"
          /> */}
          <Player
            autoplay
            loop
            src="https://assets3.lottiefiles.com/packages/lf20_o18imdcr.json"
            style={{ height: "350px", width: "350px" }}
          ></Player>
        </div>

        <div className="md:flex md:flex-row-reverse mb-[20%] md:justify-center md:items-center md:gap-[250px] lg:gap-[350px] lg:mb-[10%]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[20px] font-semibold text-center w-[px] mx-auto md:text-17px lg:text-[30px] lg:w-[494px] lg:text-left">
              Strategic Business Planning
            </div>
            <div className="text-[12px] text-justify md:text-[10px] md:w-[300px] lg:text-[18px] lg:w-[554px]">
              This is the systematic process used to articulates the objectives
              and actions required to achieve the future vision of purchasing
              habits of your business perspectives.
            </div>
          </div>

          {/* <img
            className="w-[234.11px] h-[234.11px] mx-auto md:w-[188px] md:h-[188px] md:mx-0 lg:w-[325px] lg:h-[325px]"
            src="/Images/businessimages/busimg3.png"
            alt="/"
          /> */}
          <Player
            autoplay
            loop
            src="https://assets5.lottiefiles.com/packages/lf20_NAl0oidcCj.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>

        <div className="md:flex mb-[20%] md:justify-center md:items-center md:gap-[250px] lg:gap-[350px] lg:mb-[10%]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[20px] font-semibold text-center w-[233px] mx-auto md:text-[17px] lg:text-[30px] lg:w-[494px] lg:text-left">
              Strategic Partnerships
            </div>
            <div className="text-[12px] text-justify md:text-[10px] md:w-[300px] lg:text-[18px] lg:w-[554px]">
              The mutually beneficial business relationship called "strategic
              partnership" are formal agreements between two companies with the
              main objective of accomplishing a particular goals.
            </div>
          </div>

          {/* <img
            className="w-[234.11px] h-[234.11px] mx-auto md:w-[188px] md:h-[188px] md:mx-0 lg:w-[325px] lg:h-[325px]"
            src="/Images/businessimages/busimg4.png"
            alt="/"
          /> */}
          <Player
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_ER8E6HKqBl.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>

        <div className="md:flex md:flex-row-reverse mb-[20%] md:justify-center md:items-center md:gap-[250px] lg:gap-[350px] lg:mb-[10%]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[20px] font-semibold text-center w-[233px] mx-auto md:text-[17px] lg:text-[30px] lg:w-[494px] lg:text-left">
              Project Management
            </div>
            <div className="text-[12px] text-justify md:text-[10px] md:w-[300px] lg:text-[18px] lg:w-[554px]">
              This evolves the discipline of planning, organizing, and
              controlling resources to achieve specific goals within defined
              constraints. It involves initiating, executing, monitoring, and
              closing projects, ensuring successful outcomes.
            </div>
          </div>

          {/* <img
            className="w-[234.11px] h-[234.11px] mx-auto md:w-[188px] md:h-[188px] md:mx-0 lg:w-[325px] lg:h-[325px]"
            src="/Images/businessimages/busimg5.png"
            alt="/"
          /> */}
          <Player
            autoplay
            loop
            src="https://assets8.lottiefiles.com/packages/lf20_w98qte06.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>

        <div className="md:flex mb-[20%] md:justify-center md:items-center md:gap-[250px] lg:gap-[350px] lg:mb-[10%]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[20px] font-semibold text-center w-[233px] mx-auto md:text-[17px] lg:text-[30px] lg:w-[494px] lg:text-left">
              Product Management
            </div>
            <div className="text-[12px] text-justify md:text-[10px] md:w-[300px] lg:text-[18px] lg:w-[554px]">
              The discipline of overseeing the development, strategy, and
              lifecycle of a product is inevitably. It involves market research,
              prioritization, planning, collaboration, and delivering valuable
              solutions that meet customer needs.
            </div>
          </div>

          {/* <img
            className="w-[234.11px] h-[234.11px] mx-auto md:w-[188px] md:h-[188px] md:mx-0 lg:w-[325px] lg:h-[325px]"
            src="/Images/businessimages/busimg6.png"
            alt="/"
          /> */}
          <Player
            speed={5}
            autoplay
            loop
            src="https://assets2.lottiefiles.com/packages/lf20_yqoxehdn.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>

        <div className="md:flex md:flex-row-reverse mb-[20%] md:justify-center md:items-center md:gap-[250px] lg:gap-[350px] lg:mb-[10%]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[20px] font-semibold text-center w-[px] mx-auto md:text-[17px] lg:text-[30px] lg:w-[494px] lg:text-left">
              Marketing, Sales & Growth
            </div>
            <div className="text-[12px] text-justify md:text-[10px] md:w-[300px] lg:text-[18px] lg:w-[554px]">
              Marketing, sales, and growth synergistically fuel business success
              by attracting, converting, and expanding customer relationships
              through strategic integration and optimization.
            </div>
          </div>

          {/* <img
            className="w-[234.11px] h-[234.11px] mx-auto md:w-[188px] md:h-[188px] md:mx-0 lg:w-[325px] lg:h-[325px]"
            src="/Images/businessimages/busimg7.png"
            alt="/"
          /> */}
          <Player
            autoplay
            loop
            src="https://assets10.lottiefiles.com/packages/lf20_vLxVkbToAJ.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>

        <div className="md:flex mb-[20%] md:justify-center md:items-center md:gap-[250px] lg:gap-[350px] lg:mb-[10%]">
          <div className="flex flex-col gap-[20px]">
            <div className="text-[20px] font-semibold text-center w-[233px] mx-auto md:text-[17px] lg:text-[30px] lg:w-[494px] lg:text-left">
              Cost Saving
            </div>
            <div className="text-[12px] text-justify md:text-[10px] md:w-[300px] lg:text-[18px] lg:w-[554px]">
              It refers to the strategic actions and measures taken by
              individuals or businesses to reduce expenses, optimize resources,
              and improve efficiency, ultimately leading to financial benefits
              and increased profitability.
            </div>
          </div>

          {/* <img
            className="w-[234.11px] h-[234.11px] mx-auto md:w-[188px] md:h-[188px] md:mx-0 lg:w-[325px] lg:h-[325px]"
            src="/Images/businessimages/busimg8.png"
            alt="/"
          /> */}
          <Player
            autoplay
            loop
            src="https://assets9.lottiefiles.com/packages/lf20_uf2ng6jq.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>
      </div>

      {/* SECTION THREE */}
      <div className="my-[15%] md:my-[10%]">
        <div className=" text-[20px] text-[#04177f] text-center lg:text-[30px]">
          Our Key Features
        </div>
        <div className="text-[12px] text-center lg:text-[18px]">
          Let's save you time and stress, so you can focus on your company's
          vision goals, and objectives.
        </div>
      </div>

      <div className="mb-[20%] md:mb-[10%] grid md:grid-cols-3 md:gap-x-[6%] gap-[80px]">
        {/* market research */}
        <div className={styles.img}>
          <img
            className="w-[240px] md:w-[200px] lg:w-[293px]"
            src="/Images/businessimages/market.png"
            alt="/"
          />
          <ul className="ml-[5%] list-disc flex flex-col gap-[15px] text-[12px] md:text-[7px] md:w-[222px] lg:text-[12px] lg:w-[330px]">
            <li>
              Conduct thorough market research to identify opportunities, target
              markets, and consumer trends.
            </li>
            <li>
              Perform competitor analysis to gain insights into market
              positioning and develop competitive strategies.
            </li>
            <li>
              Provide detailed reports and recommendations based on the research
              findings.
            </li>
          </ul>
        </div>

        {/* business strategy */}
        <div className={styles.img}>
          <img
            className="w-[240px] md:w-[200px] lg:w-[293px]"
            src="/Images/businessimages/2.BusinessStrategy.png"
            alt="/"
          />
          <ul className="text-justify ml-[5%] list-disc flex flex-col gap-[15px] text-[12px] md:text-[7px] md:w-[222px] lg:text-[12px] lg:w-[330px]">
            <li>
              Work closely with clients to develop customized business
              strategies aligned with your goals and objectives.
            </li>
            <li>
              Define value propositions, competitive advantages, and
              differentiation strategies.
            </li>
            <li>
              Identify growth areas and develop strategic plans for market
              expansion.
            </li>
          </ul>
        </div>

        {/* sales and marketing support  */}
        <div className={styles.img}>
          <img
            className="w-[240px] md:w-[200px] lg:w-[293px]"
            src="/Images/businessimages/3.SalesandMarketing.png"
            alt="/"
          />
          <ul className="text-justify ml-[5%] list-disc flex flex-col gap-[15px] text-[12px] w-[330px] md:text-[7px] md:w-[222px] lg:text-[12px] lg:w-[330px]">
            <li>
              Create comprehensive sales and marketing plans tailored to your
              target audience.
            </li>
            <li>
              Develop branding strategies, messaging frameworks, and marketing
              collateral.
            </li>
            <li>
              Assist in lead generation, customer acquisition, and conversion
              optimization.
            </li>
          </ul>
        </div>

        {/* partnership and collaboration */}
        <div className={styles.img}>
          <img
            className="w-[240px] md:w-[200px] lg:w-[293px]"
            src="/Images/businessimages/4.Partnership.png"
            alt="/"
          />
          <ul className="text-justify ml-[5%] list-disc flex flex-col gap-[15px] text-[12px] md:text-[7px] md:w-[222px] lg:text-[12px] lg:w-[330px]">
            <li>
              We help to identify potential strategic partnership and alliances
              to enhance business growth.
            </li>
            <li>
              Facilitate partnership negotiations and agreements where needed.
            </li>
            <li>
              Support collaboration initiatives to dive innovation and expand
              market reach.
            </li>
          </ul>
        </div>

        {/* product development */}
        <div className={styles.img2}>
          <img
            className="w-[270px] md:w-[200px] lg:w-[330px]"
            src="/Images/businessimages/5.png"
            alt="/"
          />
          <ul className="text-justify ml-[5%] list-disc flex flex-col gap-[15px] text-[12px] md:text-[7px] md:w-[222px] lg:text-[12px] lg:w-[330px]">
            <li>
              Evaluate existing products/services and provide recommendations
              for improvement or diversification.
            </li>
            <li>
              Conduct market feasibility studies for new product development.
            </li>
            <li>Assist in product launch planning and execution.</li>
          </ul>
        </div>

        {/* financial analysis */}
        <div className={styles.img2}>
          <img
            className="w-[240px] md:w-[200px] lg:w-[293px]"
            src="/Images/businessimages/6.png"
            alt="/"
          />
          <ul className="text-justify ml-[5%] list-disc flex flex-col gap-[15px] text-[12px] w-[330px] md:text-[7px] md:w-[222px] lg:text-[12px] lg:w-[330px]">
            <li>
              Perform financial analysis, including forecasting, budgeting, and
              ROI analysis.
            </li>
            <li>
              Develop financial models and metrics to measure business
              performance.
            </li>
            <li>
              Provide guidance on investment decisions and funding
              opportunities.
            </li>
          </ul>
        </div>

        {/* training and skill */}
        <div className={styles.img2}>
          <img
            className="w-[240px] md:w-[200px] lg:w-[293px]"
            src="/Images/businessimages/7.png"
            alt="/"
          />
          <ul className="text-justify ml-[5%] list-disc flex flex-col gap-[15px] text-[12px] md:text-[7px] md:w-[222px] lg:text-[12px] lg:w-[330px]">
            <li>
              Conduct workshops and training programs to enhance business
              development skills.
            </li>
            <li>Offer coaching and mentoring to key personnel.</li>
            <li>
              Provide ongoing support and guidance to ensure effective
              implementation of strategies.
            </li>
          </ul>
        </div>

        {/* performance monitoring */}
        <div className={styles.img2}>
          <img
            className="w-[260px] md:w-[200px] lg:w-[350px]"
            src="/Images/businessimages/8.png"
            alt="/"
          />
          <ul className="text-justify ml-[5%] list-disc flex flex-col gap-[15px] text-[12px] md:text-[7px] md:w-[222px] lg:text-[12px] lg:w-[330px]">
            <li>
              Establish key performance indicators (KPIs) and measurement
              frameworks.
            </li>
            <li>
              Monitor and evaluate the progress of implemented strategies.
            </li>
            <li>
              Provide regular reports and insights for continuous improvement.
            </li>
          </ul>
        </div>

        {firstDrop && (
          <div className="grid gap-[80px]">
            {/* product development */}
            <div className={styles.img}>
              <img
                className="w-[300px]"
                src="/Images/businessimages/5.png"
                alt="/"
              />
              <ul className="ml-[5%] list-disc flex flex-col gap-[15px] text-[12px]">
                <li>
                  Evaluate existing products/services and provide
                  recommendations for improvement or diversification.
                </li>
                <li>
                  Conduct market feasibility studies for new product
                  development.
                </li>
                <li>Assist in product launch planning and execution.</li>
              </ul>
            </div>

            {/* financial analysis */}
            <div className={styles.img}>
              <img
                className="w-[280px]"
                src="/Images/businessimages/6.png"
                alt="/"
              />
              <ul className="ml-[5%] list-disc flex flex-col gap-[15px] text-[12px]">
                <li>
                  Perform financial analysis, including forecasting, budgeting,
                  and ROI analysis.
                </li>
                <li>
                  Develop financial models and metrics to measure business
                  performance.
                </li>
                <li>
                  Provide guidance on investment decisions and funding
                  opportunities.
                </li>
              </ul>
            </div>

            {/* training and skill */}
            <div className={styles.img}>
              <img
                className="w-[280px]"
                src="/Images/businessimages/7.png"
                alt="/"
              />
              <ul className="ml-[5%] list-disc flex flex-col gap-[15px] text-[12px]">
                <li>
                  Conduct workshops and training programs to enhance business
                  development skills.
                </li>
                <li>Offer coaching and mentoring to key personnel.</li>
                <li>
                  Provide ongoing support and guidance to ensure effective
                  implementation of strategies.
                </li>
              </ul>
            </div>

            {/* performance monitoring */}
            <div className={styles.img}>
              <img
                className="w-[330px]"
                src="/Images/businessimages/8.png"
                alt="/"
              />
              <ul className="ml-[5%] list-disc flex flex-col gap-[15px] text-[12px]">
                <li>
                  Establish key performance indicators (KPIs) and measurement
                  frameworks.
                </li>
                <li>
                  Monitor and evaluate the progress of implemented strategies.
                </li>
                <li>
                  Provide regular reports and insights for continuous
                  improvement.
                </li>
              </ul>
            </div>
          </div>
        )}

        <div
          className="mt-[-10%] md:hidden flex justify-center items-center font-semibold bg-[#04177F] text-[#ffffff] w-[104px] h-[33px] mx-auto rounded-md p-[2%]"
          onClick={handleClick}
        >
          <div className="text-[12px]">{buttonText}</div>
          <div className="w-[15px] text-[30px]  ">
            {!firstDrop ? <RiArrowDropDownLine /> : <RiArrowDropUpLine />}
          </div>
        </div>
      </div>

      {/* SECTION FOUR  */}
      <img
        className="lg:hidden md:w-[80%] md:mx-auto mb-[25%]"
        src="./Images/businessimages/lastbg.png"
        alt="/"
      />
      <img
        className="hidden lg:block md:w-[80%] md:mx-auto mb-[25%]"
        src="./Images/businessimages/lastbg2.png"
        alt="/"
      />

      {/* LAST SECTION */}
      <div
        className="py-[8%] mx-auto mb-[25%] w-[312px] rounded-xl h-[312px] flex flex-col justify-center items-center gap-[30px] md:gap-[10px] md:w-[695px] md:h-[174px] md:mx-auto lg:w-[100%] lg:h-[298px] lg:gap-[35px] md:mb-[15%]"
        style={{ boxShadow: "0px 0px 11.5833px rgba(0, 0, 0, 0.25)" }}
      >
        <div className="w-[292px] text-[20px] leading-[30px] text-center font-semibold text-[#04177f] md:w-[375px] md:text-[17px] md:font-semibold lg:text-[30px] lg:w-[648px] ">
          AremxyPlug Business Consulting Services
        </div>
        <div className="w-[294px] h-[105px] text-[10px] text-center leading-[15px] md:w-[659px] md:text-[10px] lg:text-[18px] lg:w-[80%] lg:h-[108px] lg:leading-[27px]">
          At AremxyPlug, we are committed to providing a one-stop shop solution
          to individuals and businesses. Want to take your next big company to a
          milestone?
          <br></br>
          <br></br>
          Book a session with us, we are so keen to help you to crush the
          adventure!
        </div>
        <Link to="/ContactUs">
          <div className="w-[95px] h-[26px] bg-[#04177f] flex justify-center items-center text-[#ffffff] text-[7px] rounded-md md:w-[95px] md:h-[26px] md:p-[2%] lg:w-[169px] lg:h-[45px] lg:text-[13px]">
            Contact sales
          </div>
        </Link>
      </div>
    </div>
  );
};

// bg-[#04177f]
