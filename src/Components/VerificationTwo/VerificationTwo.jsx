import React, {useState} from 'react'

export const VerificationTwo = () => {
    const [buttonColor, setButtonColor] = useState("#0003");

    const onClick = () => {
      setButtonColor("#04177f");
    };
  
    return (
      <div className="p-4 flex flex-col gap-[5px] rounded-[8.6px] h-[172px] w-[199px] bg-white md:absolute md:top-[20%] md:left-[50%] lg:h-[301px] lg:w-[348px] lg:rounded-[15px] lg:">
        <p className="text-[8px] lg:text-[14px]">
        Verification code has been sent to your email habib****@gmail.com
        </p>
        <div className="flex flex-col gap-[8px]">
         <p className='text-[#0003] text-[5px] lg:text-[9px]'>Use mobile number instead</p>

         <div>
            <input className='h-[20px] w-[21px] border border-[#0003]' type="text" />
          </div>

          <div onClick={onClick}
            style={{ backgroundColor: buttonColor }}
            className="mt-[5%] mx-auto w-[64px] h-[21px] flex justify-center items-center text-[#ffffff] text-[7px] rounded-md md:w-[95px] md:h-[26px] md:p-[2%] lg:w-[113px] lg:h-[38px] lg:text-[13px]"
          >
            Continue
          </div>
          
        </div>
      </div>
    );
  };
