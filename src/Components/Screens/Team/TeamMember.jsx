import React from 'react';
import instagramIcon from './images/aremxy_instagram.svg'
import facebookIcon from './images/aremxy_facebook.svg'
import twitter from './images/aremxy_twitter.svg'
import linkedin from './images/aremxy_linkedin.svg'
import email from './images/aremxy_mail.svg'

const TeamMember = ({memberData: {name, role, desc, linkedin_link, twitter_link, facebook_link, email_link, instagram_link}}) => {
  return (
    <div className='w-full border-[4px] h-[467.36px] md:h-[408.8px] lg:h-[728px] rounded-t-[64.19px] rounded-b-[6px] flex flex-col border-[#d4d1d1] lg:border-[7px]'>
      <div className="h-[36.27%] z-50">
        <div className="lg:border-[7px] w-[159.2px] mt-[46.22px] md:w-[139.36px] lg:w-[248px] lg:h-[248px] md:h-[139.36px] md:mt-[38.43px] h-full rounded-full border-[4px] mx-auto lg:mt-[72px] border-[#d4d1d1] bg-[#eeebeb] flex items-center justify-center">
            image
        </div>
      </div>
      <div className='pt-[50.2px] h-[63.73%] bg-[#eeebeb] z-20 md:pt-[36.5px] lg:pt-[83px]'>
        <h2 className='text-center mb-[10px] text-primary font-bold lg:mb-[19px] lg:text-[24px] leading-[28.8px]'>{name}</h2>
        <h2 className='text-center mb-[16.95px] md:mb-[13.5px] lg:text-[24px] leading-[28.8px]'>{role}</h2>
        <p className='mx-[18px] mb-[40.2px] lg:mb-[61px] text-justify md:mb-[33.6px] text-[12.84px] leading-[19.26px] md:text-[11px] md:leading-[16.5px] lg:text-[20px] lg:leading-[30px]'>{desc}</p>
        <div className="w-full h-[41.1px] bg-primary md:h-[34.94px] lg:h-[64px]">
          <ul className='flex items-center justify-center h-full gap-[19.22px] md:gap-[17px] lg:gap-[29.94px]'>
            <li>
              <a href={`${linkedin_link}`} style={{backgroundImage: `url(${linkedin})`}} className='block bg-no-repeat bg-cover w-[20.06px] h-[20.06px] md:w-[17.55px] md:h-[17.55px] lg:w-[31.25px] lg:h-[31.25px]'></a>
            </li>
            <li>
              <a href={`${facebook_link}`} style={{backgroundImage: `url(${facebookIcon})`}} className='block bg-no-repeat bg-cover w-[20.06px] h-[20.06px] md:w-[17.55px] md:h-[17.55px] lg:w-[31.25px] lg:h-[31.25px]'></a>
            </li>
            <li>
              <a href={`${instagram_link}`} style={{backgroundImage: `url(${instagramIcon})`}} className='block bg-no-repeat bg-cover w-[20.06px] h-[20.06px] md:w-[17.55px] md:h-[17.55px] lg:w-[31.25px] lg:h-[31.25px]'></a>
            </li>
            <li>
              <a href={`${twitter_link}`} style={{backgroundImage: `url(${twitter})`}} className='block bg-no-repeat bg-cover w-[20.06px] h-[20.06px] md:w-[17.55px] md:h-[17.55px] lg:w-[31.25px] lg:h-[31.25px]'></a>
            </li>
            <li>
              <a href={`${email_link}`} style={{backgroundImage: `url(${email})`}} className='block bg-no-repeat bg-cover w-[26.96px] h-[20.06px] md:w-[23.58px] md:h-[17.55px] lg:w-[42px] lg:h-[31.25px]'></a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
