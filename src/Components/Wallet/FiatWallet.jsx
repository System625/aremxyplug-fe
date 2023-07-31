import React, { useState } from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import { Link } from 'react-router-dom';
import AddWallet from './AddWallet';
import { BsEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'
import { Navigate } from 'react-router-dom'
import WalletModal from './WalletModal';
 
const FiatWallet = () => {
  const [showModal, setShowModal] = useState(false);
  const [showMoney, setShowMoney] = useState(false);
  const [selection, setSelection] = useState('');

    const countryList = [
        {
          id:1,
          name: 'Nigeria',
          code: 'NGN',
          flag: require('./Images/ng.svg').default
        },
        {
          id:2,
          name: 'United States',
          code: 'USD',
          flag: require('./Images/us.svg').default
        },
        {
          id:3,
          name: 'United Kingdom',
          code: 'GBP',
          flag: require('./Images/gb.svg').default
        },
        {
          id:4,
          name: 'European Union',
          code: 'EUR',
          flag: require('./Images/eu.svg').default
        },
        {
          id:5,
          name: 'Australia',
          code: 'AUD',
          flag: require('./Images/au.svg').default
        },
        {
          id:6,
          name: 'Kenya',
          code: 'KSH',
          flag: require('./Images/ke.svg').default
        },
      ];

      const handleSelection =(value)=> {
        setSelection(value);
        setShowModal(true);
      }

      const notAvailableCountries = ['United States', 'United Kingdom', 'Kenya', 'Australia', 'European Union']
      const notAvailable = notAvailableCountries.includes(selection);
      console.log(notAvailable);
      console.log(selection)

  const TableRow = ({name, flag, code, onClick}) => {
    const value='10,000'
    return (
      <div className="grid grid-cols-3 text-[5.33px] leading-[6.93px] md:text-[9.17px] md:leading-[11.92px] border-b last:border-b-0 lg:text-[16px] lg:leading-[24px] cursor-pointer" onClick={onClick}>
        <h2 className='text-slate-400'>{name}</h2>
        <div className='flex gap-1 items-center justify-center'>
          <div className='w-[9.67px] h-[9.67px] md:w-[16.77px] md:h-[16.77px] lg:w-[29px] lg:h-[29px] rounded-full overflow-hidden flex items-center justify-center lg:mb-[3px]'>
            <img src={flag} alt="" className='w-full h-full object-cover'/>
          </div>
          <h2 className='text-right'>{code}</h2>
        </div>
        <div className='flex gap-1 justify-end items-center text-slate-400'>
          {showMoney ? <h2>{code}{value}</h2> : <h2>{code}XXXXXX.XX</h2>}
          <div className='flex gap-1'>
              <BsEyeFill onClick={() => setShowMoney(true)}/>
              <BsFillEyeSlashFill onClick={() => setShowMoney(false)}/>
          </div>
        </div>
      </div>
    )
  }

  return (
    <DashBoardLayout>
        <div className="px-[6.67%] pb-[5%] md:px-[8%]">  
          { notAvailable ? 
              <>
                <div className="w-full h-[65.33px] md:h-[112.29px] lg:h-[196px] mt-8 rounded-[7px] bg-[#ff4343]/[0.5] flex px-[16px] lg:px-[50px] justify-between">
                  <div className='py-[13px] lg:py-[40px]'>
                    <h2 className='text-[8px] md:text-[13.75px] md:leading-[20.63px] font-bold mb-3 lg:text-[24px] lg:mb-4'>FIAT WALLETS</h2>
                    <h2 className='text-[6.6px] md:text-[11.46px] md:leading-[15px] lg:text-[20px] lg:leading-[26px] mb-3'>The below Fiat Currency Wallets are reserved for your account only.</h2>
                  </div>
                  <div className='h-full lg:w-[254.8px]'>
                    <img src='./Images/wallet/fiatBanner.png' alt="" className='h-full'/>
                  </div>
                </div>
                <div className='mt-4 flex items-center justify-between lg:mt-11'>
                  <div className='w-[153.92px] h-[13.66px] md:w-[264.69px] md:h-[23.46px] relative lg:h-[41px] lg:w-[462px]'>
                      <input type="text" name="" placeholder='Search for Wallets, e.g; NGN or Nigeria' className='text-[5.33px] leading-[6.93px] md:text-[9.17px] md:leading-[11.97px] w-[100%] h-[100%] p-0 outline-none placeholder:text-[5.33px] rounded-[4px] border block px-1 md:placeholder:text-[9.17px] lg:placeholder:text-base lg:placeholder:leading-[20px] lg:rounded-[12px] lg:text-base lg:leading-[20px] lg:px-2'/>
                      <div className='absolute right-[4px] bottom-[3px] lg:right-[7px] lg:bottom-[10px] w-[6.66px] h-[6.66px] md:w-[11.46px] md:h-[11.46px] md:bottom-1 lg:w-[20px] lg:h-[20px]'>
                          <img src="./Images/wallet/search-status.png" alt="searchIcon" className='w-full h-full'/>  
                      </div>
                  </div>
                  <div className="h-[13.66px] border rounded-[4px] w-[82.32px] md:w-[141.79px] md:h-[23.46px] flex justify-between items-center p-1 lg:h-[41px] lg:w-[247px] lg:rounded-[12px]">
                    <button className='text-[5.33px] leading-[6.93px] h-full block rounded-[4px] p-[3px] md:text-[9.17px] lg:rounded-[12px] lg:text-base lg:leading-[20px]'>Refresh Wallet Balances</button>
                      <div className='w-[6.66px] h-[6.66px] md:w-[11.46px] md:h-[11.46px] lg:w-[20px] lg:h-[20px]'>
                          <img src="./Images/wallet/search-status.png" alt="searchIcon" className='w-full h-full object-cover'/>  
                      </div>
                  </div>
                </div>
                <div className='mt-5 flex items-center justify-between lg:mt-11'>
                  <button className='px-[17px] py-[3px] md:px-[29px] md:py-[6px] bg-primary text-white text-[5.34px] leading-[8.02px] rounded-[4px] md:rounded-[7px] md:text-[9.17px] md:leading-[13.75px] flex items-center lg:text-[16px] lg:leading-[24px]'>
                    <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                      <img src="./Images/wallet/card-add.png" alt="" className='object-cover w-full'/>
                    </div>
                    <h2>Add Money</h2>
                  </button>
                  <button className='px-[17px] py-[3px] md:px-[29px] md:py-[6px] bg-primary text-white text-[5.34px] leading-[8.02px] md:text-[9.17px] md:leading-[13.75px] rounded-[4px] md:rounded-[7px] flex items-center lg:text-[16px] lg:leading-[24px]' onClick={() => setShowModal(true)}>
                    <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                      <img src="./Images/wallet/wallet-add.png" alt="" className='object-cover w-full'/>
                    </div>
                    <h2>Add Wallets</h2>
                  </button>
                  <button className='px-[17px] py-[3px] md:px-[29px] md:py-[6px] bg-primary text-white text-[5.34px] leading-[8.02px] md:text-[9.17px] md:leading-[13.75px] rounded-[4px] md:rounded-[7px] flex items-center lg:text-[16px] lg:leading-[24px]'>
                    <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                      <img src="./Images/wallet/recovery-convert.png" alt="" className='object-cover w-full'/>
                    </div>
                    <h2>Convert Currency</h2>
                  </button>
                </div>
                <div className="mt-5 shadow-md px-2 py-2 md:py-[11px] flex flex-col gap-2 lg:py-5 lg:mt-11">
                  <div className='flex justify-between items-baseline font-bold text-[5.33px] leading-[6.93px] md:text-[9.17px] md:leading-[11.92px] border-b py-1 lg:text-[16px] lg:leading-[24px]'>
                    <h2 className='font-bold'>Country</h2>
                    <h2 className='font-bold'>Currency</h2>
                    <h2 className='font-bold'>Balance</h2>
                  </div>
                  <div className="flex flex-col gap-2">
                      {countryList.map((country) => (
                      <TableRow key={country.id} flag={country.flag} code={country.code} name={country.name} onClick={() => handleSelection(country.name)}/>
                      ))}
                  </div>
                  <div className="border-t -mx-2 px-2 text-right pt-1">
                    <h2 className="text-[5.33px] leading-[6.93px]">pagination</h2>
                  </div>
                </div>
                { showModal && 
                  <WalletModal>
                    <div className="flex flex-col justify-between h-full py-3">
                      <h2 className='text-[6.6px] md:text-[11.46px] md:leading-[15px] lg:text-[20px] lg:leading-[26px] mb-3 text-center text-primary font-semibold'>This Currency is Currently Not Available.</h2>
                      <div className='flex justify-center items-center'>
                        <div className='w-[82px] h-[75px] md:w-[119.63px] md:h-[103.12px]'>
                          <img src='./Images/wallet/businessAccount.png' alt="" className='w-full h-full'/>
                        </div>
                      </div>
                      <div className='flex gap-2 justify-center items-center'>
                        <button onClick={() => setShowModal(false)} className='text-[4.58px] text-white bg-primary px-2 py-1 rounded-full lg:text-[8px]'>Okay</button>
                      </div>
                    </div>
                  </WalletModal> }
              </> :
            <>
            {selection === "" ? 
            <>
              <div className="w-full h-[65.33px] md:h-[112.29px] lg:h-[196px] mt-8 rounded-[7px] bg-[#ff4343]/[0.5] flex px-[16px] lg:px-[50px] justify-between">
                <div className='py-[13px] lg:py-[40px]'>
                  <h2 className='text-[8px] md:text-[13.75px] md:leading-[20.63px] font-bold mb-3 lg:text-[24px] lg:mb-4'>FIAT WALLETS</h2>
                  <h2 className='text-[6.6px] md:text-[11.46px] md:leading-[15px] lg:text-[20px] lg:leading-[26px] mb-3'>The below Fiat Currency Wallets are reserved for your account only.</h2>
                </div>
                <div className='h-full'>
                  <img src='./Images/wallet/fiatBanner.png' alt="" className='h-full'/>
                </div>
              </div>
              <div className='mt-4 flex items-center justify-between lg:mt-11'>
                <div className='w-[153.92px] h-[13.66px] md:w-[264.69px] md:h-[23.46px] relative lg:h-[41px] lg:w-[462px]'>
                    <input type="text" name="" placeholder='Search for Wallets, e.g; NGN or Nigeria' className='text-[5.33px] leading-[6.93px] md:text-[9.17px] md:leading-[11.97px] w-[100%] h-[100%] p-0 outline-none placeholder:text-[5.33px] rounded-[4px] border block px-1 md:placeholder:text-[9.17px] lg:placeholder:text-base lg:placeholder:leading-[20px] lg:rounded-[12px] lg:text-base lg:leading-[20px] lg:px-2'/>
                    <div className='absolute right-[4px] bottom-[3px] lg:right-[7px] lg:bottom-[10px] w-[6.66px] h-[6.66px] md:w-[11.46px] md:h-[11.46px] md:bottom-1 lg:w-[20px] lg:h-[20px]'>
                        <img src="./Images/wallet/search-status.png" alt="searchIcon" className='w-full h-full'/>  
                    </div>
                </div>
                <div className="h-[13.66px] border rounded-[4px] w-[82.32px] md:w-[141.79px] md:h-[23.46px] flex justify-between items-center p-1 lg:h-[41px] lg:w-[247px] lg:rounded-[12px]">
                  <button className='text-[5.33px] leading-[6.93px] h-full block rounded-[4px] p-[3px] md:text-[9.17px] lg:rounded-[12px] lg:text-base lg:leading-[20px]'>Refresh Wallet Balances</button>
                    <div className='w-[6.66px] h-[6.66px] md:w-[11.46px] md:h-[11.46px] lg:w-[20px] lg:h-[20px]'>
                        <img src="./Images/wallet/search-status.png" alt="searchIcon" className='w-full h-full object-cover'/>  
                    </div>
                </div>
              </div>
              <div className='mt-5 flex items-center justify-between lg:mt-11'>
                <button className='px-[17px] py-[3px] md:px-[29px] md:py-[6px] bg-primary text-white text-[5.34px] leading-[8.02px] rounded-[4px] md:rounded-[7px] md:text-[9.17px] md:leading-[13.75px] flex items-center lg:text-[16px] lg:leading-[24px]'>
                  <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                    <img src="./Images/wallet/card-add.png" alt="" className='object-cover w-full'/>
                  </div>
                  <h2>Add Money</h2>
                </button>
                <button className='px-[17px] py-[3px] md:px-[29px] md:py-[6px] bg-primary text-white text-[5.34px] leading-[8.02px] md:text-[9.17px] md:leading-[13.75px] rounded-[4px] md:rounded-[7px] flex items-center lg:text-[16px] lg:leading-[24px]' onClick={() => setShowModal(true)}>
                  <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                    <img src="./Images/wallet/wallet-add.png" alt="" className='object-cover w-full'/>
                  </div>
                  <h2>Add Wallets</h2>
                </button>
                { showModal && <AddWallet onClick={() => setShowModal(!showModal)}/> }
                <button className='px-[17px] py-[3px] md:px-[29px] md:py-[6px] bg-primary text-white text-[5.34px] leading-[8.02px] md:text-[9.17px] md:leading-[13.75px] rounded-[4px] md:rounded-[7px] flex items-center lg:text-[16px] lg:leading-[24px]'>
                  <div className='mr-1 w-[11.38px] h-[11.38px] md:w-[19.48px] md:h-[19.48px] lg:w-[34px] lg:h-[34px]'>
                    <img src="./Images/wallet/recovery-convert.png" alt="" className='object-cover w-full'/>
                  </div>
                  <h2>Convert Currency</h2>
                </button>
              </div>
              <div className="mt-5 shadow-md px-2 py-2 md:py-[11px] flex flex-col gap-2 lg:py-5 lg:mt-11">
                <div className='flex justify-between items-baseline font-bold text-[5.33px] leading-[6.93px] md:text-[9.17px] md:leading-[11.92px] border-b py-1 lg:text-[16px] lg:leading-[24px]'>
                  <h2 className='font-bold'>Country</h2>
                  <h2 className='font-bold'>Currency</h2>
                  <h2 className='font-bold'>Balance</h2>
                </div>
                <div className="flex flex-col gap-2">
                    {countryList.map((country) => (
                    <TableRow key={country.id} flag={country.flag} code={country.code} name={country.name} onClick={() => handleSelection(country.name)}/>
                    ))}
                </div>
                <div className="border-t -mx-2 px-2 text-right pt-1">
                  <h2 className="text-[5.33px] leading-[6.93px]">pagination</h2>
                </div>
              </div>
            </> 
            : 
            <Navigate to='/new-wallet'/>}
            </>
          }
          <div className='flex gap-2 justify-center items-center mt-32'>
            <h2 className='text-[6.88px] lg:text-[12px]'>You need help?</h2>
            <Link to={`/ContactUs`} className='text-[4.58px] text-white bg-primary px-2 py-1 rounded-full lg:text-[8px]'>Contact Us</Link>
          </div>
        </div>
    </DashBoardLayout>
  );
}

export default FiatWallet;
