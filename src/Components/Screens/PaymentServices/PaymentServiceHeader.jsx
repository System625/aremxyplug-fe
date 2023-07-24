import React from 'react'
import { Link } from 'react-router-dom';
import paymentMain from './images/PaymentMain.svg'

const PaymentServiceHeader = () => {
  return (
    <div className='flex flex-col gap-[50px] mb-[80px] md:flex-row md:gap-[128.65px] md:items-center lg:gap-[233px] md:mb-[150px]'>
      <div className="flex flex-col justify-between w-full h-[198px] md:w-[289.58px] md:h-[198.5px] lg:w-[500px] lg:h-[339px]">
        <h2 className="text-[20px] font-bold text-primary text-justify md:text-[26.06px] md:leading-[39.09px] lg:text-[45px] lg:leading-[67.5px]">Payment Services</h2>
        <p className="text-[12px] lg:text-[18px] text-justify">Thanks for visiting our payment services! We offer quick and secure payment processing to make sure your transactions go off without a hitch, using our user-friendly interface to receive money both locally and internationally.</p>
        <div>
          <Link to={`/signUp`} className='bg-primary text-[10px] font-bold leading-[11.31px] text-white px-[35px] py-[12px] inline-block rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>Sign Up</Link>
        </div>
      </div>
      <div className='w-[291px] h-[164.37px] mx-auto md:mx-0 md:w-[269.15px] md:h=[155.8px] lg:w-[464.7px] lg:h-[262.47px]'>
        <img src={paymentMain} alt="payment_img" className='w-full h-full object-contain'/>
      </div>
    </div>
  )
}

export default PaymentServiceHeader;
