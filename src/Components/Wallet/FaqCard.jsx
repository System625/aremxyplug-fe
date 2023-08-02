import React from 'react';
import {HiChevronDown} from 'react-icons/hi';
import {HiChevronUp} from 'react-icons/hi'

const FaqCard = ({faqItem: {question, answer}, onToggle, active}) => {
  return (
    <div className={`faq-item margin-y-sm button-curved ${active ? 'active' : ''} mb-5 rounded-[6px] lg:rounded-[11px] lg:mb-9`} style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
      <div className="faq-question border rounded-[6px] lg:rounded-[11px] lg:h-[51.36px] h-[37px] px-1 gap-1 items-center md:px-2 lg:py-2 md:h-[42px]" onClick={onToggle} style={{boxShadow:`0px 0px 11.495177268981934px 0px #00000040`}}>
        <h2 className="text-[10px] leading-[15px] px-2 py-3 lg:text-[20px] lg:leading-[30px]  font-bold lg:leading-[20px] md:text-[12px] md:leading-[18px]">{question}</h2><span className='lg:text-2xl'>{active ? <HiChevronUp/> : <HiChevronDown/>}</span>
      </div>
      <div className={`faq-answer ${ active ? 'open' : ''}`}>
        <h3 className="text-[10px] leading-[15px] px-2 py-3 lg:text-[20px] lg:leading-[30px] lg:px-4 lg:py-3 lg:leading-[25px] md:w-3/4 w-full md:text-[12px] md:leading-[18px]">{answer}</h3>
      </div>
    </div>
  );
}

export default FaqCard;