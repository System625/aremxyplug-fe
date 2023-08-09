import React, { useContext } from 'react';
import { ContextProvider } from '../Context';



const WalletModal = ({children}) => {
  const {  isDarkMode } = useContext(ContextProvider);

  return (
    <div className='fixed top-0 left-0 w-full h-full bg-black/[0.3] z-[300] flex justify-center items-center'>
      <div className={`${isDarkMode ? "bg-[#000] border":"bg-[#fff]"}  p-5 mx-[11%] md:mx-[30%] grow pt-[15px] pb-[33px] px-[22px] rounded-[8px] h-[300px] relative md:rounded-[11.5px] lg:h-[500px]`}>
        {children}
      </div>
    </div>
  );
}

export default WalletModal;
