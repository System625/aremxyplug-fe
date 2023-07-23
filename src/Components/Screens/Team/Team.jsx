import React from 'react';
import TeamMember from './TeamMember';
import { memberData } from './data/data';
import { useState } from 'react';
import { Link } from 'react-router-dom'

const Team = () => {
  const halfData = memberData.slice(0, 10);
  const secondHalfData = memberData.slice(10, 20);
  console.log(secondHalfData)
  console.log(halfData)

  const [show, setShow] = useState(false)
  return (
    <div className='w-[90%] md:w-[84%] mx-auto pt-[15%] md:pt-[5%] mb-[25%] md:mb-[15%]'>
      <div className="flex flex-col gap-[53.39px] mb-[53px] md:gap-[100px] md:mb-[125.97px] lg:gap-[150px] lg:mb-[150px]">
       <h2 className="w-[80%] mx-auto py-[22.36px] border rounded-full text-center font-bold text-[16.77px] leading-[18.45px] md:w-[33%] lg:text-[30px] lg:leading-[45px] lg:py-[40px] lg:w-[40%]" style={{boxShadow:`0px 0px 11.186px rgba(0, 0, 0, 0.25)`}}>OUR TEAM MEMBERS</h2>
       <p className='text-[12px] leading-[18px] text-justify lg:text-[18px] lg:leading-[27px]'>At AremxyPlug, we think that the success of our company is built on the strength of our team. We take great pride in having a skilled and experienced team of experts who are committed to giving our clients excellent services.</p>
      </div>
      <div className="w-full h-full md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-[131.96px] md:gap-y-[104.49px] lg:gap-x-[235px] lg:gap-y-[158px] hidden">
        { memberData.map((item) => (
          <TeamMember key={item.id} memberData={item}/>
        ))}
      </div>
      <div className="flex flex-col gap-[80px] md:hidden">
        { halfData.map((item) => (
           <TeamMember key={item.id} memberData={item}/> 
        ))}
        { show 
          ? 
          <div className="text-center">
            <div className="flex flex-col gap-[80px] mb-[60.93px]">
              { halfData.map((item) => (
                <TeamMember key={item.id} memberData={item}/> 
              ))}
            </div>
            <button className='cursor-pointer bg-primary text-[10px] font-bold leading-[11.31px] text-white px-[16px] py-[11px] inline-flex gap-[10px] items-center rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]' onClick={()=> setShow(false)}>
              Less
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 15.75l7.5-7.5 7.5 7.5" />
              </svg>
            </button>
          </div>
          :
          <div className="text-center">
            <button className='cursor-pointer bg-primary text-[10px] font-bold leading-[11.31px] text-white px-[16px] py-[11px] inline-flex gap-[10px] items-center rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]' onClick={()=> setShow(true)}>
              More
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-[14px] h-[14px]">
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
              </svg>
            </button>
          </div>
        }
      </div>
      <div className='flex justify-center mt-[100px]'>
          <Link to={`/ContactUs`} className='bg-primary text-[10px] font-bold leading-[15px] text-white px-[35px] py-[12px] inline-block rounded-[7px] lg:px-[37px] lg:py-[15px] lg:text-[14px] lg:leading-[16px]'>Contact Us</Link>
      </div>
    </div>
  );
}

export default Team;
