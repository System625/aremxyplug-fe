import React from 'react'
import { Link } from 'react-router-dom';

const OurServiceCard = ({cardDetails:{title, image, link, message, image_name}}) => {
  return (
    <div className='w-full h-[353.15px] flex flex-col gap-[30px] lg:h-[263px] md:h-[153.13px]'>
      <h2 className="text-[20px] leading-[30px] text-primary font-bold text-center md:text-left md:hidden">{title}</h2>
      <div className="flex flex-col gap-[30px] md:flex-row-reverse lg:gap-[396px] md:gap-[229.62px]">
        <div className="w-full h-[116px] flex justify-center lg:w-[263px] lg:h-[263px] lg:py-4 md:w-[153px] md:h-[153px] md:py-0">
            <img src={image} alt={image_name} className='w-full h-auto object-contain'/>
        </div>
        <div className="flex flex-col gap-[30px] lg:gap-[45px] md:gap-[17.4px] lg:w-[535px] md:w-[310.23px]">
            <h2 className="hidden lg:text-[20px] leading-[30px] text-primary font-bold text-center md:text-left md:block md:[17.4px]">{title}</h2>
            <p className='text-[12px] lg:text-[18px] md:text-[11px] text-justify'>{message}</p>
            <div className="text-center md:text-left">
                <Link to={`/${link}`} className='py-[9px] px-[21px] bg-primary text-white font-bold capitalize rounded-[4.73px] lg:py-[15px] lg:px-[37px] lg:text-[14px] md:py-[9px] md:px-[21px] md:text-[8px]'>Explore</Link>
            </div>
        </div>
      </div>
    </div>
  )
}

export default OurServiceCard;
