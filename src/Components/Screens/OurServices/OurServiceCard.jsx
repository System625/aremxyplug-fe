import React from 'react'
import { Link } from 'react-router-dom';

const OurServiceCard = ({cardDetails:{title, image, link, message, image_name}}) => {
  return (
    <div className='w-full h-[353.15px] flex flex-col justify-between lg:h-[263px] md:h-[153.13px]'>
      <h2 className="text-[18px] leading-[27px] text-primary font-bold text-center md:text-left md:hidden">{title}</h2>
      <div className="flex flex-col gap-[30px] md:flex-row-reverse md:gap-[0] md:justify-between">
        <div className="w-full h-[110px] flex justify-center lg:w-[263px] lg:h-[263px] lg:py-4 md:w-[153px] md:h-[153px] md:py-0">
            <img src={image} alt={image_name} className='w-full h-auto object-contain'/>
        </div>
        <div className="flex flex-col gap-[30px] lg:gap-[0px] md:justify-between md:gap-[0] lg:w-[535px] md:w-[310.23px]">
            <h2 className="hidden md:text-[16.51px] md:leading-[24.76px] text-primary font-bold text-center md:text-left md:block lg:text-[30px] lg:leading-[45px]">{title}</h2>
            <p className='text-[12px] lg:text-[18px] md:text-[11px] text-justify'>{message}</p>
            <div className="text-center md:text-left">
              <Link to={`/${link}`} className='bg-primary text-[10px] font-bold leading-[11.31px] text-white px-[35px] py-[12px] inline-block rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>Explore</Link>
                {/* each of the explore will link to separate page related to them */}
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurServiceCard;
