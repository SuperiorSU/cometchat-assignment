import { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const Accordion=({item, index})=>{
  const [activeAccordion,setActiveAccordion]= useState(null);

  const accordClickHandle=(index)=> {
    setActiveAccordion(index===activeAccordion?null:index);
  };
  return (
        <div key={index} className="bg-[#14131D0A] mb-4 rounded-[20px] border p-6 transition-all duration-300">
          <button onClick={()=>accordClickHandle(index)} className="w-full text-left font-[640] text-[#14131D] flex justify-between items-center">
            <span className="lg:text-[22px] md:text-[22px] text-[18px] leading-[106%]">{item?.question}</span>
            <span className="">
              {activeAccordion===index?<IoIosArrowUp size={20} />:<IoIosArrowDown size={20}/>}
            </span>
          </button>
          <div className={`overflow-hidden transition-all duration-300 ease-in-out ${activeAccordion===index?"max-h-40 py-2 opacity-100 translate-y-0":"max-h-0 opacity-0 -translate-y-2"}`}>
            <p className="lg:text-[22px] md:text-[22px] leading-[120%] opacity-75 font-[500]">{item?.answer}</p>
          </div>
        </div>
  );
};

export default Accordion;
