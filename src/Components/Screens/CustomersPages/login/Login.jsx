import React, { useContext, useEffect } from "react";
import LoginForm from "../../../loginForm/LoginForm";
import { ContextProvider } from "../../../Context";
function Login() {
  const { hideNavbar, setHideNavbar } = useContext(ContextProvider);

  const setNav = () => {
    setHideNavbar(true);
  };
  console.log(hideNavbar);

  useEffect(() => {
    setNav();
    return () => {
      setHideNavbar(false);
    };
    // eslint-disable-next-line
  }, []);
  return (
    <div className="relative h-[100vh] grid grid-cols-1">
      <div className="bg-[#04177F] "></div>
      <div className="bg-[#fff] "></div>

      <div className="absolute top-0 bottom-0 right-0 left-0 grid grid-cols-1 md:grid-cols-2 items-center">
        <div className="h-[80%] md:h-[100%] flex flex-col justify-center items-center ">
          {" "}
          <div className="mt-[10px]">
            <p className="text-[18.33px] lg:text-[32px] font-bold text-[#fff]">
              Welcome to AremxyPlug!{" "}
            </p>
            <p className="text-[9.17px] lg:text-[16px] text-[#fff]">
              The one-stop shop solution for all your digital needs.
            </p>
          </div>
          <img
            src="./Images/login/loginImage.png"
            alt="background_image"
            className="h-[50%] md:h-[20%] lg:h-[35%] "
          />
          <div className="h-0 md:h-[25%] lg:h-[50%]  w-[100px] flex justify-center items-center"></div>
        </div>

        <div className="mt-[-50px]  md:mt-[unset] md:h-[100%] flex items-center">
          <LoginForm />
        </div>
      </div>
    </div>
  );
}

export default Login;
