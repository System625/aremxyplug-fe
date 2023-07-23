import React from 'react';
import { Link } from 'react-router-dom';
import seoMain from './images/seoMain.svg'

const SEOHeader = () => {
  return (
    <div className='flex flex-col gap-[50px] lg:gap-[150px]'>
        <div className='flex flex-col gap-[50px] md:flex-row md:justify-between'>
            <div className="w-full h-[210.22px] flex flex-col justify-between md:w-[290px] md:h-[205.39px] lg:w-[500px] lg:h-[366px]">
                <h2 className="font-bold text-primary text-[20px] leading-[30px] w-[146.02px] lg:text-[45px] lg:leading-[67.5px] md:text-[25.53px] md:leading-[38.3px]">SEO Marketing</h2>
                <p className="text-[12px] text-justify lg:text-[18px] lg:leading-[27px] md:text-[10px]">SEO is the practice of optimizing your website and its content to improve its visibility and ranking on search engine results pages. You can raise your brand's visibility and position within the top search engines by utilizing tried-and-true SEO strategies.</p>
                <div>
                    <Link to={`/ContactUs`} className='bg-primary text-[10px] font-bold leading-[11.31px] text-white px-[35px] py-[12px] inline-block rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>Contact Sales</Link>
                </div>
            </div>
            <div className='w-[77.78%] mx-auto md:w-[39%] md:mx-0'>
                <img src={seoMain} alt="main_img" className='w-full h-full object-contain'/>
            </div>
        </div>
        <div className='mb-[37.06px] md:w-[425.52px] lg:w-[750px]'>
            <h2 className="text-justify font-bold text-[15px] leading-[22.5px] mb-[11px] lg:text-[30px] lg:leading-[45px] md:text-[13.62px]">Increased your business growth and revenue with SEO best practices.</h2>
            <p className='text-[12px] text-justify lg:text-[18px]'>By understanding the basic principles of SEO, we can help you develop appealing and high-ranking content to reach your target audience in a way that meets their needs.</p>
        </div>
    </div>
  );
}

export default SEOHeader;
