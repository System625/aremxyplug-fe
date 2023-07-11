import React from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';

const Wallet = () => {
  return (
    <DashBoardLayout>
        <div className="px-[6.67%]">
          <div className="w-full h-[65.33px] mt-8 rounded-[7px] bg-[#61CCFF] flex px-[15px]">
            <div className='py-[15px] grow'>
              <h2 className='text-[8px] font-bold mb-3'>WALLETS OVERVIEW.</h2>
              <h2 className='text-[6.6px]'>Please select wallet type from the available options below.</h2>
            </div>
            <div className='shrink h-full'>
              <img src='./Images/wallet/walletBanner.png' alt="" className='w-full h-full'/>
            </div>
          </div>
          <div className="w-full h-[102.28px] mt-4 flex flex-col justify-between">
            <h2 className='text-[8px] font-bold mb-3'>Select Wallets:</h2>
            <div className='w-full h-[61.64px] flex justify-between'>
              <div className='flex justify-center items-center px-[15px] py-[20px] rounded-[5px]' style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
                <div className='text-center'>
                  <div className='w-[13.79px] h-[13.79px] mx-auto'>
                    <img src="./Images/wallet/walletIcon.png" alt="icon" className='w-full'/>
                  </div>
                  <h2 className='text-[9.2px] mt-1'>Fiat Wallets</h2>
                </div>
              </div>
              <div className='flex justify-center items-center px-[15px] py-[20px] rounded-[5px]' style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
                <div className='text-center'>
                  <div className='w-[13.79px] h-[13.79px] mx-auto'>
                    <img src="./Images/wallet/walletIcon.png" alt="icon" className='w-full'/>
                  </div>
                  <h2 className='text-[9.2px] mt-1'>Fiat Wallets</h2>
                </div>
              </div>
              <div className='flex justify-center items-center px-[15px] py-[20px] rounded-[5px]' style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
                <div className='text-center'>
                  <div className='w-[13.79px] h-[13.79px] mx-auto'>
                    <img src="./Images/wallet/walletIcon.png" alt="icon" className='w-full'/>
                  </div>
                  <h2 className='text-[9.2px] mt-1'>Fiat Wallets</h2>
                </div>
              </div>
            </div>
          </div>
        </div>
    </DashBoardLayout>
  );
}

export default Wallet;
