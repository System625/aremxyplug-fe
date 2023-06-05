import React from 'react';
import OurServiceHeader from './OurServiceHeader';
import OurServiceCard from './OurServiceCard';
import bgImage from './images/bgImage.png'
import { ourServiceDetails } from './data/data';

const OurServices = () => {
  return (
    <div>
        <div className='w-[90%] mx-auto pt-[15%] lg:pt-[5%] md:pt-[5%] md:w-[84%]'>
            <OurServiceHeader/>
        </div>
        <div className="w-[90%] md:w-[84%] mx-auto bg-cover bg-center bg-no-repeat mb-[25%] md:mb-[15%]" style={{backgroundImage:`url(${bgImage})`}}>
            <div className="p-[14.5px] md:p-[25px]">
                <div className="flex flex-col gap-[30px] lg:gap-[165px] md:gap-[134px]">
                    { ourServiceDetails.map((data) => (
                        <OurServiceCard key={data.id} cardDetails={data}/>
                    ))}
                    {/* check the data file for the names used to link each of the service page links on explore */}
                </div>
            </div>
        </div>
    </div>
  );
}

export default OurServices;
