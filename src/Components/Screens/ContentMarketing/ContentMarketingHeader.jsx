import React from 'react';
import { Link } from 'react-router-dom';
import contentMain from './images/contentMainDesktop.svg'

const ContentMarketingHeader = () => {
  return (
    <>
        <div className='flex flex-col gap-[50px] md:flex-row md:gap-[0] md:justify-between md:items-center'>
            <div className="flex flex-col justify-between w-full h-[245.92px] md:h-[245.33px] md:w-[290px] lg:w-[500px] lg:h-[420px]">
                <h2 className="text-[20px] text-primary font-bold leading-[30px] w-[40%] md:text-[26.06px] lg:text-[45px] lg:leading-[62.5px]">Content Marketing</h2>
                <p className="text-[12px] lg:text-[18px] md:text-[10px]">Content marketing is a powerful tool for companies looking to connect with their audience and drive engagement. The process of attracting, interacting with, and delighting your target markets is what content marketing does. You can do just that—and as a result, increase conversions, improve brand awareness, boost revenue, and more.</p>
                <div>
                    <Link to={`/ContactUs`} className='bg-primary text-[10px] font-bold leading-[11.31px] text-white px-[35px] py-[12px] inline-block rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>Contact Sales</Link>
                </div>
            </div>
            <div className='w-[77.78%] mx-auto md:w-[39%] md:mx-0'>
                <img src={contentMain} alt="content_main" className='w-full h-full object-contain'/>
            </div>
        </div>
    </>
  );
}

export default ContentMarketingHeader;
