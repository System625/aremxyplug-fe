import React, { useContext, useState } from 'react';
import { DashBoardLayout } from '../../Dashboard/Layout/DashBoardLayout';
import { Link } from 'react-router-dom';
import AddWallet from '../../Wallet/AddWallet';
import { ContextProvider } from '../../Context';
 

const VirtualAccount = () => {
  const [ setShowModal] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [currentId, setCurrentId] = useState(null);
  const [ setSelection] = useState('');
  const [addWalletModal, setAddWalletModal] = useState(false);


  const { isDarkMode } = useContext(ContextProvider);


  const amt = 10000

    const countryList = [
        {
          id:1,
          name: 'Nigeria',
          code: 'NGN',
          flag: require('./Images/ng.svg').default
        },
        {
          id:2,
          name: 'United States',
          code: 'USD',
          flag: require('./Images/us.svg').default
        },
        {
          id:3,
          name: 'United Kingdom',
          code: 'GBP',
          flag: require('./Images/gb.svg').default
        },
        {
          id:4,
          name: 'European Union',
          code: 'EUR',
          flag: require('./Images/eu.svg').default
        },
        {
          id:5,
          name: 'Australia',
          code: 'AUD',
          flag: require('./Images/au.svg').default
        },
        {
          id:6,
          name: 'Kenya',
          code: 'KSH',
          flag: require('./Images/ke.svg').default
        },
      ];

      const handleSelection =(value)=> {
        setSelection(value);
        setShowModal(true);
      }

      const displayMoney =(index)=> {
        setCurrentId(index);
        setClicked(!clicked);
      }

    //   const notAvailableCountries = ['United States', 'United Kingdom', 'Kenya', 'Australia', 'European Union']
    //   const notAvailable = notAvailableCountries.includes(selection);
  return (
    <DashBoardLayout>
      {/* this is to make it display default if no election */}
     
        <>
        <div className='flex flex-col justify-between h-full'>
         
          <div>
               {/* HERO HEADER STARTS HERE */}
            <div className="w-full h-[65.33px] md:h-[112.29px] lg:h-[196px] rounded-[7px] md:rounded-[11.5px] items-center flex px-[16px] lg:px-[50px] justify-around lg:rounded-[20px]"
            style={{
                backgroundColor: "#ffada7"
            }}
            >
              <div className='py-[13px] lg:py-[40px]'>
                <h2 className='text-[8px] md:text-[13.75px] md:leading-[20.63px] font-bold mb-2 lg:text-[24px] lg:mb-4'>GLOBAL VIRTUAL ACCOUNTS</h2>
                <h2 className='text-[6.6px] md:text-[11.46px] md:leading-[15px] lg:text-[20px] lg:leading-[26px] mb-3'>Please select the wallet currency to view the account details.

</h2>
              </div>
              <div className='h-[90%] ml-[15px]'>
                <img src='./Images/virtual-account/cloud.png' alt="" className='h-full'/>
              </div>
            </div>
             {/* HERO HEADER ENDS HERE */}

            <div className='mt-[25.39px] md:mt-[35px] lg:mt-[60px] '>
       

            <div className="flex items-center">
            <p
              className=" text-[#7c7c7c] text-[10px]  md:text-[18px] lg:text-[20px]
            "
            >
              Funding Methods
            </p>
            <img
              src="Images/top_up/arrowR.png"
              alt=" "
              className="ml-[1%] w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
            />
          </div>

            </div>


    
            <div className="mt-[25.39px] md:mt-[35px] lg:mt-[60px] px-2 py-2 flex flex-col gap-2" style={{boxShadow: `0px 0px 6.666667461395264px 0px rgba(0, 0, 0, 0.25)`}}>
              <div className='flex justify-between items-baseline font-bold text-[8px] leading-[12px] md:text-[9.17px] md:leading-[11.92px] border-b py-1 lg:text-[16px] lg:leading-[24px]'>
                <h2 className='font-bold'>Country</h2>
                <h2 className='font-bold'>Currency</h2>
                <h2 className='font-bold'>Balance</h2>
              </div>
              <div className="flex flex-col gap-2">
                {countryList.map((country) => (
                  <div className="grid grid-cols-3 text-[7px] leading-[10.5px] pb-[8px] md:text-[10px] md:leading-[15px] border-b last:border-b-0 last:pb-0 lg:text-[16px] lg:leading-[24px] cursor-pointer lg:pb-3 lg:pt-2" key={country.id}>
                    <h2 className='text-slate-400'>{country.name}</h2>
                    <div className='flex gap-1 items-center justify-center lg:gap-2' onClick={() => handleSelection(country.name)}>
                      <div className='w-[10px] h-[10px] md:w-[15px] md:h-[15px] lg:w-[20px] lg:h-[20px] rounded-full overflow-hidden flex items-center justify-center'>
                        <img src={country.flag} alt="" className='w-full h-full object-cover'/>
                      </div>
                      <h2 className='text-right'>{country.code}</h2>
                    </div>
                    <div className='flex gap-1 justify-end items-center text-slate-400'>
                      { currentId === country.id && clicked ? <h2>{country.code}{amt}</h2> : <h2>Account</h2>}
                      <button onClick={()=> displayMoney(country.id)}>
                      <img
              src="Images/top_up/arrowR.png"
              alt=" "
              className="ml-[1%] w-[15px] h-[15px] md:w-[] md:h-[] lg:w-[20px] lg:h-[20px]"
            />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t -mx-2 px-2 text-right pt-1 md:pt-2 lg:pt-3 lg:pb-2 flex justify-end cursor-pointer gap-2 items-center">
                <div className="text-[7px] leading-[10.5px] md:text-[10px] md:leading-[15px] lg:text-[15px] lg:leading-[22.5px] flex items-center gap-1">
                    <span>{'<'}</span>
                    <h2>1</h2>
                    <h2>2</h2>
                    <h2>3</h2>
                    <h2>4</h2>
                    <h2>5</h2>
                    <h2>6</h2>
                    <span>{'>'}</span>
                </div>
                <div className='border text-[7px] md:text-[10px] md:leading-[15px] leading-[10.5px] lg:text-[15px] lg:leading-[22.5px] p-[3px] rounded-[4px]'>
                  <h2>10</h2>
                </div>
                <h2 className='text-[7px] leading-[10.5px] md:text-[10px] md:leading-[15px] lg:text-[15px] lg:leading-[22.5px]'>Goto</h2>
                <div className='border text-[7px] leading-[10.5px] p-[3px] rounded-[4px] md:text-[10px] md:leading-[15px] lg:text-[15px] lg:leading-[22.5px]'>
                  <h2>10</h2>
                </div>
              </div>
            </div>
          </div>
         

          <div className="flex gap-2 justify-center items-center md:mt-40 ">
              <h2 className="leading-[12px]  text-[10px] md:text-[12px] lg:text-[14px]">
                You need help?
              </h2>
              <Link
                to={`/ContactUs`}
                className={` ${ isDarkMode ? "border":"bg-primary"} text-[8px] leading-[12px] text-white  px-2 py-1 rounded-full md:text-[10px] lg:text-[12px]`}
              >
                Contact Us
              </Link>
            </div>
        </div>
        {addWalletModal && <AddWallet onClick={() => setAddWalletModal(false)}/>}
        </> 

      
    </DashBoardLayout>
  );
}

export default VirtualAccount;
