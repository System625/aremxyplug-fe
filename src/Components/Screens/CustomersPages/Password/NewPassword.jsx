import React from 'react';
import './bg.css'
import passBanner from './passwordBanner.svg';
import aremxyPlug from './aremxyPlug.svg'
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { ContextProvider } from "../../../Context";
import { useEffect } from 'react';
import { useState } from 'react';
import hideIcon from './eyeIcon2.png'
import showIcon from './eyeIcon1.png'
import RedirectModal from './RedirectModal';

const NewPassword = () => {
    const [passHide, setPassHide] = useState("password");
    const [password, setPassword] = useState('');
    const [passError, setPassError] = useState('')
    const [cpassword, setCpassword] = useState('');
    const [cpassHide, setCpassHide] = useState("password");
    const [submit, setSubmit] = useState(false);
    const [border, setBorder] = useState('');
    const [error, setError] = useState('')
    const { hideNavbar, setHideNavbar } = useContext(ContextProvider);

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

      const handleSubmit =(event)=> {
         event.preventDefault();
         const regEx = new RegExp(/^(?=.*[a-zA-Z])(?=.*\d)(?=.*[^a-zA-Z\d\s]).{8,}$/);
         if (!regEx.test(password)) {
            setBorder('border-red-500');
            setSubmit(false);
            setPassError('Password must have At least one alphabetical character, At least one digit, Contains at least one special character (e.g., !@#$%^&*) and Minimum length of 8 characters')
         } else if (password !== cpassword) {
            setBorder('border-red-500');
            setSubmit(false);
            setError('Passwords do not match!!!')
         } else {
            setBorder('');
            setSubmit(true);
         }
      }
  return (
        <div>
            <>
                {/* mobile screen view  start here*/}
                <div className='md:hidden min-h-screen relative'>
                    <div className='pt-[27%] pb-[33%] bg-primary'>
                        <h2 className='text-white font-bold text-[18.33px] leading-[27.5px] text-center'>Welcome to AremxyPlug!</h2>
                        <p className='text-white text-[9.17px] leading-[13.75px] text-center'>The one-stop shop solution for all your digital needs.</p>
                        <div className="w-[80%] mx-auto h-auto">
                            <img src={passBanner} alt="pass_banner"/>
                        </div>
                    </div>
                    <div className="relative w-[96%] h-[432px] mx-auto rounded-[14.33px] px-[32px] -mt-[80px] bg-white mb-[25%] flex items-center justify-center" style={{boxShadow: `0px 0px 11.5px 0px rgba(0, 0, 0, 0.25)`}}>
                        <Link to={`/`} className="absolute top-[14.3px] left-[14.3px] w-[36.51px] h-[17.73px]">
                            <img src={aremxyPlug} alt="brand_logo" className='h-full w-full object-cover'/>
                        </Link>
                        <div className=''>
                            <h2 className='text-center text-[11.45px] leading-normal font-[600] mb-[57.29px]'>Create a new password</h2>
                            <div className='my-[10px]'>
                                <p className="text-[9.17px] md:text-[11.58px] lg:text-[16px] font-[600] lg:mb-[10px] tracking-wider leading-normal">Password</p>
                                <div className='relative w-[100%] h-[22.75px] lg:h-[39px]  rounded  flex items-center'>
                                    {passHide === 'password' ? (
                                        <img src={hideIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setPassHide("text")}/>
                                    ): 
                                    (
                                        <img src={showIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setPassHide("password")}/>
                                    )}
                                    <input className={`${border} border w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] pl-[7.5px] md:pl-[10px] pr-[40px] md:pr-[50px] rounded  text-[#403f3f] outline-none`} type={passHide} value={password} onChange={(event) => setPassword(event.target.value)}/>
                                </div>
                                <h2>{passError}</h2>
                            </div>
                            <div className=''>
                                <p className="text-[9.17px] md:text-[11.58px] lg:text-[16px] font-[600] lg:mb-[10px] tracking-wider leading-normal">Confirm Password</p>
                                <div className='relative w-[100%] h-[22.75px] lg:h-[39px]  rounded  flex items-center'>
                                    {cpassHide === 'password' ? (
                                        <img src={hideIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setCpassHide("text")}/>
                                    ): 
                                    (
                                        <img src={showIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setCpassHide("password")}/>
                                    )}
                                    <input className={`${border} border w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] pl-[7.5px] md:pl-[10px] pr-[40px] md:pr-[50px] rounded  text-[#403f3f] outline-none`} type={passHide} value={cpassword} onChange={(event) => setCpassword(event.target.value)}/>
                                </div>
                                <h2 className='text-red-500 text-[5.7px] text-center leading-normal mt-[3px]'>{error}</h2>
                            </div>
                            <div className='flex justify-center my-[14.79px] lg:my-[35px]'>
                                <button className='py-[5.729px] px-[20.052px] border rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white text-[6.875px] leading-normal bg-primary lg:py-[10px] lg:px-[35px] lg:text-[12px] lg:rounded-[8px]' disabled={!password || !cpassword} onClick={handleSubmit}>Continue</button>
                            </div>
                        </div>
                    </div>
                    { submit && <RedirectModal/> }
                </div>
                {/* mobile screen view ends here */}


                {/* tab and large screen view start here*/}
                <div className="hidden md:block lg:min-h-screen relative">
                    <div className="bg px-[8%] flex gap-[20px] relative lg:min-h-screen">
                        <div className='flex-1'>
                            <div className="absolute top-[26px] left-[26px]">
                                <h2 className='text-white font-bold text-[18.33px] leading-[27.5px] text-center lg:text-[32px] lg:leading-[48px]'>Welcome to AremxyPlug!</h2>
                                <p className='text-white text-[9.17px] leading-[13.75px] text-center lg:text-[16px] lg:leading-[24px]'>The one-stop shop solution for all your digital needs.</p>
                            </div>
                            <div className="w-[286px] mx-auto h-auto lg:w-[500px] lg:h-[500px]">
                                <img src={passBanner} alt="pass_banner"/>
                            </div> 
                        </div>
                        <div className='flex-1 py-[11%] lg:py-[12%]'>
                            <div className="relative w-[347px] h-[432px] mx-auto lg:w-[606px] lg:h-[754px] rounded-[14.33px] px-[31px] lg:px-[60px] bg-white shadow-md lg:pb-[86.5px] lg:pt-[126.5px] flex flex-col justify-center">
                                <Link to={`/`} className="absolute top-[14.3px] left-[14.3px] w-[36.51px] h-[17.73px] lg:w-[63.73px] lg:h-[30.94px]">
                                    <img src={aremxyPlug} alt="brand_logo" className='h-full w-full object-cover'/>
                                </Link>
                                <div className=''>
                                    <h2 className='text-center text-[11.45px] leading-normal font-[600] mb-[57.29px] lg:text-[20px]'>Create a new password</h2>
                                    <div className='my-[10px]'>
                                        <p className="text-[9.17px] md:text-[11.58px] lg:text-[16px] font-[600] lg:mb-[10px] tracking-wider leading-normal">Password</p>
                                        <div className='relative w-[100%] h-[22.75px] lg:h-[39px]  rounded  flex items-center'>
                                            {passHide === 'password' ? (
                                                <img src={hideIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setPassHide("text")}/>
                                            ): 
                                            (
                                                <img src={showIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setPassHide("password")}/>
                                            )}
                                            <input className={`${border} border w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] pl-[7.5px] md:pl-[10px] pr-[40px] md:pr-[50px] rounded  text-[#403f3f] outline-none`} type={passHide} value={password} onChange={(event) => setPassword(event.target.value)}/>
                                        </div>
                                        <h2 className='text-red-500 text-[5.7px] text-center lg:text-[10px] leading-normal'>{passError}</h2>
                                    </div>
                                    <div className=''>
                                        <p className="text-[9.17px] md:text-[11.58px] lg:text-[16px] font-[600] lg:mb-[10px] tracking-wider leading-normal">Confirm Password</p>
                                        <div className='relative w-[100%] h-[22.75px] lg:h-[39px]  rounded  flex items-center'>
                                            {cpassHide === 'password' ? (
                                                <img src={hideIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setCpassHide("text")}/>
                                            ): 
                                            (
                                                <img src={showIcon} alt="icon" className="absolute right-2 w-[13.75px] lg:w-[24px] cursor-pointer" onClick={() => setCpassHide("password")}/>
                                            )}
                                            <input className={`${border} border w-full h-full text-[8.93px] md:text-[11.58px] lg:text-[20px] pl-[7.5px] lg:p-[12px] md:pl-[10px] pr-[40px] md:pr-[50px] rounded  text-[#403f3f] outline-none`} type={cpassHide} value={cpassword} onChange={(event) => setCpassword(event.target.value)}/>
                                        </div>
                                        <h2 className='text-red-500 text-[5.7px] text-center lg:text-[10px] leading-normal'>{error}</h2>
                                    </div>
                                    <div className='flex justify-center my-[14.32px] lg:my-[35px]'>
                                        <button className='py-[5.729px] px-[20.052px] border rounded-[4.583px] disabled:bg-[#ccc] font-bold text-white text-[6.875px] leading-normal bg-primary lg:py-[10px] lg:px-[35px] lg:text-[12px] lg:rounded-[8px]' disabled={!password || !cpassword} onClick={handleSubmit}>Continue</button>
                                    </div>
                                </div>
                            </div> 
                        </div>
                        { submit && <RedirectModal/> }
                    </div>
                </div>
                {/* tab and large screen view ends here */}
            </>
        </div>
  );
}

export default NewPassword;
