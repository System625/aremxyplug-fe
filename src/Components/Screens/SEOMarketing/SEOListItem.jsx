import React from 'react'

const SEOListItem = ({listItemDetail: {title, message}}) => {
  return (
    <li className='flex justify-center flex-col md:justify-start'>
        <div className='flex items-center gap-[10px] justify-center mb-[20px] md:justify-start md:mb-[5px] lg:ml-[10px]'>
            <span className='block h-[6px] w-[6px] bg-black rounded-full lg:h-[7px] lg:w-[7px]'></span>
            <h2 className='text-[15px] md:text-[10px] lg:text-[18px]'>{title}</h2>
        </div> 
        <p className='text-[12px] text-justify md:text-[7px] lg:text-[12px]'>{message}</p>
    </li>
  )
}

export default SEOListItem;
