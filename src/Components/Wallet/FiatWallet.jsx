import React from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import { Link } from 'react-router-dom';

const FiatWallet = () => {
  return (
    <DashBoardLayout>
        <div className="px-[6.67%] pb-[5%]">
          <div className="w-full h-[65.33px] md:h-[112.29px] lg:h-[196px] mt-8 rounded-[7px] bg-[#ff4343]/[0.5] flex px-[15px]">
            <div className='py-[15px] grow'>
              <h2 className='text-[8px] md:text-[13.75px] font-bold mb-3 lg:text-[24px]'>FIAT WALLETS</h2>
              <h2 className='text-[6.6px] md:text-[11.46px] lg:text-[20px]'>The below Fiat Currency Wallets are reserved for your account only.</h2>
            </div>
            <div className='shrink h-full'>
              <img src='./Images/wallet/fiatBanner.png' alt="" className='w-full h-full'/>
            </div>
          </div>
          <div className='mt-4 flex items-center'>
            <div className='w-[153.92px] h-[13.66px] relative'>
                <input type="text" name="" placeholder='Search for Wallets, e.g; NGN or Nigeria' className='w-[100%] h-[100%] p-0 outline-none placeholder:text-[5.33px] rounded-[4px] border block px-1'/>
                <div className='absolute right-[4px] bottom-[3px] w-[6.66px] h-[6.66px]'>
                    <img src="./Images/wallet/search-status.png" alt="searchIcon" className='w-full h-full'/>  
                </div>
            </div>
            <button>search</button>
          </div>
          <div className='flex gap-2 justify-center items-center mt-32'>
            <h2 className='text-[6.88px] lg:text-[12px]'>You need help?</h2>
            <Link to={`/ContactUs`} className='text-[4.58px] text-white bg-primary px-2 py-1 rounded-full lg:text-[8px]'>Contact Us</Link>
          </div>
        </div>
    </DashBoardLayout>
  );
}

export default FiatWallet;
