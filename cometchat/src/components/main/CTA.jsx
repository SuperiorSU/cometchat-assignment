import React from "react";
import Button from "../global/Button";
import PlainButton from "../global/PlainButton";
import stars from "../../assets/icons/Stars.png";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const CTA = () => {
  useEffect(()=>{
    AOS.init({duration:1000, once:false})
  },[])
  return (
    <div
      style={{ backgroundImage: `url(${stars})` }}
      className="bg-[#0A0914] relative font-satoshi lg:min-h-[480px] z-10 md:min-h-[480px] overflow-hidden lg:px-16 md:px-16 px-4 h-[358px] flex justify-center items-center">
        <div className="absolute z-[0] -top-1 left-10 w-1/2 h-[158px] backdrop-blur-md">

        <div className="w-full h-[158px] bg-gradient-to-r from-[#5852D6] to-[#0A0914] blur-2xl">
        </div>
        </div>
      <div className="absolute lg:-left-32 lg:-top-32 md:-left-20 md:-top-20 -left-14 -top-14">
        <div className="relative lg:w-96 lg:h-96 z-[0] md:w-80 md:h-80 w-[141.89px] h-[141.89px] rounded-full bg-gradient-to-tr  from-[#5343A5] via-[#B968A4] to-[#FCB8A8] shadow-2xl shadow-[#FCB8A8]">
          <div className="absolute lg:top-52 lg:right-5 md:top-44 md:right-3 top-12 right-3 lg:w-52 lg:h-52 md:w-44 md:h-44 h-20 w-20 rounded-full backdrop-blur-sm">
            <div className="lg:w-52 lg:h-52 md:w-44 md:h-44 h-20 w-20 rounded-full bg-[#ffffff7d] blur-[50px] z-[2]" />
          </div>
        </div>
      </div>
      <div className="max-w-[640px] z-30 lg:mx-auto md:mx-auto w-full space-y-4 lg:text-center md:text-center text-start">
        <h3 data-aos="fade-down" data-aos-duration="1000" className="text-[#FAFAFF] text-3xl">Get started for free</h3>
        <p data-aos="fade-up" data-aos-duration="1000" className="lg:text-[22px] md:text-[22px] text-[18px] opacity-70 leading-[120%] tracking-[.5%] font-[500] text-[#FAFAFF]">
          Build and test for as long as you need. <br />
          Pick a plan when you’re ready.
        </p>
        <div className="flex lg:justify-center md:justify-center justify-start items-center gap-x-8">
          <div data-aos="zoom-in-right" data-aos-duration="1000">
            <PlainButton btnLink={"/free-trial"} btnText={"Start free trial"} />
          </div>
          <div data-aos="zoom-in-left" data-aos-duration="1000">
            <Button btnLink="/" btnText={"Schedule a demo"} />
          </div>
        </div>
      </div>
      <div className="absolute lg:right-16 lg:bottom-9 -right-20 bottom-5 lg:w-[150px] lg:h-[150px] z-[0] w-[151.89px] h-[151.89px] rounded-full bg-[#FFB590] blur-3xl backdrop-blur-lg"></div>
      <div className="absolute lg:right-16 lg:bottom-9 -right-20 bottom-5 lg:w-[140px] lg:h-[140px] z-[1] w-[141.89px] h-[141.89px] rounded-full bg-gradient-to-tr  from-[#45368D] via-[#FF7F3E] to-[#FFB590] shadow-2xl drop-shadow-2xl shadow-[#FCB8A8]"></div>
      <div className="absolute top-16 left-12 w-full h-1/2 rounded-[50%] border-t-[1px] z-0 opacity-10"></div>
    </div>
  )
}

export default CTA;
