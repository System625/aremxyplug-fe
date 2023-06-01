import React from 'react'
import { primaryColor } from '../Screens/cardIssuing/cardIssuing'

function Bluebutton({...props}) {
  return (
    
    <div
    className=" inline-flex justify-center items-center h-[46px] text-[#fff] text-[7.82px] md:text-[7.34px] lg:text-[12.66px]  text-center rounded-md  font-[400]  cursor-pointer px-10 "
      style={{
        backgroundColor: primaryColor,
      }}
    >
    <p> {props.text}</p>


   


    </div>

  )
}

export default Bluebutton