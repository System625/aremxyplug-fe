import React, { useState } from "react";
import "./LoginForm.css";
import Bluebutton from "../bluebutton/Bluebutton2";
import { Link } from "react-router-dom";

function LoginForm() {
  const [isFocused, setIsFocused] = useState([]);
  const handleFocus = (index) => {
    if (!isFocused.includes(index)) {
      setIsFocused([...isFocused, index]);
    }
  };

  const handleBlur = (index) => {
    if (isFocused.includes(index)) {
      setIsFocused(isFocused.filter((item) => item !== index));
    }
  };

  return (
    <div className="mx-[20px] md:mx-[unset] w-[100%] md:w-[80%] loginForm p-[25px]">
      <img
        src="./Images/login/arpLogo.png"
        alt="logo"
        className="w-[36.51px] h-[17.73px] lg:w-[63.73px] lg:h-[30.94px]"
      />

      <div className="mt-[30px]">
        {/* Email starts here 268455*/}
        <div className="px-[20%]">
          <div className=" mb-[14px] md:mb-[18px] lg:mb-[20px]">
            <p className="text-[8.93px] md:text-[11.58px] lg:text-[16px] font-[600] w-[30%] mb-[7px] lg:mb-[10px] tracking-wider">
              Email
            </p>
            <div
              className={`inputBoxShadow w-[100%] h-[22.75px] lg:h-[39px]    rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300 
            ${
              isFocused.includes(1)
                ? "border-[#2684fe] border-2"
                : "border-[#cdcdcd] border-[1px] "
            }`}
              onFocus={() => handleFocus(1)}
              onBlur={() => handleBlur(1)}
            >
              <input
                className="w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] px-[7.5px] md:px-[10px] rounded  text-[#403f3f] outline-none "
                type="email"
                // placeholder="Enter your first name"
              />
            </div>
          </div>
          {/* Email ends here*/}
          {/* Password starts here 268455*/}
          <div className="mb-[14px] md:mb-[18px] lg:mb-[20px]">
            <p className="text-[8.93px] md:text-[11.58px] lg:text-[16px] font-[600] w-[30%] mb-[7px] lg:mb-[10px] tracking-wider">
              Password
            </p>
            <div
              className={`inputBoxShadow w-[100%] h-[22.75px] lg:h-[39px]  rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300 
            ${
              isFocused.includes(2)
                ? "border-[#2684fe] border-2"
                : "border-[#cdcdcd] border-[1px] "
            }`}
              onFocus={() => handleFocus(2)}
              onBlur={() => handleBlur(2)}
            >
              <input
                className="w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] px-[7.5px] md:px-[10px] rounded  text-[#403f3f] outline-none "
                type="text"
                // placeholder="Enter your first name"
              />
            </div>
          </div>
          {/* Password ends here*/}
          <p className="text-[#04177F] lg:text-[14px] md:text-[8.02px] text-[8.02px] font-semibold my-4 cursor-pointer tracking-wider">
            Forget password ?
          </p>
          <div className="flex">
            <input type="checkbox" name="" id="" />
            <p className="ml-2 lg:text-[14px] md:text-[8.02px] text-[8.02px] text-[#575757] font-semibold tracking-wider">
              Remember me next time!
            </p>
          </div>
        </div>
        <div className="w-full flex justify-center my-4">
          <Bluebutton text="Signin" />
        </div>
        <p className="text-center text-[14px] font-semibold text-[#575757] my-4">
          -OR-
        </p>
        <div className="flex justify-center">
          <div
            className={`w-[80%] lg:w-[70%]  py-[9px] rounded  flex items-center justify-center lg:hover:border-[#b3b3b3] lg:duration-300 border-[#cdcdcd] border-[1px] cursor-pointer `}
          >
            <img
              src="./Images/login/Google.png"
              alt="google"
              className="w-[11.46px] lg:w-[20px] "
            />
            <p className="text-[9.17px] lg:text-[16px] pl-4 font-semibold tracking-wider">
              Signin with Google
            </p>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <p className="text-[9.17px] lg:text-[16px] font-semibold tracking-wider">
            Don’t have an account yet{" "}
          </p>
          <Link to="/signup">
            <p className="pl-2 text-[9.17px] lg:text-[16px] font-semibold  text-[#04177F] cursor-pointer tracking-wider">
              ? Signup
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default LoginForm;
