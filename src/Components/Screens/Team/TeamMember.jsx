import React from 'react';
import instagramIcon from './images/aremxy_instagram.svg'
import facebookIcon from './images/aremxy_facebook.svg'
import twitter from './images/aremxy_twitter.svg'
import linkedin from './images/aremxy_linkedin.svg'
import email from './images/aremxy_mail.svg'

const TeamMember = ({memberData: {name, role, desc, linkedin_link, twitter_link, facebook_link, email_link, instagram_link}}) => {
  return (
    <div className='w-full border-[4px] h-[467.36px] md:h-[408.8px] lg:h-[728px] rounded-t-[64.19px] rounded-b-[6px] flex flex-col border-[#d4d1d1] lg:border-[7px]'>
      <div className="h-[36.27%] z-[30]">
        <div className="lg:border-[7px] w-[159.2px] mt-[46.22px] md:w-[139.36px] lg:w-[248px] lg:h-[248px] md:h-[139.36px] md:mt-[38.43px] h-full rounded-full border-[4px] mx-auto lg:mt-[72px] border-[#d4d1d1] bg-[#eeebeb] flex items-center justify-center">
            image
        </div>
      </div>
      <div className='pt-[50.2px] h-[63.73%] bg-[#eeebeb] z-[20] md:pt-[36.5px] lg:pt-[83px]'>
        <h2 className='text-center mb-[10px] text-primary font-bold lg:mb-[19px] text-[15.41px] leading-[18.49px] lg:text-[24px] lg:leading-[28.8px]'>{name}</h2>
        <h2 className='text-center mb-[16.95px] md:mb-[13.5px] text-[15.41px] leading-[18.49px] lg:text-[24px] lg:leading-[28.8px] font-bold'>{role}</h2>
        <p className='mx-[18px] mb-[40.2px] lg:mb-[61px] text-justify md:mb-[33.6px] text-[12px] leading-[18px] md:text-[11px] md:leading-[16.5px] lg:text-[20px] lg:leading-[30px]'>{desc}</p>
        <div className="w-full h-[41.1px] bg-primary md:h-[34.94px] lg:h-[64px]">
          <ul className='flex items-center justify-center h-full gap-[19.22px] md:gap-[17px] lg:gap-[29.94px]'>
            <li>
              <a href={`${linkedin_link}`} target='blank'  className='block w-[20.06px] h-[20.06px] md:w-[17.55px] md:h-[17.55px] lg:w-[31.25px] lg:h-[31.25px]'>
                <img src={linkedin} alt='linkedin_icon' className='w-full h-full object-cover'/>
              </a>
            </li>
            <li>
              <a href={`${facebook_link}`} className='block w-[20.06px] h-[20.06px] md:w-[17.55px] md:h-[17.55px] lg:w-[31.25px] lg:h-[31.25px]'>
                <img src={facebookIcon} alt='facebook_icon' className='w-full h-full object-cover'/>
              </a>
            </li>
            <li>
              <a href={`${instagram_link}`} className='block w-[20.06px] h-[20.06px] md:w-[17.55px] md:h-[17.55px] lg:w-[31.25px] lg:h-[31.25px]'>
                <img src={instagramIcon} alt='instagram_icon' className='w-full h-full object-cover'/>
              </a>
            </li>
            <li>
              <a href={`${twitter_link}`} className='block w-[20.06px] h-[20.06px] md:w-[17.55px] md:h-[17.55px] lg:w-[31.25px] lg:h-[31.25px]'>
                <img src={twitter} alt='twitter_icon'/>
              </a>
            </li>
            <li>
              <a href={`${email_link}`} className='block w-[26.96px] h-[20.06px] md:w-[23.58px] md:h-[17.55px] lg:w-[42px] lg:h-[31.25px]'>
                <img src={email} alt='email_icon' className='w-full h-full object-cover'/>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
