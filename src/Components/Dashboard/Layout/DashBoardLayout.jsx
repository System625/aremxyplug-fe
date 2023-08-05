import React from 'react'
import { SideBar } from '../Layout/SideBar'
import { useEffect, useContext } from 'react'
import { ContextProvider } from "../../Context";
import { TopBar } from './TopBar';

export const DashBoardLayout = ({children}) => {
  const {setHideNavbar,toggleSideBar} = useContext(ContextProvider)
  

  const setNav = () => {
    setHideNavbar(true)
  }

  useEffect(() => {
    setNav();
    return () => {
      setHideNavbar(false);
    };
    // eslint-disable-next-line
  }, []);

  return (
    <div>
       {toggleSideBar && (<div className='absolute top-0 left-0 z-[1000]'><SideBar/></div>)}
       <TopBar/>
       <div className={`${toggleSideBar ? "lg:w-[73.5%] lg:float-right md:w-[68.5%] md:float-right" : "" } mx-[5%] mt-[8%] lg:mt-[3%] pb-[15%] h-screen lg:h-full md:pb-[5%]`}>
        {children}
       </div>
    </div>
  )
} 