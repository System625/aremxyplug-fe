import React from "react";
import { SideBar } from "../Layout/SideBar";
import { useEffect, useContext } from "react";
import { ContextProvider } from "../../Context";
import { TopBar } from "./TopBar";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import styles from "./Dashboard.module.css";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export const MainDashboard = () => {
  // const ButtonGroup = ({ next, previous, goToSlide, ...rest }) => {
  //   const { carouselState: { currentSlide } } = rest;
  //   return (
  //     <div className="carousel-button-group bg-yellow-400 text-[#041ff7]">
  //       <div className={currentSlide === 0 ? 'disable' : ''} onClick={() => previous()} />
  //       <div onClick={() => next()} />
  //       <div onClick={() => goToSlide(currentSlide + 1)}/>
  //     </div>
  //   );
  // };

  const { setHideNavbar, toggleSideBar } = useContext(ContextProvider);

  const setNav = () => {
    setHideNavbar(true);
  };

  useEffect(() => {
    setNav();
    return () => {
      setHideNavbar(false);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
      {/* ============SIDE BAR========= */}
      {toggleSideBar && (
        <div className="absolute top-0 left-0 z-50">
          <SideBar />
        </div>
      )}

      {/* ==============TOP BAR========== */}
      <div className="sticky top-0 z-[99px] bg-white">
        <TopBar />
      </div>

      {/* ==============HERO SECTION========== */}
      <div className=" mx-[5%] mt-[8%] lg:mt-[3%] ">
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
          dotListClass="absolute top-[23%] text-[2%] md:top-[26%] lg:top-[55%]"
          // customButtonGroup={<ButtonGroup />}
          // renderButtonGroupOutside={true}
          renderDotsOutside={true}
        >
          <img
            className="w-[100%] h-[75px] lg:h-[238px]"
            src="./Images/dashboardImages/hero1.png"
            alt="Welcome to AremxyPlug"
          />
          <img
            className="w-[100%] h-[75px] lg:h-[238px]"
            src="./Images/dashboardImages/hero2.png"
            alt="Welcome to AremxyPlug"
          />
          <img
            className="w-[100%] h-[75px] lg:h-[238px]"
            src="./Images/dashboardImages/hero3.png"
            alt="Welcome to AremxyPlug"
          />
        </Carousel>

        {/* ==========BALANCE=========== */}
        <div className={styles.balance}>
          <div className={styles.balance1}>
            <button className={styles.viewWallet}>View Wallets</button>
            <p className={styles.walletText}>Available Balance</p>
            <div className={styles.viewBalance}>
              <div className={styles.NGN}>
                NGN

              </div>
              <p></p>
            </div>
          </div>

          <div className={styles.balance1}>
          <button className={styles.viewWallet}>View Accounts</button>
          </div>
        </div>
        <div className={styles.balance}>
          <div className={styles.balance1}>
            <button className={styles.viewWallet}>View Wallets</button>
            <p className={styles.walletText}>Available Balance</p>
            <div className={styles.viewBalance}>
              <div className={styles.NGN}>
                NGN

              </div>
              <p></p>
            </div>
          </div>

          <div className={styles.balance1}>
          <button className={styles.viewWallet}>View Accounts</button>
          </div>
        </div>
        <div className={styles.balance}>
          <div className={styles.balance1}>
            <button className={styles.viewWallet}>View Wallets</button>
            <p className={styles.walletText}>Available Balance</p>
            <div className={styles.viewBalance}>
              <div className={styles.NGN}>
                NGN

              </div>
              <p></p>
            </div>
          </div>

          <div className={styles.balance1}>
          <button className={styles.viewWallet}>View Accounts</button>
          </div>
        </div>
        <div className={styles.balance}>
          <div className={styles.balance1}>
            <button className={styles.viewWallet}>View Wallets</button>
            <p className={styles.walletText}>Available Balance</p>
            <div className={styles.viewBalance}>
              <div className={styles.NGN}>
                NGN

              </div>
              <p></p>
            </div>
          </div>

          <div className={styles.balance1}>
          <button className={styles.viewWallet}>View Accounts</button>
          </div>
        </div>
      </div>
    </div>
  );
};
