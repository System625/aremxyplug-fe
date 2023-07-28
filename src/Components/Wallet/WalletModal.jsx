import React from 'react';
const WalletModal = ({children}) => {


  return (
    <div className='absolute top-0 left-0 w-full h-full bg-black/[0.3] z-[300] flex justify-center px-[6%] md:px-[12%] pt-[58%] md:pt-[40%] lg:pt-[40%] lg:h-[161vh]'>
      <div className="relative bg-white w-full h-[225px] rounded-md md:w-[321.98px] md:h-[231.46px]">
        {children}
      </div>
    </div>
  );
}

export default WalletModal;
