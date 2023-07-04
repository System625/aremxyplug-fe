import React from 'react'
import { SideBar } from './SideBar'
import { useContext, useEffect } from "react";
import { ContextProvider } from "../Context";

export const MainDashboard = () => {
  const {setHideNavbar} = useContext(ContextProvider)

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
       <SideBar/>
    </div>
  )
}
