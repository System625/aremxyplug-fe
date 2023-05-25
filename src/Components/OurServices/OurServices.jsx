import React from 'react';
import OurServiceHeader from './OurServiceHeader';
import OurServiceCard from './OurServiceCard';
import bgImage from './images/bgImage.png'
import { ourServiceDetails } from './data/data';

const OurServices = () => {
  return (
    <>
        <div className='w-[90%] mx-auto pt-[40%] lg:pt-[25%] md:pt-[10%] md:w-[84%]'>
            <OurServiceHeader/>
        </div>
        <div className="w-[86.667%] mx-auto bg-cover bg-center bg-no-repeat mb-[90px]" style={{backgroundImage:`url(${bgImage})`}}>
            <div className="p-[14.5px] md:p-[25px]">
                <div className="flex flex-col gap-[30px] lg:gap-[165px] md:gap-[134px]">
                    { ourServiceDetails.map((data) => (
                        <OurServiceCard key={data.id} cardDetails={data}/>
                    ))}
                    {/* check the data file for the names used to link each of the service page links on explore */}
                </div>
            </div>
        </div>
    </>
  );
}

export default OurServices;
