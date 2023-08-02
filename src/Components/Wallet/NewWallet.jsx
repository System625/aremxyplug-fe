import React from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import { Link } from 'react-router-dom';

const NewWallet = () => {

  return (
    <DashBoardLayout>
        <div className='flex flex-col justify-between h-full'>
          <div>
            <div className="w-full h-[65.33px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#92abfe] flex px-[16px] lg:px-[50px] justify-between lg:rounded-[20px] pb-[5%]">
              <div className='py-[15px] lg:py-[40px] flex flex-col justify-between items-center w-full'>
                <h2 className='md:text-[9px] md:leading-[13.5px] text-[5.33px] leading-[6.9px] lg:text-base lg:leading-[20px]'>Available Balance</h2>
                <h2 className='md:text-[16px] md:leading-[20px] font-bold text-[9.33px] leading-[12px] lg:text-[28px] lg:leading-[36px]'>&#8358;10,000.00</h2>
                <h2 className='md:text-[7px] md:leading-[10px] text-[5.33px] leading-[6.9px] lg:text-[12px] lg:leading-[18px]'>currency: NGN</h2>
              </div>
            </div>
            <div className="md:mt-9 mt-6">
              <h2 className='md:text-[8px] md:leading-[12px] md:mb-3 text-[5px] leading-[7.5px] mb-4 lg:text-[14px] lg:leading-[21px]'>Wallet features</h2>
              <div className='flex flex-col gap-2 md:gap-3'>
                <div className='md:py-3 md:px-1 md:rounded-[7px] flex items-center gap-[3px] p-[5px] rounded-[4px] cursor-pointer lg:py-4 lg:gap-1 lg:px-2'style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
                  <div className='w-[6.67px] h-[6.67px] md:w-[11.46px] md:h-[11.46px] lg:h-[20px] lg:w-[20px]'>
                    <img src="./Images/wallet/add-square@3x.png" alt="" className='w-full'/>
                  </div>
                  <h2 className='md:text-[10px] md:leading-[15px] text-[8px] leading-[12px] lg:text-[16px] lg:leading-[24px]'>Add Money</h2>
                </div>
                <div className='md:py-3 md:px-1 md:rounded-[7px] flex items-center gap-[3px] p-[5px] rounded-[4px] cursor-pointer lg:py-4 lg:gap-1 lg:px-2'style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
                  <div className='w-[6.67px] h-[6.67px] md:w-[11.46px] md:h-[11.46px] lg:h-[20px] lg:w-[20px]'>
                    <img src="./Images/wallet/translate.png" alt="" className='w-full'/>
                  </div>
                  <h2 className='md:text-[10px] md:leading-[15px] text-[8px] leading-[12px] lg:text-[16px] lg:leading-[24px]'>Money Transfer</h2>
                </div>
                <div className='md:py-3 md:px-1 md:rounded-[7px] flex items-center gap-[3px] p-[5px] rounded-[4px] cursor-pointer lg:py-4 lg:gap-1 lg:px-2'style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
                  <div className='w-[6.67px] h-[6.67px] md:w-[11.46px] md:h-[11.46px] lg:h-[20px] lg:w-[20px]'>
                    <img src="./Images/wallet/note-favorite.png" alt="" className='w-full'/>
                  </div>
                  <h2 className='md:text-[10px] md:leading-[15px] text-[8px] leading-[12px] lg:text-[16px] lg:leading-[24px]'>Convert Currency</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='flex gap-2 justify-center items-center lg:mt-40'>
            <h2 className='text-[6.88px] lg:text-[12px]'>You need help?</h2>
            <Link to={`/ContactUs`} className='text-[4.58px] text-white bg-primary px-2 py-1 rounded-full lg:text-[8px]'>Contact Us</Link>
          </div>
        </div>
    </DashBoardLayout>
  );
}

export default NewWallet;
