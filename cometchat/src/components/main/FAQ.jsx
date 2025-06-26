import Accordion from "./Accordion"
import { faqs } from "../../assets/data/faqData"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';


const FAQ=()=> {
    useEffect(()=>{
        AOS.init({duration:1000, once:false})
      },[])
  return (
    <div className="relative bg-white font-satoshi lg:pb-[64px] lg:pt-[100px] md:pb-[64px] pb-12 p-4">
        <div className="lg:text-center md:text-center text-start mx-auto lg:max-w-max md:max-w-max w-full">
            <h5 data-aos="fade-down" data-aos-duration="1000" className="text-[#FF7129] text-[22px]">FAQ's</h5>
            <h3 data-aos="fade-up" data-aos-duration="1000" className="text-3xl font-[640] text-[#14131D]">We want to help you <br />with all your doubts </h3>
        </div>
        <div className="absolute lg:w-[534px] lg:h-[457px] w-80 h-[280px] opacity-30 z-[-1] left-[-185px] rounded-full bg-gradient-to-r from-[#756CF6] from-40% via-[#B968A4] via-40% to-[#FCB8A8] to-70% blur-[140px]">
            
        </div>
        <div className="max-w-[751px] z-10 mt-[80px] mx-auto space-y-4">
            {
                faqs.map((item,index)=>{
                    return(
                        <div index={index} data-aos={index%2===0?"zoom-in-right":"zoom-in-left"}>
                            <Accordion item={item} />
                        </div>
                    )
                })
            }
        </div>
    </div>
  )
}

export default FAQ