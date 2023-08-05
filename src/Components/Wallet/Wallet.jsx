import React from 'react';
import { useState } from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import FaqCard from './FaqCard';
import './faq.css'
import { Link } from 'react-router-dom';
import WalletModal from './WalletModal';

const Wallet = () => {
  const [clicked, setClicked] = useState(true);
  const [showCryptoModal, setShowCryptoModal] = useState(false);
  
  const handleToggle =(index)=> {
    if (clicked === index) {
      return setClicked(true)
    }
    setClicked(index)
  }

  const faqList = [
    {
      id: 1,
      question: "How Automated is AremxyPlug's wallet to reflect payments instantly?",
      answer: "AremxyPlug's wallet system is fully automated and designed to reflect payments instantly. Once a payment is made, it is immediately reflected in your wallet balance."
    },
    {
      id: 2,
      question: "Can I send money from my wallet to another AremxyPlug user's wallet?",
      answer: "Yes, you can send money from your wallet to another AremxyPlug user's wallet instantly and free of charge."
    },
    {
      id: 3,
      question: "How does the wallet system work?",
      answer: "The wallet system allows you to store funds securely and make payments for goods and services. You can fund your wallet using various payment methods, such as bank transfer, card payment, or cash deposit."
    },
  ]

  return (
    <DashBoardLayout>
        <div className="flex flex-col justify-between h-full">
          <div>
            <div className="w-full h-[65.33px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] bg-[#61CCFF] flex px-[16px] lg:px-[50px] justify-between lg:rounded-[20px]">
              <div className='py-[13px] lg:py-[40px]'>
                <h2 className='text-[8px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4'>WALLETS OVERVIEW.</h2>
                <h2 className='text-[6.6px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3'>Please select wallet type from the available options below.</h2>
              </div>
              <div className='h-full lg:w-[254.8px]'>
                <img src='./Images/wallet/walletBanner.png' alt="" className='h-full'/>
              </div>
            </div>
            <div className="w-full h-[102.28px] lg:h-[186px] mt-4 flex flex-col justify-between md:mt-6 md:h-[106.5px] lg:mt-12">
              <div className='lg:mb-8 flex items-center gap-1 mb-5'>
                  <h2 className='text-[8.62px] font-bold lg:text-[15px]'>Select Wallets</h2>
                  <div className='lg:w-6 lg:h-6 w-4 h-4'>
                      <img src='./Images/wallet/arrow-square-right.svg' alt="" className='h-full'/>
                  </div>
              </div>
              <div className='w-full h-[61.64px] flex justify-between md:h-[65.85px] lg:h-[115px]'>
                <div className='md:w-[130px] w-[80.24px] flex justify-center items-center rounded-[5px] lg:rounded-[9px] lg:w-[172px]' style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
                  <Link to={`/fiat-wallet`} className='text-center'>
                    <div className='w-[13.79px] h-[13.79px] mx-auto lg:h-[24px] lg:w-[24px]'>
                      <img src="./Images/wallet/walletIcon.png" alt="icon" className='w-full'/>
                    </div>
                    <h2 className='text-[10px] leading-[15px] mt-1 lg:text-[16px] lg:mt-2 md:text-[12px] md:leading-[18px]'>Fiat Wallets</h2>
                   </Link>
                </div>
                <button className='md:w-[130px] w-[80.24px] flex justify-center items-center rounded-[5px] lg:rounded-[9px] lg:w-[172px]' 
                  style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}
                  onClick={() => setShowCryptoModal(true)}>
                  <div className='text-center'>
                    <div className='w-[13.79px] h-[13.79px] mx-auto lg:h-[24px] lg:w-[24px]'>
                      <img src="./Images/wallet/cryptoIcon.png" alt="icon" className='w-full'/>
                    </div>
                    <h2 className='text-[10px] leading-[15px] mt-1 lg:text-[16px] lg:mt-2 md:text-[12px] md:leading-[18px]'>Crypto Wallets</h2>
                  </div>
                </button>
                <div className='md:w-[130px] w-[80.24px] flex justify-center items-center rounded-[5px] lg:rounded-[9px] lg:w-[172px]' style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
                  <Link className='text-center' to={`/point-balance`}>
                    <div className='w-[13.79px] h-[13.79px] mx-auto lg:h-[24px] lg:w-[24px]'>
                      <img src="./Images/wallet/balanceIcon.png" alt="icon" className='w-full'/>
                    </div>
                    <h2 className='text-[10px] mt-1 lg:text-[16px] lg:mt-2 md:text-[12px] md:leading-[18px]'>Points Balance</h2>
                  </Link>
                </div>
              </div>
            </div>
            <div className='mt-4 lg:mt-12'>
              <div className='lg:mb-8 flex items-center gap-1 mb-5'>
                  <h2 className='text-[8.62px] font-bold lg:text-[15px]'>Quick Wallets FAQs</h2>
                  <div className='lg:w-6 lg:h-6 w-4 h-4'>
                      <img src='./Images/wallet/arrow-square-right.svg' alt="" className='h-full'/>
                  </div>
              </div>
              <div>
                  {faqList.map((faqItem) => (
                  <FaqCard 
                    key={faqItem.id} 
                    faqItem={faqItem}
                    onToggle={()=> handleToggle(faqItem.id)}
                    active={clicked === faqItem.id}
                  />
                ))}
              </div>
            </div>
          </div>
          <div className='flex gap-2 justify-center items-center md:mt-40'>
            <h2 className='text-[8px] leading-[12px] lg:text-[12px]'>You need help?</h2>
            <Link to={`/ContactUs`} className='text-[8px] leading-[12px] text-white bg-primary px-2 py-1 rounded-full lg:text-[8px]'>Contact Us</Link>
          </div>
        </div>
        {showCryptoModal &&
        <>
          <WalletModal>
            <div className='w-full h-full'>
              <h2 className='text-center text-[10px] leading-[15px] mb-[10px] font-semibold md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px] text-primary'>This Feature is Currently Not Available.</h2>
              <div className='flex justify-center items-center mt-[16%] lg:mt-[20%]'>
                <div className='w-[110px] h-[110px] lg:w-[220px] lg:h-[220px]'>
                  <img src="./Images/wallet/comingSoon.png" alt=""/>
                </div>
              </div>
              <div className='flex gap-[45px] absolute bottom-[22px] justify-center items-center md:gap-[20px] lg:w-[93%] lg:gap-[30px]' >
                <button className='text-[10px] leading-[15px] bg-primary px-[28.6px] py-[10px] text-white rounded-[7px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]' onClick={()=>setShowCryptoModal(false)}>Okay</button>
                <h2 className='text-[10px] leading-[15px] px-[28.6px] py-[10px] rounded-[7px] md:text-[12px] md:leading-[18px] lg:text-base lg:leading-[24px]'>Coming soon...</h2>
              </div>
            </div>
           
          </WalletModal>
        </>
        }
    </DashBoardLayout>
  );
}

export default Wallet;
