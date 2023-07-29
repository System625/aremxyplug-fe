import React, { useState } from 'react';
import { BsEyeFill, BsFillEyeSlashFill } from 'react-icons/bs'

const Table = () => {
      const [showMoney, setShowMoney] = useState(false);
      const [selection, setSelection] = useState('');
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
        setSelection(value)
      }

      const notAvailableCountries = ['United States', 'United Kingdom', 'Autralia', 'Kenya', 'Australia']
      const notAvailable = notAvailableCountries.includes(selection);
      console.log(notAvailable);
    
      const TableRow = ({name, flag, code, onClick}) => {
        const value='10,000'
        return (
          <div className="grid grid-cols-3 text-[5.33px] leading-[6.93px] md:text-[9.17px] md:leading-[11.92px] border-b last:border-b-0 lg:text-[16px] lg:leading-[24px] cursor-pointer" onClick={onClick}>
            <h2 className='text-slate-400'>{name}</h2>
            <div className='flex gap-1 items-center justify-center'>
              <div className='w-[9.67px] h-[9.67px] md:w-[16.77px] md:h-[16.77px] lg:w-[29px] lg:h-[29px] rounded-full overflow-hidden flex items-center justify-center lg:mb-[3px]'>
                <img src={flag} alt="" className='w-full h-full object-cover'/>
              </div>
              <h2 className='text-right'>{code}</h2>
            </div>
            <div className='flex gap-1 justify-end items-center text-slate-400'>
              {showMoney ? <h2>{code}{value}</h2> : <h2>{code}XXXXXX.XX</h2>}
              <div className='flex gap-1'>
                  <BsEyeFill onClick={() => setShowMoney(true)}/>
                  <BsFillEyeSlashFill onClick={() => setShowMoney(false)}/>
              </div>
            </div>
          </div>
        )
      }
  return (
    <div className="flex flex-col gap-2">
        {countryList.map((country) => (
        <TableRow key={country.id} flag={country.flag} code={country.code} name={country.name} onClick={() => handleSelection(country.name)}/>
        ))}
    </div>
  );
}

export default Table;
