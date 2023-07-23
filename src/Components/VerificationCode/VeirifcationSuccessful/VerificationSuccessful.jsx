import React from "react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ContextProvider } from "../../Context";

export const VerificationSuccessful = () => {
  const { setViaSms, setViaEmail, setVerification } = useContext(ContextProvider);
  const navigate = useNavigate();
  const redirectHandler = () => {
    setViaSms(false);
    setViaEmail(false);
    setVerification(false)
    navigate("/Login");
  };
  return (
    <div className="justify-between text-center border border-[#58DA8F] p-4 flex flex-col gap-[5px] rounded-[8.6px] h-[172px] w-[199px] bg-white md:absolute md:top-[20%] md:left-[50%] lg:h-[301px] lg:w-[348px] lg:rounded-[15px]">
      <div>
        <h1 className="text-[8px] lg:text-[14px]">Verification Successful</h1>
        <p className="text-[#737373] text-[6px] lg:text-[10px]">
          Sign in to your account to continue operations!
        </p>
      </div>
      <img
        className="flex justify-center items-center mx-auto w-[60px] h-[60px] md:h-[] lg:w-[110px] lg:h-[110px]"
        src="https://s3-alpha-sig.figma.com/img/5daa/fe9d/4e1bef46b4d7e33b37b87c021d7f7bbe?Expires=1689552000&Signature=hBMX7azAWolyRH-yUPtM2aF7r3E2eM-kipTW~6LGUZ9a4dwLxr-Tb4nN9iN1eh6K7~KCDn6Tl3TTnN~hxhwRvPtFPnntv-qz5Jk78k-0G~AEbR5-PjkFPYXzYo05GHypWy3nfAFtRmiP2Uy5yZ2vR9RE5rHggXHJlSUnHAUiA40ag5GN-h1x9uTBTD2n--RokPy~BBxR5kxNoT05ugzUOvt37ZucZxP7R588GjBwRRvvlas~1nKOV8Z80natqYH01WTlg4jdTgGoxg9Ry5SQOvu52JFJJ5Ammh2W98MN1~AhzgrMGQl-kTbZomcTC5khCkTgQAHchftHlJTvmvZZSg__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
        alt="successful"
      />
      {/* <Link to="/Login"> */}
      <div
        onClick={redirectHandler}
        className="bg-[#04177f] cursor-pointer mt-[5%] mx-auto w-[64px] h-[21px] flex justify-center items-center text-[#ffffff] text-[7px] rounded-[4.5px] lg:rounded-[8px] md:w-[95px] md:h-[26px] md:p-[2%] lg:w-[113px] lg:h-[38px] lg:text-[13px]"
      >
        Continue
      </div>
      {/* </Link> */}
    </div>
  );
};
