import React from 'react';

const TeamMember = () => {
  return (
    <div className='w-full border-[4px] h-[467.36px] md:408.8px rounded-t-[64.19px] rounded-b-[6px] flex flex-col border-[#d4d1d1]'>
      <div className="h-[36.27%] z-50">
        <div className="w-[159.2px] mt-[46.22px] md:mt-[40.43px] h-full rounded-full border-[4px] mx-auto lg:mt-[72px] border-[#d4d1d1] bg-[#eeebeb] flex items-center justify-center">
            image
        </div>
      </div>
      <div className='pt-[50.2px] h-[63.73%] bg-[#eeebeb] z-20'>
        <h2 className='text-center mb-[10px] text-primary font-bold'>name</h2>
        <h2 className='text-center mb-[16.95px]'>role</h2>
        <p className='mx-[18px] mb-[40.2px] text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit illo illum reiciendis sit corporis animi!</p>
        <div className="w-full h-[41.1px] bg-primary"></div>
      </div>
    </div>
  );
}

export default TeamMember;
