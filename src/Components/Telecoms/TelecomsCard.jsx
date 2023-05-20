import React from 'react';

const TelecomsCard = ({cardData: {title , image, message, image_name}}) => {
  return (
    <div className='w-full h-[226.29px] flex flex-col justify-between md:gap-[30px] md:w-[288.96px] md:h-[183.23px] lg:w-[500px] lg:h-[311.83px] lg:gap-[45px]'>
        <h2 className="text-[20px] text-primary font-bold leading-[30px] text-center md:text-left">{title}</h2>
        <div className="w-[96.72px] h-[99.31px] mx-auto md:w-[95.94px] md:h-[91.96px] lg:w-[155px] lg:h-[155px] md:mx-0 md:overflow-hidden">
            <img src={image} alt={image_name} className='w-full h-full object-contain overflow-hidden'/>
        </div>
        <p className='text-[12px] text-justify leading-[18px] lg:text-[18px] lg:leading-[27px]'>{message}</p>
    </div>
  );
}

export default TelecomsCard;
