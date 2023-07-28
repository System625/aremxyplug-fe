import React from 'react';
import { useState } from 'react';
import { DashBoardLayout } from '../Dashboard/Layout/DashBoardLayout';
import FaqCard from './FaqCard';
import './faq.css'
import { Link } from 'react-router-dom';

const Wallet = () => {
  const [clicked, setClicked] = useState(true);

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
        <div className="px-[6.67%] pb-[5%] md:px-[8%]">
          <div className="w-full h-[65.33px] md:h-[112.29px] lg:h-[196px] mt-8 rounded-[7px] bg-[#61CCFF] flex px-[16px] lg:px-[50px] justify-between">
            <div className='py-[13px] lg:py-[40px]'>
              <h2 className='text-[8px] md:text-[13.75px] font-bold mb-3 lg:text-[24px] lg:mb-4'>WALLETS OVERVIEW.</h2>
              <h2 className='text-[6.6px] md:text-[11.46px] lg:text-[20px] lg:leading-[26px] mb-3'>Please select wallet type from the available options below.</h2>
            </div>
            <div className='h-full lg:w-[254.8px]'>
              <img src='./Images/wallet/walletBanner.png' alt="" className='h-full'/>
            </div>
          </div>
          <div className="w-full h-[102.28px] lg:h-[186px] mt-4 flex flex-col justify-between md:mt-6 md:h-[106.5px]">
            <h2 className='text-[8px] font-bold mb-3 lg:text-[15px]'>Select Wallets:</h2>
            <div className='w-full h-[61.64px] flex justify-between md:h-[65.85px] lg:h-[115px]'>
              <div className='flex justify-center items-center px-[15px] py-[20px] rounded-[5px] lg:px-[30px] lg:py-[40px] lg:rounded-[9px] lg:w-[172px]' style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
                <Link to={`/fiat-wallet`} className='text-center'>
                  <div className='w-[13.79px] h-[13.79px] mx-auto lg:h-[24px] lg:w-[24px]'>
                    <img src="./Images/wallet/walletIcon.png" alt="icon" className='w-full'/>
                  </div>
                  <h2 className='text-[9.2px] mt-1 lg:text-[16px] lg:mt-2'>Fiat Wallets</h2>
                </Link>
              </div>
              <div className='flex justify-center items-center px-[15px] py-[20px] rounded-[5px] lg:px-[30px] lg:py-[40px] lg:rounded-[9px] lg:w-[172px]' style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
                <div className='text-center'>
                  <div className='w-[13.79px] h-[13.79px] mx-auto lg:h-[24px] lg:w-[24px]'>
                    <img src="./Images/wallet/cryptoIcon.png" alt="icon" className='w-full'/>
                  </div>
                  <h2 className='text-[9.2px] mt-1 lg:text-[16px] lg:mt-2'>Crypto Wallets</h2>
                </div>
              </div>
              <div className='flex justify-center items-center px-[15px] py-[20px] rounded-[5px] lg:px-[30px] lg:py-[40px] lg:rounded-[9px] lg:w-[172px]' style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
                <div className='text-center'>
                  <div className='w-[13.79px] h-[13.79px] mx-auto lg:h-[24px] lg:w-[24px]'>
                    <img src="./Images/wallet/balanceIcon.png" alt="icon" className='w-full'/>
                  </div>
                  <h2 className='text-[9.2px] mt-1 lg:text-[16px] lg:mt-2'>Points Balance</h2>
                </div>
              </div>
            </div>
          </div>
          <div className='mt-4'>
            <h2 className='text-[8.62px] font-bold mb-4 lg:text-[15px]'>Quick Wallet FAQs</h2>
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
          <div className='flex gap-2 justify-center items-center mt-32'>
            <h2 className='text-[6.88px] lg:text-[12px]'>You need help?</h2>
            <Link to={`/ContactUs`} className='text-[4.58px] text-white bg-primary px-2 py-1 rounded-full lg:text-[8px]'>Contact Us</Link>
          </div>
        </div>
    </DashBoardLayout>
  );
}

export default Wallet;
