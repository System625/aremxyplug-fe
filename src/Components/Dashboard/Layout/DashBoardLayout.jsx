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
       {toggleSideBar && (<div className='absolute top-0 left-0'><SideBar/></div>)}
       <TopBar/>
       {children}
    </div>
  )
}