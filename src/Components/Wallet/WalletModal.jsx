import React from 'react';
const WalletModal = ({children}) => {


  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/[0.3] z-[300] flex justify-center items-center'>
      <div className='bg-white p-5 mx-[11%] md:mx-[30%] grow pt-[15px] pb-[33px] px-[22px] rounded-[8px] h-[300px] relative md:rounded-[11.5px] lg:h-[500px]'>
        {children}
      </div>
    </div>
  );
}

export default WalletModal;
