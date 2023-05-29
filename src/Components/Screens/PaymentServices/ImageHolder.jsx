import React from 'react'

const ImageHolder = ({image}) => {
  return (
    <div className='h-[193.7px] md:w-[388.2px] md:h-[244.9px] lg:w-[670.27px] lg:h-[423px]'>
        <img src={image} alt="banking_img" className='w-full h-full object-contain'/>
    </div>
  )
}

export default ImageHolder;
