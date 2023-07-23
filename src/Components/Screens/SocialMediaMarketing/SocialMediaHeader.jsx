import React from 'react';
import { Link } from 'react-router-dom';
import socialMediaMain from './images/socialMediaMain.svg'

const SocialMediaHeader = () => {
  return (
    <div className='w-full flex flex-col gap-[50px] md:flex-row md:justify-between'>
      <div className="w-full h-[204.83px] flex flex-col justify-between md:w-[290px] md:h-[207.83px] lg:w-[500px] lg:h-[366px]">
        <h2 className="text-primary font-bold text-[20px] leading-[30px] w-[50%] md:text-[25.53px] md:leading-[38.3px] md:w-[75%] lg:text-[45px] lg:leading-[62.5px]">Social Media Marketing</h2>
        <p className="text-[12px] leading-[18px] text-justify md:text-[10px] md:leading-[15.47px] lg:text-[18px] lg:leading-[27px]">Social media marketing can be an effective way to reach a wide audience and build brand awareness. As a business owner, you may want to take the advantage of your customers' habits, which can help you to generate significant leads.</p>
        <div>
          <Link to={`/ContactUs`} className='bg-primary text-[10px] font-bold leading-[11.31px] text-white px-[35px] py-[12px] inline-block rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>Contact Sales</Link>
        </div>
      </div>
      <div className='w-[77.78%] mx-auto md:w-[39%] md:mx-0'>
        <img src={socialMediaMain} alt="social_media" className=' h-full w-full object-cover md:object-contain'/>
      </div>
    </div>
  );
}

export default SocialMediaHeader;
