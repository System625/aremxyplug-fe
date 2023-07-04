import React from 'react';
import './bg.css'
import passBanner from './passwordBanner.svg';
import aremxyPlug from './aremxyPlug.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextProvider } from "../../../Context";
import { useEffect } from 'react';
import { useState } from 'react';
import SecondModal from './SecondModal';

const PasswordReset = () => {
    const { hideNavbar, setHideNavbar } = useContext(ContextProvider);
    const [selectNumber, setSelectNumber] = useState();
    const [selectEmail, setSelectEmail] = useState();
    const [select, setSelect] = useState(false);
    const [selectionType, setSelectionType] = useState('');
    const [showModal, setShowModal] = useState(false);

    const handleSubmitNumber = ()=> {
        setSelectNumber('07034445523');
        setSelect(true);
        setSelectionType('number');
    }

    const handleSubmitEmail =()=> {
        setSelectEmail('onome@gmail.com');
        setSelect(true);
        setSelectionType('email');
    }
    const handleSubmit =(event)=> {
        event.preventDefault();
        setShowModal(true);
    }

    const setNav = () => {
        setHideNavbar(true);
      };
      console.log(hideNavbar);
    
      useEffect(() => {
        setNav();
        return () => {
          setHideNavbar(false);
        };
        // eslint-disable-next-line
      }, []);


  return (
    <>
        {/* tmobile screen view */}
        <div className='md:hidden min-h-screen relative w-[100%] xl:w-[85%] md:mx-[unset]'>
            {showModal && <SecondModal value={selectionType} />}
            <div className='pt-[27%] pb-[33%] bg-primary'>
                <h2 className='text-white font-bold text-[18.33px] leading-[27.5px] text-center'>Welcome to AremxyPlug!</h2>
                <p className='text-white text-[9.17px] leading-[13.75px] text-center'>The one-stop shop solution for all your digital needs.</p>
                <div className="w-[80%] mx-auto h-auto">
                    <img src={passBanner} alt="pass_banner"/>
                </div>
            </div>
            <div className="relative w-[96%] h-[432px] mx-auto rounded-[14.33px] px-[32px] -mt-[80px] bg-white mb-[25%] flex items-center" style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}}>
                <Link to={`/`} className="absolute top-[14.3px] left-[14.3px] w-[36.51px] h-[17.73px]">
                    <img src={aremxyPlug} alt="brand_logo" className='h-full w-full object-cover'/>
                </Link>
                <div className='w-full text-center flex flex-col gap-[28.65px]'>
                    <h2 className='text-[11.5px] font-bold leading-normal '>Reset Password</h2>
                    <h2 className='text-[9.16px] font-bold leading-normal'>Select how you want to reset your password ?</h2>
                    <div className='flex flex-col gap-[14.32px]'>
                        <button className={selectionType === 'email' ? `text-[9.16px] py-[9.17px] px-[5px] rounded border-[#d166ff] border` : `text-[9.16px] py-[9.17px] px-[5px] rounded`} value={selectEmail} style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}} onClick={handleSubmitEmail}>Send a verification link to my email- Habib***@gmail.com</button>
                        <button className={selectionType === 'number' ? `text-[9.16px] py-[9.17px] px-[5px] rounded border-[#d166ff] border` : `text-[9.16px] py-[9.17px] px-[5px] rounded`} value={selectNumber} style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}} onClick={handleSubmitNumber}>Send a verification code to email- Habib***@gmail.com</button>
                    </div>
                    <div className='flex justify-center my-[14.32px] lg:my-[35px]'>
                        <button className='py-[5.729px] px-[20.052px] border rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white text-[6.875px] leading-normal bg-primary lg:py-[10px] lg:px-[35px] lg:text-[12px] lg:rounded-[8px]' disabled={!select} onClick={handleSubmit}>Send</button>
                    </div>
                </div>
            </div>
        </div>
        {/* tab and large screen view */}
        <div className="hidden md:block relative">
            {showModal && <SecondModal value={selectionType}/>}
            <div className="bg px-[8%] flex gap-[20px] relative lg:min-h-screen">
                <div className='w-[50%] lg:pr-24 md:pr-10'>
                    <div className="absolute top-[26px] left-[26px]">
                        <h2 className='text-white font-bold text-[18.33px] leading-[27.5px] text-center lg:text-[32px] lg:leading-[48px]'>Welcome to AremxyPlug!</h2>
                        <p className='text-white text-[9.17px] leading-[13.75px] text-center lg:text-[16px] lg:leading-[24px]'>The one-stop shop solution for all your digital needs.</p>
                    </div>
                    <div className="w-[286px] mx-auto h-auto lg:w-[500px] lg:h-[500px]">
                        <img src={passBanner} alt="pass_banner"/>
                    </div> 
                </div>
                <div className='w-[50%] py-[11%] lg:py-[12%]'>
                    <div className="relative w-[347px] h-[432px] mx-auto lg:w-[606px] lg:h-[754px] rounded-[14.33px] px-[31px] lg:px-[60px] bg-white shadow-md lg:pb-[86.5px] lg:pt-[126.5px] flex flex-col justify-center">
                        <Link to={`/`} className="absolute top-[14.3px] left-[14.3px] w-[36.51px] h-[17.73px] lg:w-[63.73px] lg:h-[30.94px]">
                            <img src={aremxyPlug} alt="brand_logo" className='h-full w-full object-cover'/>
                        </Link>
                        <div className='w-full text-center flex flex-col gap-[28.65px] lg:gap-[50px]'>
                            <h2 className='text-[11.5px] font-bold leading-normal lg:text-[20px]'>Reset Password</h2>
                            <h2 className='text-[9.16px] font-bold leading-normal lg:text-[16px]'>Select how you want to reset your password ?</h2>
                            <div className='flex flex-col gap-[14.32px]'>
                                <button className={selectionType === 'email' ? `text-[9.16px] py-[9.17px] lg:text-[16px] px-[5px] rounded border-[#d166ff] border` : `text-[9.16px] py-[9.17px] lg:text-[16px] px-[5px] rounded`} value={selectEmail} style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}} onClick={handleSubmitEmail}>Send a verification link to my email- Habib***@gmail.com</button>
                                <button className={selectionType === 'number' ? `text-[9.16px] py-[9.17px] lg:text-[16px] px-[5px] rounded border-[#d166ff] border` : `text-[9.16px] py-[9.17px] lg:text-[16px] px-[5px] rounded`} value={selectNumber} style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}} onClick={handleSubmitNumber}>Send a verification code to my email- Habib***@gmail.com</button>
                            </div>
                            <div className='flex justify-center my-[14.32px] lg:my-[35px]'>
                                <button className='py-[5.729px] px-[20.052px] border rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white text-[6.875px] lg:text-[12px]leading-normal bg-primary lg:py-[10px] lg:px-[35px] lg:text-[12px] lg:rounded-[8px]' disabled={!select} onClick={handleSubmit}>Send</button>
                            </div>
                        </div>
                    </div> 
                </div>
            </div>
        </div>
    </>

  );
}

export default PasswordReset;
