import React from "react";
import "./VTU_DEV.css";
import { primaryColor } from "../cardIssuing/cardIssuing";
import Bluebutton from "../../bluebutton/Bluebutton";
import { VTU_PAY } from "../../svgs/svg1";
import { RxDotFilled } from 'react-icons/rx';

function VTU_DEV() {

const DifferenceHead = [
  {text:"Product"},
  {text:"Starter"},
  {text:"Merchant"},
  {text:"Venture"},
  {text:`Telecom Pro`},
  {text:"Unlimited"},
]

const keyFeatures =[
  {
    title:"Multi-Operator Integration:",
    content:" It ensures flexibility and wide coverage for customers."
  },
  {
    title:"Payment Gateway Integration: ",
    content:"It allows users to make payments using various methods such as mobile wallets, or bank transfers."
  },
  {
    title:"Payment Gateway Integration: ",
    content:"It allows users to make payments using various methods such as mobile wallets, or bank transfers."
  },
  {
    title:"Payment Gateway Integration: ",
    content:"It allows users to make payments using various methods such as mobile wallets, or bank transfers."
  },
  {
    title:"Payment Gateway Integration: ",
    content:"It allows users to make payments using various methods such as mobile wallets, or bank transfers."
  },
  {
    title:"Payment Gateway Integration: ",
    content:"It allows users to make payments using various methods such as mobile wallets, or bank transfers."
  },
  {
    title:"Payment Gateway Integration: ",
    content:"It allows users to make payments using various methods such as mobile wallets, or bank transfers."
  },
  {
    title:"Payment Gateway Integration: ",
    content:"It allows users to make payments using various methods such as mobile wallets, or bank transfers."
  },
  {
    title:"Payment Gateway Integration: ",
    content:"It allows users to make payments using various methods such as mobile wallets, or bank transfers."
  },
  {
    title:"Payment Gateway Integration: ",
    content:"It allows users to make payments using various methods such as mobile wallets, or bank transfers."
  },
]




  return (
    <>
      {/* HEADER */}
      <div className="bgClass h-[1200px] md:h-[1000px] mt-[-100px] md:mt-[-170px] lg:mt-[-200px]   px-6 md:px-8 lg:px-16  xl:px-32">
        <div
          className=" grid lg:grid-cols-2 lg:gap-x-4  md:grid-cols-2 md:gap-x-4    
       grid-cols-1 gap-y-4 
      
        "
        >
          <div className="rounded sm:rounded-md p-4 sm:p-6 lg:rounded-lg  lg:p-8 md:p-6    mt-[150px] md:mt-[220px] lg:mt-[250px]">
            <p
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold lg:tracking-wider  "
              style={{
                color: primaryColor,
              }}
            >
              VTU Development
            </p>
            <p className="text-[#000] text-justify text-md mt-4 sm:mt-6 md:mt-10 sm:text:lg lg:text-lg lg:mt-12 ">
              AremxyPlug is a company that has a team of technical experts that
              can easily and quickly design and develop a VTU platform to start
              your telecom business with services like airtime top-up, data
              bundles, education pins, TV subscription, and bills payment
              platform.
            </p>

            <div className="my-8">
              <Bluebutton text="contact sales" />
            </div>
          </div>

          <div className="flex justify-center  md:mt-[220px] lg:mt-[250px]">
            <img
              src="./Images/vtu_dev/VTU_bg.png"
              alt="background_image "
              className="sm:w-[80%] md:w-[100%] "
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3">
          <div className="mt-[100px] md:mt-[unset] rounded sm:rounded-md p-4 sm:p-6 lg:rounded-lg  lg:p-8 md:p-6 md:col-span-2">
            <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold lg:tracking-wider  text-[#000]">
              Own a VTU platform to start your telecom business
            </p>
            <p className="text-[#000] text-justify text-md mt-4 sm:mt-6 md:mt-10 sm:text:lg lg:text-lg lg:mt-12 ">
              We put the needs of our users in a digital world first while
              prioritizing users experience, security, and scalability with a
              well-designed VTU system that can offer a secure and practical
              bills payments.
            </p>
          </div>
        </div>
      </div>
      {/* HEADER ENDS */}

      {/* 1 */}
      <div
        className=" grid  lg:gap-x-4  md:grid-cols-3 md:gap-x-4    
    grid-cols-1 gap-y-4 
    lg:px-32  px-6 sm:px-16 
     "
      >
        <div className=" py-4 sm:py-6  lg:py-8 md:py-6 md:col-span-2 ">
          <p
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold lg:tracking-wider  "
            style={{
              color: primaryColor,
            }}
          >
            Start Your VTU Business
          </p>
          <p className="text-[#000] text-justify text-md mt-4 sm:mt-6 md:mt-10 sm:text:lg lg:text-lg lg:mt-12 ">
            Digital recharge is now a well-liked method of purchasing airtime,
            data bundles, and bills payments. We make it easy for you to start
            your telecom business without any hassle. You can start right away
            with any of our plans, very secured, convenient, flexible, and
            cost-effective. 
          </p>
          <div className="my-6">
            <Bluebutton text="Start Now" />
          </div>
        </div>

        <div className="rounded-lg flex flex-col items-center  md:block ">
          <img
            src="./Images/vtu_dev/startVTU.png"
            alt="background_image "
            className="w-[60%]  md:w-[100%]"
          />
        </div>
      </div>
      {/* 2 */}

      <div
        className=" grid  lg:gap-x-4  md:grid-cols-3 md:gap-x-4    
    grid-cols-1 gap-y-4 
    lg:px-32  px-6 sm:px-16 
     "
      >
        <div className=" py-4 sm:py-6  lg:py-8 md:py-6 md:col-span-2 ">
          <p
            className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl font-bold lg:tracking-wider  "
            style={{
              color: primaryColor,
            }}
          >
            Setting up a VTU platform
          </p>
          <p className="text-[#000] text-justify text-md mt-4 sm:mt-6 md:mt-10 sm:text:lg lg:text-lg lg:mt-12 ">
            With AremxyPlug’s robust API and software solutions, you can set up
            a VTU platform to manage your telecom business as an individual or
            business owner, student, or full house wife, you can vend all
            telecom products with services like airtime top-up, data bundles,
            and bills payment in just a few easy steps.
          </p>
          <div className="my-6">
            <Bluebutton text="Set-up Now" />
          </div>
        </div>

        <div className="rounded-lg flex flex-col items-center  md:block ">
          <img
            src="./Images/vtu_dev/settingsVTU.png"
            alt="background_image "
            className="w-[60%]  md:w-[100%]"
          />
        </div>
      </div>

      <div className="lg:px-32  px-6 sm:px-16 ">
        <p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold lg:tracking-wider  text-center mt-[70px] mb-[50px]"
          style={{
            color: primaryColor,
          }}
        >
          Choose Plan
        </p>
{/* VTU Payment plans */}
        <div className=" grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 justify-center">
          <div className="relative myCardShadow h-[700px] bg-[#fff] rounded-lg gap-x-2 overflow-hidden">
            <VTU_PAY />

            <div className="absolute top-0 bottom-0 right-0 left-0 ">
<p className="text-center font-bold text-3xl my-8">Starter</p>

<div className="flex justify-center">
<p
      className="myButtonShadow text-[#000] text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
      style={{
        backgroundColor: "#fff",
     
      }}
    >
    Free
    </p>
</div>

<div className="flex justify-center my-8">
<p
      className="myButton2 text-[#fff] myButtonShadow  text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
      style={{
        backgroundColor: "#fff",
     
      }}
    >
    Get Started
    </p>
</div>

<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>

            </div>
          </div>
          <div className="relative myCardShadow h-[700px] bg-[#fff] rounded-lg gap-x-2 overflow-hidden">
            <VTU_PAY />

            <div className="absolute top-0 bottom-0 right-0 left-0 ">
<p className="text-center font-bold text-3xl my-8">Starter</p>

<div className="flex justify-center">
<p
      className="myButtonShadow text-[#000] text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
      style={{
        backgroundColor: "#fff",
     
      }}
    >
    Free
    </p>
</div>

<div className="flex justify-center my-8">
<p
      className="myButton2 text-[#fff] myButtonShadow  text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
      style={{
        backgroundColor: "#fff",
     
      }}
    >
    Get Started
    </p>
</div>

<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>

            </div>
          </div>
          <div className="relative myCardShadow h-[700px] bg-[#fff] rounded-lg gap-x-2 overflow-hidden">
            <VTU_PAY />

            <div className="absolute top-0 bottom-0 right-0 left-0 ">
<p className="text-center font-bold text-3xl my-8">Starter</p>

<div className="flex justify-center">
<p
      className="myButtonShadow text-[#000] text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
      style={{
        backgroundColor: "#fff",
     
      }}
    >
    Free
    </p>
</div>

<div className="flex justify-center my-8">
<p
      className="myButton2 text-[#fff] myButtonShadow text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
      style={{
        backgroundColor: "#fff",
     
      }}
    >
    Get Started
    </p>
</div>

<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>

            </div>
          </div>
          <div className="relative myCardShadow h-[700px] bg-[#fff] rounded-lg gap-x-2 overflow-hidden">
            <VTU_PAY />

            <div className="absolute top-0 bottom-0 right-0 left-0 ">
<p className="text-center font-bold text-3xl my-8">Starter</p>

<div className="flex justify-center">
<p
      className="myButtonShadow text-[#000] text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
      style={{
        backgroundColor: "#fff",
     
      }}
    >
    Free
    </p>
</div>

<div className="flex justify-center my-8">
<p
      className="myButton2 text-[#fff] myButtonShadow text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
      style={{
        backgroundColor: "#fff",
     
      }}
    >
    Get Started
    </p>
</div>

<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>

            </div>
          </div>
          <div className="relative myCardShadow h-[700px] bg-[#fff] rounded-lg gap-x-2 overflow-hidden">
            <VTU_PAY />

            <div className="absolute top-0 bottom-0 right-0 left-0 ">
<p className="text-center font-bold text-3xl my-8">Starter</p>

<div className="flex justify-center">
<p
      className="myButtonShadow text-[#000] text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"
      style={{
        backgroundColor: "#fff",
     
      }}
    >
    Free
    </p>
</div>

<div className="flex justify-center my-8">
<p
      className="myButton2 myButtonShadow text-[#fff] text-xl w-[150px] text-center rounded-lg py-2 font-semibold  cursor-pointer"

    >
    Get Started
    </p>
</div>

<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>
<div className="flex ml-4 items-center my-4">
  <img src="./Images/vtu_dev/blueCheck.png" alt="blue check" 
  className="w-[28px] "
  />
  <p className="pl-4 text-xl"
  style={{
    
  }}
  >Airtime Top-up</p>
</div>

            </div>
          </div>
        </div>
        {/* VTU Payment plans ends here*/}
      </div>


{/*  Our Key Features Includes */}
      <div 
      className="px-6 md:px-8 lg:px-16  xl:px-32"
      >

      <p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold lg:tracking-wider  text-center mt-[70px] mb-[50px]"
          style={{
            color: primaryColor,
          }}
        >
         Our Key Features Includes
        </p>


<div className="mt-14 grid grid-cols-1 gap-y-6">

{
  keyFeatures.map((item,index)=>(
    <div key={index.toString()} className="featuresShadow rounded-lg py-2"
    
    style={{
      backgroundColor:index%2 === 0 ? "#f4e3ff" : "#fce9d1"
    }}

    >

 <div className="flex items-center pl-4">
 <RxDotFilled color="#000" size={15}/>
 <p className="font-semibold "

>{item.title}</p>
 </div>

 <p className="pl-8">
  {item.content}
 </p>

    </div>
  ))
}

</div>
      </div>


      {/*  Our Key Features Includes ends here */}




      {/*   Difference Key Features  starts here */}
      <div 
      className="px-6 md:px-8 lg:px-16  xl:px-32"
      >

      <p
          className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold lg:tracking-wider  text-center mt-[70px] mb-[50px]"
          style={{
            color: primaryColor,
          }}
        >
         Differences Between Plan
        </p>

<div className="overflow-x-scroll">

<div className="grid grid-cols-7 min-w-[800px]">

  {

DifferenceHead.map((item,index)=>(
  <p className={`font-bold text-lg text-zinc-900 ${index === 0 ? "col-span-2":"col-span-1"}`}
  key={index.toString()}
 
  >
    {item.text}
  </p>
))
  }

  

</div>


</div>

      </div>


      {/*  Difference Key Features  ends here */}
    </>
  );
}

export default VTU_DEV;
