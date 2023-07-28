import React from 'react'
import { Link } from 'react-router-dom';
import MainImage from './images/telecomsMain.svg'

const TelecomsHeader = () => {
  return (
    <div className='flex flex-col gap-[57.54px] mb-[80px] md:flex-row md:justify-between md:items-center md:mb-[120.49px] lg:mb-[150px]'>
      <div className="w-full h-[206px] flex flex-col justify-between md:w-[288.98px] md:h-[199.51px] lg:w-[500px] lg:h-[341px]">
        <h2 className="text-primary text-[20px] font-bold leading-[30px] md:text-[26.01px] lg:text-[45px]">Telecom Services</h2>
        <p className="text-[12px] leading-[18px] text-justify lg:text-[18px] lg:leading-[27px]">Our Telecom services offers fast and secure connectivity for all your telecommunication needs. Whether you need to make calls, send messages, or access the internet, our telecom products and service has got you covered.</p>
        <div>
            <Link to='/signUp' className='inline-block px-[25px] py-[12px] text-white font-bold text-[10px] leading-[11.31px] bg-primary rounded-[7px] md:py-[9px] md:px-[21px] lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>Sign Up</Link>
        </div>
      </div>
      <div className='flex justify-center'>
        <div className='w-[180.19px] h-[172.78px] md:w-[197.94px] md:h-[189.79px] lg:w-[311.78px] lg:h-[298.85px]'>
            <img src={MainImage} alt="telecoms_img" className='lg:w-full lg:h-full lg:object-contain'/>
        </div>
      </div>
    </div>
  )
}

export default TelecomsHeader;
