import React from 'react';

const SocialMediaCard = ({cardDetail:{title, message, image, image_name}}) => {
  return (
    <div className='flex flex-col gap-[21px] md:flex-row md:gap-[0] md:even:flex-row-reverse md:justify-between md:items-center md:h-[143.23px] lg:h-[250px]'>
      <div className="w-full flex flex-col gap-[21px] md:w-[300px] md:gap-[15px] md:h-full md:justify-center lg:w-[500px] lg:gap-[25px]">
        <h2 className='text-[20px] leading-[30px] text-center font-bold md:text-left lg:text-[30px] lg:leading-[45px]'>{title}</h2>
        <p className='text-[12px] leading-[18px] text-justify md:text-[10.31px] md:leading-[15.47px] lg:text-[18px] lg:leading-[27px]'>{message}</p>
      </div>
      <div className='w-[65%] mx-auto md:w-auto md:h-full md:mx-0'>
        <img src={image} alt={image_name} className='w-full h-full object-contain'/>
      </div>
    </div>
  );
}

export default SocialMediaCard;
