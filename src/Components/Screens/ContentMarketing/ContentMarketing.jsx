import React from 'react';
import ContentMarketingHeader from './ContentMarketingHeader';
import contentStrategy from './images/contentStrategies.svg'

const ContentMarketing = () => {
  return (
    <>
        <div className='w-[90%] mx-auto pt-[15%] lg:pt-[5%] md:pt-[5%] md:w-[84%]'>
            <ContentMarketingHeader/>
        </div>
        <div className='w-full pr-[5%] mt-[50px] md:pr-[8%] flex flex-col gap-[50px]'>
            <div className="border ml-[5%]">
                <h2 className='text-justify text-[15px] leading-[22.5px] font-bold mb-[15px]'>Let’s help you to develop the best content marketing strategies.</h2>
                <p className='text-[12px] text-justify leading-[18px]'>Your content needs to carry a unique and identifiable voice. Stay ahead of your brand with content marketing.</p>
            </div>
            <div className='h-[244.53px] w-full border border-red-500'>
                <img src={contentStrategy} alt="content_strategy" className='h-[244.53px]'/>
            </div>
        </div>
    </>
  );
}

export default ContentMarketing;
