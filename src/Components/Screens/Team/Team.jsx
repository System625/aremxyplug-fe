import React from 'react';
import TeamMember from './TeamMember';

const Team = () => {
  return (
    <div className='w-[90%] md:w-[84%] mx-auto pt-[15%] md:pt-[5%] mb-[25%] md:mb-[15%]'>
        <div className="w-full h-full md:grid md:grid-cols-2 md:grid-rows-2 lg:gap-x-[228px] lg:gap-y-[150px] flex flex-col gap-[80px]">
        <TeamMember/>
        <TeamMember/>
        <TeamMember/>
        <TeamMember/>
        <TeamMember/>
        </div>
    </div>
  );
}

export default Team;
