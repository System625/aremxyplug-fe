import React from 'react';
import { useState } from 'react';

const AddWallet = ({onClick}) => {
  const [image, setImage] = useState('');
  const [countryName, setCountryName] = useState('');
  const [showList, setShowList] = useState(false);
  const [selected, setSelected] = useState(false);
  const [countryCode, setCountryCode] = useState('');
  const [reDirect, setReDirect] = useState(false);
  const [inputValue, setInputValue] = useState('');

  const countryList = [
    {
      id:1,
      name: 'Nigeria',
      code: 'NGN',
      flag: require('./Images/ng.svg').default,
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

  const placeHolder = 'Select Wallet'

  const handleShowList =()=> {
    setShowList(!showList);
    setSelected(false);
    setCountryName('');
    setCountryCode('');
    setImage('')
  }

  const handleSelect =(name, flag, alt)=> {
    setSelected(true);
    setCountryName(name);
    setImage(flag);
    setCountryCode(alt);
    setShowList(false);
  }

  //checking if selected country is amongst the available one
  const availableCountries = ['United States', 'United Kingdom', 'Australia', 'Kenya', 'European Union']
  const available = availableCountries.includes(countryName);
  console.log(available);
  console.log(countryName);

  if (reDirect) {
    window.location.reload();
  }

  const Country =({name, flag, onClick})=> {
    return (
      <li className="px-1 border-b flex items-center py-[3px] gap-1 last:border-b-0 md:py-[6px] cursor-pointer" onClick={onClick}>
        <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] overflow-hidden md:w-[12.02px] lg:w-[20px] md:h-[12.02px] lg:h-[20px]">
          <img src={flag} alt="" className='w-full h-full object-cover'/>
        </div> 
        <h2 className="text-[6.7px] leading-[8.54px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{name}</h2>
      </li>
    )
  }

  return (
    <div className='absolute top-0 left-0 w-full h-screen bg-black/[0.3] z-[300] flex justify-center px-[6%] md:px-[12%] pt-[58%] md:pt-[40%] lg:pt-[40%] lg:h-[161vh] overflow-hidden'>
      <div className="relative bg-white w-full rounded-md h-[240px] py-2 md:h-[320px] lg:h-[460px] md:py-3 lg:py-5">
        { available ? 
          <div className='w-[141.14px] h-[173.86px] absolute right-0 top-0'>
            <img src='./Images/wallet/orangeBanner.png' alt="" className=' rounded-r-md object-cover w-full'/>
          </div> : 
          <>
            { countryName === '' ?  
            <div className='w-[141.14px] h-[173.86px] absolute right-0 top-0'>
              <img src='./Images/wallet/greenBanner.png' alt="" className=' rounded-r-md object-cover w-full'/>
            </div> : 
            <div className='w-[141.14px] h-[173.86px] absolute right-0 top-0'>
              <img src='./Images/wallet/pinkBanner.png' alt="" className=' rounded-r-md object-cover w-full'/>
            </div> 
            }
            
          </>
        }
        <h2 className="text-[8px] leading-[10.4px] font-semibold text-center md:text-[9.17px] md:leading-[11.92px] lg:text-[20px] lg:leading-[26px]">Add wallet</h2>
          { available ? 
          <>
            <h2 className="text-[8px] leading-[10.4px] text-center md:text-[9.17px] md:leading-[11.92px] lg:text-[20px] lg:leading-[26px]">This wallet already exists.</h2>
            <div className='w-[55%] mx-auto flex gap-2 mt-2'>
              <div className='flex h-full w-full items-center justify-center'>
                <div className='w-[82px] h-[75px] md:w-[114.58px] md:h-[114.58px] mt-[20%]'>
                  <img src='./Images/wallet/Gift.png' alt="" className='h-full w-full object-cover'/>
                </div>
              </div>
            </div>
            <div className="flex gap-2 items-center absolute bottom-3 w-full justify-center">
              <button className="text-[6.59px] leading-[8.57px] px-2 py-[3px] text-white bg-primary rounded-full lg:text-[15px] lg:p-2 lg:px-4" onClick={() => setReDirect(true)}>View wallet</button>
              <button onClick={onClick} className="text-[6.59px] leading-[8.57px] px-2 py-[3px] rounded-full lg:text-[15px] lg:p-2 lg:px-4 text-red-500 hover:bg-red-500 hover:text-white">Cancel</button>
            </div>
          </> :
          <>
            { countryName === '' ?
            <>
              <div className='w-[55%] mx-auto flex gap-2 mt-2'>
                <div className="w-[75%]">
                <div className="border w-full h-[18.12px] rounded-[4px] flex items-center justify-between p-[3px] md:h-[25.21px] md:p-[6px] lg:h-[40px] lg:rounded-[12px]" onClick={() =>handleShowList()}>
                  { selected ? 
                    <li className="px-1 flex items-center py-[3px] gap-1 lg:py-2 lg:gap-2">
                      <div className="rounded-full w-[12.02px] h-[12.02px] flex items-center justify-center text-[6px] lg:w-[24px] lg:h-[24px]">
                        <img src={image} alt='' className='w-full h-full rounded-full object-cover'/>
                      </div> 
                      <h2 className="text-[6.7px] leading-[8.54px] capitalize md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]">{countryName}</h2>
                    </li> :
                    <h2 className='text-[6.59px] leading-[8.57px] md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px]'>{placeHolder}</h2>
                  }            
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-3 h-3 lg:w-5 lg:h-5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                  </svg>
                </div>
                { showList && 
                <ul className="border mt-1 rounded-[4px] md:mt-2">
                  <div className='w-full p-1 h-[22px] md:h-[28px] lg:h-[36px]'>
                    <input type='text' placeholder='search here...' className='block w-full outline-none border placeholder:text-[6.59px] h-full p-[3px] md:p-[6px] rounded-[4px] lg:placeholder:text-[15px] lg:p-2' value={inputValue} onChange={(e)=>setInputValue(e.target.value)}/>
                  </div>
                  {countryList.map((country) => (
                    <Country name={country.name} key={country.id} flag={country.flag} onClick={()=> handleSelect(country.name, country.flag, country.code)}/>
                  ))}
                </ul> }
                </div>
                <div className="w-[25%]">
                  <div className="border w-full h-[18.12px] rounded-[4px] p-[3px] md:h-[25.21px] md:p-[6px] uppercase flex items-center lg:h-[40px] lg:rounded-[12px]">
                    {selected ? <h2 className='text-[6.59px] leading-[8.57px] md:text-[9.17px] md:leading-[11.92px] lg:text-[16px] lg:leading-[24px] rounded-[12px]'>{countryCode}</h2> : <h2 className='text-[6.59px] leading-[8.57px] md:text-[9.17px] md:leading-[11.92px] lg:rounded-[12px]'>{null}</h2>}
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center absolute bottom-3 w-full justify-center">
                <button className="text-[6.59px] leading-[8.57px] px-2 py-[3px] text-white bg-primary rounded-full lg:text-[15px] lg:p-2 lg:px-4" onClick={() => setReDirect(true)}>View wallet</button>
                <button onClick={onClick} className="text-[6.59px] leading-[8.57px] px-2 py-[3px] rounded-full lg:text-[15px] lg:p-2 lg:px-4 text-red-500 hover:bg-red-500 hover:text-white">Cancel</button>
              </div>
            </>  : 
            <>
              <h2 className="text-[8px] leading-[10.4px] text-center md:text-[9.17px] md:leading-[11.92px] lg:text-[20px] lg:leading-[26px]">This Wallet is currently not available.</h2>
              <div className='w-[55%] mx-auto flex gap-2 mt-2'>
                <div className='flex h-full w-full items-center justify-center'>
                  <div className='md:w-[114.58px] md:h-[114.58px] mt-[20%]'>
                    <img src='./Images/wallet/Loader.png' alt="" className='h-full w-full object-cover'/>
                  </div>
                </div>
              </div>
              <div className="flex gap-2 items-center absolute bottom-3 w-full justify-center">
                <button onClick={onClick} className="text-[6.59px] leading-[8.57px] px-2 py-[3px] text-white bg-primary rounded-full lg:text-[15px] lg:p-2 lg:px-4">Okay</button>
              </div>
            </>
            }
          </>
          }
      </div>
    </div>
  );
}

export default AddWallet;
