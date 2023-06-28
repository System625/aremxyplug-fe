import React, { useContext, useEffect, useState } from "react";
import "./LoginForm.css";
import { Link } from "react-router-dom";
import { ContextProvider } from "../Context";
import { primaryColor } from "../Screens/cardIssuing/cardIssuing";
import OtpInput from "react-otp-input";
import { Tooltip as ReactTooltip } from "react-tooltip";
import Joi from "joi";
function LoginForm() {
  const {
    setOpenTranspin,
    openTranspin,
    setOpenTranspinSuccessful,
    openTranspinSuccessful,
    openResetTranspin,
    setOpenResetTranspin,
    open2StepVerification,
    setOpen2StepVerification,
  } = useContext(ContextProvider);
  // The satate handling whether input is user name or email starts here
  const [usernameORemail, setUsernameORemail] = useState("username");
  // The satate handling whether input is user name or email ends here

  // Check if login data exist starts here
  function checkUsername() {
    const getUsername = localStorage.getItem("aremxyUsername")
      ? JSON.parse(localStorage.getItem("aremxyUsername"))
      : "";
    return getUsername;
  }

  function checkEmail() {
    const getEmail = localStorage.getItem("aremxyEmail")
      ? JSON.parse(localStorage.getItem("aremxyEmail"))
      : "";
    return getEmail;
  }

  function checkPassword() {
    const getPassword = localStorage.getItem("aremxyPassword")
      ? JSON.parse(localStorage.getItem("aremxyPassword"))
      : "";
    return getPassword;
  }
  // Check if login data exist ends here

  const [username, setUsername] = useState(checkUsername());
  const [email, setEmail] = useState(checkEmail());
  const [password, setPassword] = useState(checkPassword());
  const [checkbox, setCheckbox] = useState(false);

  const [otp, setOtp] = useState("");
  const [otp2, setOtp2] = useState("");
  const [passwordHidden, setPasswordHidden] = useState("password");
  const [isFocused, setIsFocused] = useState([]);

  const [toolTipWidth, setToolTipWidth] = useState("");
  const [toolTipOffset, setToolTipOffset] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      let newSize = "";
      let newOffset = "";

      if (width < 1024) {
        newSize = "96%";
        newOffset = 30;
      } else {
        newSize = "50%";
        newOffset = 50;
      }

      setToolTipWidth(newSize);
      setToolTipOffset(newOffset);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener when the component unmounts
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const usernameHandler = (e) => {
    setUsername(e.target.value);
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
  };
  const passwordHandler = (e) => {
    setPassword(e.target.value);
  };

  const checkBoxHandler = (e) => {
    setCheckbox(e.target.checked);
  };

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

  const submitHandler = (e) => {
    e.preventDefault();

    if (usernameORemail === "username") {
      // ========Login form validation starts her=======
      const schema = Joi.object({
        username: Joi.string()
          .pattern(new RegExp(/^[a-zA-Z0-9_]{3,30}$/))
          .required()
          .messages({ "string.pattern.base": "Invalid Username" }),
      });
      // ======Login form validation ends here=====

      const { error } = schema.validate({ username });
      if (error) {
        // Handle validation error
        setErrors(
          error.details.reduce((acc, curr) => {
            acc[curr.path[0]] = curr.message;
            return acc;
          }, {})
        );
      } else {
        console.log("Form submitted successfully");

        if (checkbox === true) {
          localStorage.setItem("aremxyUsername", JSON.stringify(username));
          localStorage.setItem("aremxyPassword", JSON.stringify(password));
        }

        setOpenTranspin(true);
        setUsername("");
        setEmail("");
        setPassword("");
        setErrors({});
      }
    } else if (usernameORemail === "email") {
      // ========Login form validation starts her=======
      const schema = Joi.object({
        email: Joi.string()
          .pattern(new RegExp(/^\S+@\S+\.\S+$/))
          .required()
          .messages({ "string.pattern.base": "Invalid email" }),
      });
      // ======Login form validation ends here=====

      const { error } = schema.validate({ email });
      if (error) {
        // Handle validation error
        setErrors(
          error.details.reduce((acc, curr) => {
            acc[curr.path[0]] = curr.message;
            return acc;
          }, {})
        );
      } else {
        console.log("Form submitted successfully");
        if (checkbox === true) {
          localStorage.setItem("aremxyEmail", JSON.stringify(username));
          localStorage.setItem("aremxyPassword", JSON.stringify(password));
        }

        setOpenTranspin(true);
        setUsername("");
        setEmail("");
        setPassword("");
        setErrors({});
      }
    }
  };

  return (
    <div
      className="relative overflow-hidden w-[100%] xl:w-[85%] md:mx-[unset]   loginForm p-[25px] rounded-lg md:rounded-xl xl:rounded-3xl "
      style={{
        zIndex: 950,
      }}
    >
      {/* FORM OVERLAY AND TRANSACTION PIN INPUT STARTS HERE */}
      {openTranspin === true && (
        <div
          className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 999,
          }}
        >
          <div className="transPin p-4 rounded-md md:rounded-lg lg:rounded-2xl h-[65%] w-[70%]">
            <p className="lg:text-[16px] text-[9.167px] text-[#000] mb-[30px] text-center">
              Create your transaction pin to continue operations!
            </p>
            <p className="lg:text-[16px] text-[9.167px] text-[#000] my-4 text-center">
              Input pin
            </p>

            {/* TRANSACTION PIN INPUT STARTS HERE */}
            <div className="flex justify-center">
              <OtpInput
                value={otp}
                onChange={setOtp}
                numInputs={4}
                shouldAutoFocus={true}
                inputStyle={{
                  color: "#403f3f",
                  width: 30,
                  height: 30,
                  borderRadius: 3,
                }}
                renderInput={(props) => (
                  <input {...props} className="inputOTP mx-[3px]" />
                )}
              />
            </div>
            {/* TRANSACTION PIN INPUT ENDS HERE */}

            <p className="lg:text-[16px] text-[9.167px] text-[#000] my-4 text-center">
              Confirm pin
            </p>

            {/* TRANSACTION CONFIRM PIN STARTS HERE */}
            <div className="flex justify-center ">
              <OtpInput
                value={otp2}
                onChange={setOtp2}
                numInputs={4}
                // onFocus={() => handleFocused_otp()}
                // onBlur={() => handleBlur_otp()}
                inputStyle={{
                  color: "#403f3f",
                  width: 30,
                  height: 30,
                  borderRadius: 3,
                }}
                renderInput={(props) => (
                  <input {...props} className="inputOTP mx-[3px] " />
                )}
              />
            </div>
            {/* TRANSACTION CONFIRM PIN ENDS HERE */}

            <div className="w-full flex justify-center mt-[20px] mb-[10px] lg:mb-[10px] lg:mt-[50px]">
              <div
                onClick={() => {
                  setOpenTranspin(false);
                  setOpenTranspinSuccessful(true);
                }}
                className=" inline-flex justify-center items-center text-[#fff]   text-center  cursor-pointer 
                text-[10px] font-bold leading-[11.31px]  px-[25px] py-[8px] rounded-[3px] lg:rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
                "
                style={{
                  backgroundColor: primaryColor,
                }}
              >
                <p> Create</p>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* FORM OVERLAY AND CHILD TRANSACTION PIN ENDS HERE*/}

      {/* FORM OVERLAY AND TRANSACTION PIN SUCCESSFUL HERE */}
      {openTranspinSuccessful === true && (
        <div
          className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 999,
          }}
        >
          <div className="flex justify-center items-center transPin p-4 rounded-md md:rounded-lg lg:rounded-2xl h-[65%] w-[70%]">
            <div>
              <div className="flex justify-center">
                <div className="flex w-[75%] ">
                  <p className="lg:text-[14px] text-[8.021px]  text-[#000] mb-[30px]">
                    You have successfully created your transaction pin.
                  </p>

                  <img
                    className="lg:w-[50px] lg:h-[50px] w-[32px] h-[32px] "
                    src="https://s3-alpha-sig.figma.com/img/6530/bb1e/3cfc8f8277b63c030edc8be8b2284111?Expires=1688947200&Signature=UQzCu-9iFtO7SfokZFI7aiXBaLvhnnpANATXH0c~nzd9ms2V0g6zwCeIZWiDdr2wLEGdI2TqwCKpdc57XACE4UpY1cxuqgXXa-MqZxkpQx~4F8LYJic3rp5ADWczr8ywM1Xpy8PpCCP-ouHhXQqIAfYRgwSNgR0aG926GPEOKzNQXUFyzbfeFvwkTXpxZTf2tL34yzCt1qxNS0UlEXWYnlTCo9UBQhULCxsl86-M5YSPcjEuEGlEw8i~Lg3G9GwAo9ZWTTcY6rmS4HmgeerwG-b~gL-~gKGZcM8zRXNdFTdYiyH8TkDapIaUFiUcgwzExrD5-h2OzfKdnPVXGJAepw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
                    alt=""
                  />
                </div>
              </div>
              <Link to="/">
                <div className="w-full flex justify-center mt-[20px]  lg:mt-[50px]">
                  <div
                    onClick={() => setOpenTranspinSuccessful(false)}
                    className=" inline-flex justify-center items-center text-[#fff]   text-center  cursor-pointer 
      text-[10px] font-bold leading-[11.31px]  px-[25px] py-[8px] rounded-[3px] lg:rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
      "
                    style={{
                      backgroundColor: primaryColor,
                    }}
                  >
                    <p> Done</p>
                  </div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
      {/* FORM OVERLAY AND TRANSACTION PIN SUCCESSFUL ENDS HERE*/}

      {/* FORM OVERLAY AND RESET TRANSACTION PIN  HERE */}
      {openResetTranspin === true && (
        <div
          className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 999,
          }}
        >
          <div className="flex justify-center items-center transPin p-4 rounded-md md:rounded-lg lg:rounded-2xl h-[65] w-[70%]">
            <div>
              <div className="flex justify-center">
                <div className="w-[80%]">
                  <p className="lg:text-[16px] text-[9.167px] text-center  text-[#000] mb-[25px]">
                    We notice you just reset your password.
                  </p>
                  <p className="lg:text-[14px] text-[8.021px]  text-[#747474] text-center">
                    We recommend you to reset your
                  </p>
                  <p className="lg:text-[14px] text-[8.021px]  text-[#747474] mb-[30px] text-center">
                    transaction pin for security purpose.
                  </p>
                </div>
              </div>

              <div className="w-full flex justify-center lg:mt-[50px]">
                <div
                  onClick={() => setOpenResetTranspin(false)}
                  className=" inline-flex justify-center items-center text-[#fff]   text-center  cursor-pointer 
      text-[10px] font-bold leading-[11.31px]  px-[25px] py-[8px] rounded-[3px] lg:rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
      "
                  style={{
                    backgroundColor: primaryColor,
                  }}
                >
                  <p>Reset</p>
                </div>
              </div>
              <p
                onClick={() => setOpenResetTranspin(false)}
                className="text-[#f95252] text-[6.875px] tracking-wider md:text-[12px]  text-center mt-[15px] font-semibold cursor-pointer"
              >
                Cancel
              </p>
            </div>
          </div>
        </div>
      )}
      {/* FORM OVERLAY AND RESET TRANSACTION PIN ENDS HERE*/}

      {/* FORM OVERLAY AND 2 STEP VERIFICATION */}
      {open2StepVerification === true && (
        <div
          className="absolute top-0 bottom-0 right-0 left-0 flex justify-center items-center"
          style={{
            backgroundColor: "rgba(0,0,0,0.4)",
            zIndex: 999,
          }}
        >
          <div className="flex justify-center items-center transPin p-4 rounded-md md:rounded-lg lg:rounded-2xl h-[65] w-[70%]">
            <div>
              <div className="flex justify-center">
                <div className="w-[80%]">
                  <p className="lg:text-[16px] text-[9.167px] text-center  text-[#000] mb-[25px]">
                    We notice you just reset your password.
                  </p>
                  <p className="lg:text-[14px] text-[8.021px]  text-[#747474] text-center">
                    We recommend you to reset your
                  </p>
                  <p className="lg:text-[14px] text-[8.021px]  text-[#747474] mb-[30px] text-center">
                    transaction pin for security purpose.
                  </p>
                </div>
              </div>

              <div className="w-full flex justify-center lg:mt-[50px]">
                <div
                  onClick={() => setOpen2StepVerification(false)}
                  className=" inline-flex justify-center items-center text-[#fff]   text-center  cursor-pointer 
      text-[10px] font-bold leading-[11.31px]  px-[25px] py-[8px] rounded-[3px] lg:rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
      "
                  style={{
                    backgroundColor: primaryColor,
                  }}
                >
                  <p>Reset</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      {/* FORM OVERLAY AND 2 STEP VERIFICATION ENDS HERE*/}

      <Link to="/">
        <img
          src="./Images/login/arpLogo.png"
          alt="logo"
          className="w-[36.51px] h-[17.73px] lg:w-[63.73px] lg:h-[30.94px]"
        />
      </Link>

      <div className="mt-[30px]">
        {/* Email starts here 268455*/}
        <form onSubmit={submitHandler}>
          <div className="px-[15%] lg:px-[20%]">
            <div className=" mb-[14px] md:mb-[18px] lg:mb-[20px]">
              <p className="text-[8.93px] md:text-[11.58px] lg:text-[16px] font-[600] w-[70%] mb-[7px] lg:mb-[10px] tracking-wider">
                <span
                  className={`${
                    usernameORemail === "username" ? "text-[#04177F]" : ""
                  }  cursor-pointer hover:text-gray-700`}
                  onClick={() => setUsernameORemail("username")}
                >
                  Username
                </span>{" "}
                or{" "}
                <span
                  className={`${
                    usernameORemail === "email" ? "text-[#04177F]" : ""
                  }  cursor-pointer hover:text-gray-700`}
                  onClick={() => setUsernameORemail("email")}
                >
                  {" "}
                  Email
                </span>
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
                  type="text"
                  value={usernameORemail === "username" ? username : email}
                  onChange={
                    usernameORemail === "username"
                      ? usernameHandler
                      : emailHandler
                  }
                  placeholder={
                    usernameORemail === "username"
                      ? "Enter username"
                      : "Enter email"
                  }
                  data-tooltip-id={
                    usernameORemail === "username" ? "username" : "email"
                  }
                  data-tooltip-content={
                    usernameORemail === "username"
                      ? "Click on Email  to switch to email input"
                      : "Click on Username to switch to username input"
                  }
                />

                <ReactTooltip
                  id={usernameORemail === "username" ? "username" : "email"}
                  type="success"
                  offset={toolTipOffset}
                  style={{
                    backgroundColor: "rgb(4,23,127)",
                    width: toolTipWidth,
                    textAlign: "center",
                    color: "#fff",
                    fontWeight: "bold",
                    letterSpacing: "1px",
                    fontSize: 12,
                    zIndex: 999,
                  }}
                />
              </div>
              {errors.username && (
                <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                  {errors.username}
                </div>
              )}
              {errors.email && (
                <div className="text-[12px] text-red-500 italic lg:text-[14px]">
                  {errors.email}
                </div>
              )}
            </div>
            {/* Email ends here*/}
            {/* Password starts here 268455*/}
            <div className="mb-[14px] md:mb-[18px] lg:mb-[20px]">
              <p className="text-[8.93px] md:text-[11.58px] lg:text-[16px] font-[600] w-[30%] mb-[7px] lg:mb-[10px] tracking-wider">
                Password
              </p>
              <div
                className={`relative inputBoxShadow w-[100%] h-[22.75px] lg:h-[39px]  rounded  flex items-center lg:hover:border-[#b3b3b3] lg:duration-300 
            ${
              isFocused.includes(2)
                ? "border-[#2684fe] border-2"
                : "border-[#cdcdcd] border-[1px] "
            }`}
                onFocus={() => handleFocus(2)}
                onBlur={() => handleBlur(2)}
              >
                {passwordHidden === "password" ? (
                  <img
                    src="./Images/login/eyeIcon2.png"
                    alt="icon"
                    className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer"
                    onClick={() => setPasswordHidden("text")}
                  />
                ) : (
                  <img
                    src="./Images/login/eyeIcon1.png"
                    alt="icon"
                    className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer"
                    onClick={() => setPasswordHidden("password")}
                  />
                )}
                <input
                  className={`w-full h-full ${
                    passwordHidden === "password"
                      ? "text-[8.93px] md:text-[8px] lg:text-[13px]"
                      : "text-[8.93px] md:text-[11.58px] lg:text-[20px]"
                  }  pl-[7.5px] md:pl-[10px] pr-[40px] md:pr-[50px] rounded  text-[#403f3f] outline-none`}
                  value={password}
                  onChange={passwordHandler}
                  required
                  type={passwordHidden}
                  // placeholder="Enter your first name"
                />
              </div>
            </div>
            {/* Password ends here*/}
            <Link to="/passwordReset">
              <p className="text-[#04177F] lg:text-[14px] md:text-[8.02px] text-[8.02px] font-semibold my-2 cursor-pointer tracking-wider">
                Forgot password ?
              </p>
            </Link>
            <div className="flex items-center mb-4 mt-2">
              <input
                type="checkbox"
                name=""
                id=""
                checked={checkbox}
                onChange={checkBoxHandler}
              />
              <p className="ml-2 lg:text-[14px] md:text-[8.02px] text-[8.02px] text-[#575757]  tracking-wider  ">
                Remember me next time!
              </p>
            </div>
          </div>
          <div className="w-full flex justify-center ">
            {usernameORemail === "username" ? (
              <button
                type="submit"
                disabled={username === "" || password === "" ? true : false}
                className={` ${
                  username === "" || password === ""
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-[unset]"
                } inline-flex justify-center items-center text-[#fff]   text-center  cursor-pointer 
text-[10px] font-bold leading-[11.31px]  px-[25px] py-[8px] rounded-[3px] lg:rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
`}
                style={{
                  backgroundColor: primaryColor,
                }}
              >
                <p> Signin</p>
              </button>
            ) : (
              <button
                type="submit"
                disabled={email === "" || password === "" ? true : false}
                className={` ${
                  username === "" || password === ""
                    ? "opacity-50 cursor-not-allowed"
                    : "opacity-[unset]"
                } inline-flex justify-center items-center text-[#fff]   text-center  cursor-pointer 
text-[10px] font-bold leading-[11.31px]  px-[25px] py-[8px] rounded-[3px] lg:rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px]
`}
                style={{
                  backgroundColor: primaryColor,
                }}
              >
                <p> Signin</p>
              </button>
            )}
          </div>
        </form>
        <p className="text-center text-[14px] font-semibold text-[#575757] my-4">
          -OR-
        </p>
        <div className="flex justify-center">
          <div
            onClick={() => setOpenResetTranspin(true)}
            className={`px-[10px] lg:px-[20px] py-[9px] rounded  flex items-center justify-center lg:hover:border-[#b3b3b3] lg:duration-300 border-[#cdcdcd] border-[1px] cursor-pointer `}
          >
            <img
              src="./Images/login/Google.png"
              alt="google"
              className="w-[11.46px] lg:w-[20px] "
            />
            <p className="lg:text-[14px] md:text-[8.02px] text-[8.02px]  pl-4 font-semibold tracking-wider">
              Signin with Google
            </p>
          </div>
        </div>
        <div className="flex justify-center mb-[20px] mt-[25px] lg:mb-[50px] lg:mt-[50px]">
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
