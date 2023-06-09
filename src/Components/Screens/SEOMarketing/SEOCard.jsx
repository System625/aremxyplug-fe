import React from 'react';

const SEOCard = ({cardDetail: {title, message, image}}) => {
  return (
    <div className='flex flex-col justify-between w-full h-[387.25px] md:h-full md:flex-row md:even:flex-row-reverse md:items-center'>
        <div className='md:w-[310px] lg:w-[588px]'>
            <h2 className='text-[20px] leading-[30px] font-bold mx-auto text-center mb-[14px] w-[80%] md:px-0 md:text-left md:mx-0 md:w-full lg:text-[30px] lg:leading-[45px] lg:w-[70%] lg:mb-[25px]'>{title}</h2>
            <p className='text-[12px] leading-[18px] text-justify lg:text-[18px] lg:leading-[27px]'>{message}</p>
        </div>
        <div className='w-[234px] h-[234px] mx-auto md:w-[148px] md:h-auto md:mx-0 lg:w-[255.1px] lg:h-[235px]'>
            <img src={image} alt="item_img" className='w-full h-full object-contain'/>
        </div>
    </div>
  );
}

export default SEOCard;
