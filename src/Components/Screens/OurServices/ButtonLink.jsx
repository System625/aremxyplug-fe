import React from 'react';
import { Link } from 'react-router-dom';

const ButtonLink = ({link, name}) => {
  return (
    <div>
      <Link to={`/${link}`} className='py-[12px] px-[35px] text-[10px] leading-[11.31px] rounded-[7px] lg:py-[15px] lg:px-[37px] bg-primary text-white lg:rounded-[8px] capitalize lg:text-[14px] lg:leading-[16px] font-bold'>{name}</Link>
    </div>
  );
}

export default ButtonLink;
