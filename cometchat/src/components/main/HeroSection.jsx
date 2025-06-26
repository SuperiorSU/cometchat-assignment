import Form from "./Form";
import bg from '../../assets/icons/Stars.png'
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const HeroSection=()=>{
  useEffect(()=>{
    AOS.init({duration:1000, once:false})
  },[])
  return (
    <div style={{backgroundImage: `url(${bg})`}} className="bg-[#0A0914] overflow-hidden relative lg:min-h-[700px] md:h-[700] h-[755px] font-satoshi">
        <div className="absolute w-3/4 h-1/2 left-20 right-20 top-20 z-[10] bg-gradient-to-r from-[#FF7F3E] opacity-10 to-[#604BC5] blur-[60px]">

        </div>
        <div className="absolute lg:block  hidden lg:left-8 opacity-20 -rotate-45 lg:top-16 left-2 top-12 lg:w-[30px] lg:h-[30px] z-[1] w-[21.89px] h-[21.89px] rounded-full bg-gradient-to-tr from-[#604BC5] via-[#604BC5] to-[#FFE5D8] shadow-2xl shadow-[#FCB8A8]"></div>
      <div className="flex lg:justify-center md:justify-center justify-start gap-x-20 items-center flex-wrap mx-auto w-full lg:place-items-center md:place-items-center place-items-start place-content-center lg:p-0 md:p-0 px-5">
        <div data-aos="zoom-in-right" data-aos-duration="1000" className="self-center col-span-1 lg:w-[480px] z-10 relative md:w-[480px] w-full lg:mt-0 md:mt-100 mt-[100px] text-[#FAFAFF]">
          <h2 className="lg:text-5xl mb-5 text-[32px] leading-[106%]  font-semibold">
            Join the CometChat <br />
            partner universe{" "}
          </h2>
          <p className="leading-[120%] opacity-[74%] tracking-[.5] lg:text-[22px] md:text-[22px] text-[18px] text-justify">
            Create value for your clients, leveraging our world-class
            technology. Partner with us and grow your business!
          </p>
        </div>
        <div className="self-center relative col-span-1">
            <div className="absolute lg:block hidden lg:-right-4 -rotate-45 lg:top-16 -right-2 top-12 lg:w-[30px] lg:h-[30px] z-[1] w-[21.89px] h-[21.89px] rounded-full bg-gradient-to-tr from-[#604BC5] via-[#604BC5] to-[#FFE5D8] shadow-2xl shadow-[#FCB8A8]"></div>
            <div className="relative z-10">
              <Form />
            </div>
            <div className="absolute lg:block hidden lg:-left-8 -rotate-45 lg:bottom-0 -left-5 bottom-0 lg:w-[80px] lg:h-[80px] z-[1] w-[41.89px] h-[41.89px] rounded-full bg-gradient-to-tr from-[#604BC5] via-[#604BC5] to-[#FFE5D8] shadow-2xl shadow-[#FCB8A8]"></div>
        </div>
      </div>
      <div className="absolute  lg:-left-16 lg:bottom-1/2 -left-20 bottom-1/2 lg:w-[150px] lg:h-[150px] z-[0] w-[151.89px] h-[151.89px] rounded-full bg-[#FFE5D8] blur-3xl backdrop-blur-lg"></div>
      <div className="absolute lg:-left-16 lg:bottom-1/2 -left-20 bottom-1/2 lg:w-[140px] lg:h-[140px] z-[1] w-[141.89px] h-[141.89px] rounded-full bg-gradient-to-tr from-[#604BC5] via-[#604BC5] to-[#FFE5D8] shadow-2xl"></div>

      
      <div className="lg:absolute lg:block md:hidden hidden lg:left-[240px] lg:top-1/2 left-1/3 top-5 lg:w-[150px] lg:h-[150px] z-[0] w-[151.89px] h-[151.89px] rounded-full bg-[#FFB590] blur-3xl backdrop-blur-lg"></div>
      <div className="lg:absolute lg:block md:hidden hidden lg:left-[240px] lg:top-1/2 left- top-5 lg:w-[140px] lg:h-[140px] z-[1] w-[141.89px] h-[141.89px] rounded-full bg-gradient-to-tr from-[#45368D] via-[#FF7F3E] to-[#FFB590] shadow-2xl drop-shadow-2xl shadow-[#FCB8A8]"></div>

      <div className="absolute lg:-right-32 lg:bottom-36 md:-right-20 md:-bottom-6 -right-14 -bottom-24">
        <div className="relative lg:w-64 lg:h-64 z-[0] md:w-[200px] md:h-[200px] w-[200px] h-[200px] rounded-full bg-gradient-to-tr from-[#5343A5] via-[#B968A4] to-[#FCB8A8] shadow-2xl shadow-[#FCB8A8]">
        </div>
          <div className="absolute lg:-right-6 lg:bottom-12 md:-right-16 md:-bottom-20 -right-6 -bottom-8 md:w-[240px] md:h-[240px] w-[220px] h-[220px] rounded-full bg-[#FFB590] blur-3xl"></div>
          
      </div>
      <div className="absolute w-full bottom-[-8px] left-0 right-0 z-20 bg-gradient-to-t from-[#0a0914] lg:h-[320px] md:h-[120px] h-[40px]"></div>
    </div>
  );
};

export default HeroSection;
