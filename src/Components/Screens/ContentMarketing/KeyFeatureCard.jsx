import React from 'react';

const KeyFeatureCard = ({keyDetails: {title, message}}) => {
  return (
    <div className='w-full h-[203.13px] bg-secondary rounded-[11px] pt-[40.62px] px-[22px] md:h-[144.58px] lg:h-[250px]' style={{ boxShadow: "0px 0px 11.676px rgba(178, 0, 255, 0.5)" }}>
      <h2 className="text-[20px] leading-[20px] mb-[16px] text-center font-bold md:text-[10.42px] md:mb-[11.57px] lg:text-[18px] lg:leading-[27px] lg:mb-[30px]">{title}</h2>
      <p className="text-[12px] leading-[18px] text-justify md:text-[7px] md:leading-[10.41px] lg:text-[14px] lg:leading-[21px]">{message}</p>
    </div>
  );
}

export default KeyFeatureCard;
