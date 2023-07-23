import React from 'react'
import ButtonLink from './ButtonLink';
import OurServiceMain from './images/OurServicesMain.png'

const OurServiceHeader = () => {
  return (
    <div className='flex flex-col gap-[50px] mb-[50px] md:flex-row md:gap-[179.76px] md:items-center md:mb-[120px] lg:gap-[310px] lg:mb-[150px]'>
      <div className="w-full lg:w-[500px] md:w-[289.93px]">
        <h2 className="font-bold text-primary text-[20px] leading-[22px] lg:text-[45px] lg:leading-[67.5px] md:text-[26.09px] md:leading-[39.14px]">Our Services</h2>
        <p className="text-[12px] my-[25px] text-justify lg:text-[18px] md:text-[15px] lg:my-[45px] md:my-[26.09px]">At AremxyPlug, we're dedicated to providing high-quality services to help you achieve your goals. Contact us today to learn more about our services and how we can help you achieve your goals.</p>
        <ButtonLink name={'sign up'} link={'signUp'}/> 
        {/* created link for sign up from the service page */}
      </div>
      <div className="w-[242px] h-[178.08] mx-auto lg:mx-0 lg:w-[315px] lg:h-[231.79px] md:mx-0 md:w-[182.66px] md:h-[134.41px]">
        <img src={OurServiceMain} alt="our_service_img" className='w-full h-full object-cover'/>
      </div>
    </div>
  )
}

export default OurServiceHeader;
