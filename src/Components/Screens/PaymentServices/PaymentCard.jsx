import React from 'react';

const PaymentCard = ({title, message}) => {
  return (
        <div className="h-[110px] flex flex-col justify-between md:w-[309.85px] md:h-[88.48px] lg:w-[535px] lg:h-[151px]">
            <h2 className="text-[20px] text-primary font-bold text-center md:text-left md:text-[17.38px] lg:text-[30px] lg:leading-[45px]">{title}</h2>
            <p className="text-[12px] leading-[18px] lg:text-[18px] lg:leading-[27px] text-justify">{message}</p>
        </div>
  );
}

export default PaymentCard;
