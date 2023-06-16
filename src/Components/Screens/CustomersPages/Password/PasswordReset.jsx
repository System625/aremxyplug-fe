import React from 'react';
import './bg.css'
import passBanner from './passwordBanner.svg';
import googleLogo from './Google.svg'
import aremxyPlug from './aremxyPlug.svg'
import { Link } from 'react-router-dom';

const PasswordReset = () => {
  return (
    <>
        <div className='md:hidden min-h-screen'>
            <div className='pt-[27%] pb-[33%] bg-primary'>
                <h2 className='text-white font-bold text-[18.33px] leading-[27.5px] text-center'>Welcome to AremxyPlug!</h2>
                <p className='text-white text-[9.17px] leading-[13.75px] text-center'>The one-stop shop solution for all your digital needs.</p>
                <div className="w-[80%] mx-auto h-auto">
                    <img src={passBanner} alt="pass_banner"/>
                </div>
            </div>
            <div className="relative w-[96%] mx-auto rounded-[14.33px] py-[60px] -mt-[80px] bg-white mb-[25%] shadow-md">
                <div className="absolute top-[14.3px] left-[14.3px] w-[36.51px] h-[17.73px]">
                    <img src={aremxyPlug} alt="brand_logo" className='h-full w-full object-cover'/>
                </div>
                <form action="" className='w-[55%] mx-auto'>
                    <div className="mb-[10px]">
                        <h2 className='text-[9.17px] leading-[11.46px] mb-[5px] font-bold'>Username or Email</h2>
                        <input type="text" name="user-name" className='shadow border w-full rounded py-[6px] px-[10px] text-[7px]'/>
                    </div>
                    <div className="mb-[27.65px]">
                        <h2 className='text-[9.17px] leading-[11.46px] mb-[5px] font-bold'>Password</h2>
                        <input type="text" name="user-name" className='shadow border w-full rounded py-[6px] px-[10px] text-[7px]'/>
                    </div>
                    <div>
                        <h2 className='text-primary text-[8px] leading-[12px] mb-[8.6px] font-bold'>Forget password ?</h2>
                        <div className='flex gap-[8px] items-center mb-[14.3px]'>
                            <input type="checkbox" name="remember me" className='inline-block'/>
                            <h2 className='text-primary text-[8px] leading-[12px]'>Remember me next time!</h2>
                        </div>
                        <div className='flex justify-center mb-[14.3px]'>
                            <div className='bg-primary text-white py-[6px] px-[20px] rounded-[5px] text-[6.88px] leading-[10px]'>Sign in</div>
                        </div>
                        <h2 className='text-center text-[8px] leading-[10px] mb-[14.3px]'>-OR-</h2>
                        <div className='shadow p-[5.73px] rounded flex w-fit mx-auto gap-[11.46px] mb-[54.53px]'>
                            <div className="w-[11.46px] h-[11.46px]">
                                <img src={googleLogo} alt="google_logo" className='w-full h-full object-cover'/>
                            </div>
                            <h2 className='text-[9.17px] leading-[11.46px]'>Signin with Google</h2>
                        </div>
                        <p className='text-[9.17px] leading-[11.46px] text-center'>Don’t have an account yet ? <Link to={`/signUp`} className='text-primary font-bold'>Signup</Link></p>
                    </div>
                    
                </form>
            </div>
        </div>
        <div className="hidden md:block lg:min-h-screen">
            <div className="bg px-[8%] flex gap-[20px] relative lg:min-h-screen">
                <div className='flex-1'>
                    <div className="absolute top-[26px] left-[26px]">
                        <h2 className='text-white font-bold text-[18.33px] leading-[27.5px] text-center lg:text-[32px] lg:leading-[48px]'>Welcome to AremxyPlug!</h2>
                        <p className='text-white text-[9.17px] leading-[13.75px] text-center lg:text-[16px] lg:leading-[24px]'>The one-stop shop solution for all your digital needs.</p>
                    </div>
                    <div className="w-[90%] mx-auto h-auto lg:w-[500px] lg:h-[500px]">
                        <img src={passBanner} alt="pass_banner"/>
                    </div> 
                </div>
                <div className='flex-1 py-[10%] lg:py-[12%]'>
                    <div className="relative w-[96%] mx-auto rounded-[14.33px] py-[60px] bg-white shadow-md lg:pb-[86.5px] lg:pt-[126.5px]">
                        <div className="absolute top-[14.3px] left-[14.3px] w-[36.51px] h-[17.73px] lg:w-[63.73px] lg:h-[30.94px]">
                            <img src={aremxyPlug} alt="brand_logo" className='h-full w-full object-cover'/>
                        </div>
                        <form action="" className='w-[55%] mx-auto'>
                            <div className="mb-[10px] lg:mb-[15px]">
                                <h2 className='text-[9.17px] leading-[11.46px] mb-[5px] font-bold lg:text-[16px] lg:leading-[20px]'>Username or Email</h2>
                                <input type="text" name="user-name" className='shadow border w-full rounded py-[6px] px-[10px] text-[7px] lg:text-[12px] lg:leading-[15px] lg:py-[12px]'/>
                            </div>
                            <div className="mb-[27.65px] lg:mb-[48px]">
                                <h2 className='text-[9.17px] leading-[11.46px] mb-[5px] font-bold lg:text-[16px] lg:leading-[20px]'>Password</h2>
                                <input type="text" name="user-name" className='shadow border w-full rounded py-[6px] px-[10px] text-[7px] lg:text-[12px] lg:leading-[15px] lg:py-[12px]'/>
                            </div>
                            <div>
                                <h2 className='text-primary text-[8px] leading-[12px] mb-[8.6px] font-bold lg:text-[14px] lg:leading-[21px] lg:mb-[15px]'>Forget password ?</h2>
                                <div className='flex gap-[8px] items-center mb-[14.3px] lg:mb-[35px]'>
                                    <input type="checkbox" name="remember me" className='inline-block'/>
                                    <h2 className='text-primary text-[8px] leading-[12px] lg:text-[14px] lg:leading-[17.5px]'>Remember me next time!</h2>
                                </div>
                                <div className='flex justify-center mb-[14.3px] lg:mb-[25px]'>
                                    <div className='bg-primary text-white py-[6px] px-[20px] rounded-[5px] text-[6.88px] leading-[10px] lg:text-[12px] lg:leading-[18px]'>Sign in</div>
                                </div>
                                <h2 className='text-center text-[8px] leading-[10px] mb-[14.3px] lg:mb-[25px]'>-OR-</h2>
                                <div className='shadow p-[5.73px] rounded flex w-fit mx-auto gap-[11.46px] mb-[54.53px] lg:mb-[95px]'>
                                    <div className="w-[11.46px] h-[11.46px] lg:w-[20px] lg:h-[20px]">
                                        <img src={googleLogo} alt="google_logo" className='w-full h-full object-cover'/>
                                    </div>
                                    <h2 className='text-[9.17px] leading-[11.46px] lg:text-[16px] lg:leading-[20px]'>Signin with Google</h2>
                                </div>
                                <p className='text-[9.17px] leading-[11.46px] text-center lg:text-[14px] lg:leading-[17.5px]'>Don’t have an account yet ? <Link to={`/signUp`} className='text-primary font-bold'>Signup</Link></p>
                            </div>
                            
                        </form>
                    </div> 
                </div>
            </div>
        </div>
    </>

  );
}

export default PasswordReset;
