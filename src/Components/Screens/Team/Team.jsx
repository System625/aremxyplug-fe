import React from 'react';
import TeamMember from './TeamMember';
import { memberData } from './data/data';

const Team = () => {
  return (
    <div className='w-[90%] md:w-[84%] mx-auto pt-[15%] md:pt-[5%] mb-[25%] md:mb-[15%]'>
        <div className="w-full h-full md:grid md:grid-cols-2 md:grid-rows-2 md:gap-x-[131.96px] md:gap-y-[104.49px] lg:gap-x-[235px] lg:gap-y-[158px] flex flex-col gap-[80px]">
          { memberData.map((item) => (
            <TeamMember key={item.id} memberData={item}/>
          ))}
        
        </div>
    </div>
  );
}

export default Team;
