import React from 'react';
import { BsDot } from 'react-icons/bs'

const SocialMediaListItem = ({title, message}) => {
  return (
    <div className='flex flex-col gap-[20px] md:gap-[10px]'>
      <div className="flex justify-start w-[60%] mx-auto md:mx-0 md:w-full">
        <BsDot className='text-[20px]'/>
        <h2 className='text-[15px] md:text-[10px] lg:text-[18px] lg:leading-[27px] font-bold text-center md:text-left'>{title}</h2>
      </div>
      <p className='text-[12px] text-justify md:text-[7px] lg:text-[12px] lg:leading-[18px]'>{message}</p>
    </div>
  );
}

export default SocialMediaListItem;
