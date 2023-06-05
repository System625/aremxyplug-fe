import React from 'react';

const ContentMarketingCard = ({cardDetails: {title, message, image, image_name}}) => {
  return (
    <div className='w-full h-[379.48px] flex flex-col justify-between md:flex-row md:h-[177.22px] md:items-center md:even:flex-row-reverse lg:h-[306.27px]'>
      <div className="md:w-[303px] lg:w-[456px]">
        <h2 className='text-[20px] leading-[30px] mb-[14.48px] font-bold md:text-[17.36] md:leading-[26.04px] lg:text-[30px] lg:leading-[45px] lg:mb-[25px]'>{title}</h2>
        <p className='text-[12px] leading-[18px] text-justify md:text-[10.42] md:leading-[15.62px] lg:text-[18px] lg:leading-[27px]'>{message}</p>
      </div>
      <div className='w-[266.1px] h-[234px] mx-auto md:h-[177.22px] md:w-[177.22px] md:mx-0 lg:h-[306.27px] lg:w-[306.27px]'>
        <img src={image} alt={image_name} className='w-full h-full object-contain'/>
      </div>
    </div>
  );
}

export default ContentMarketingCard;
