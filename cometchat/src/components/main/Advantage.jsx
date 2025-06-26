import { advantage } from "../../assets/data/advantageData";
import Container from "../global/Container";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Advantage = () => {
  useEffect(()=>{
    AOS.init({duration:1000, once:false})
  },[])
  return (
    <div>
      <Container pt={"100px"} bg={"#0A0914"} pb={"64px"}>
        <div className="font-satoshi">
          <h5 data-aos="fade-right" data-aos-duration="1000" className="text-sm text-[#FF7F3E] ">Be a partner</h5>
          <h3 data-aos="fade-down" data-aos-duration="1000" className="text-3xl font-semibold text-[#FAFAFF]">
            CometChat partner <br />
            advantages
          </h3>
        </div>
      </Container>
      <Container pt={"48px"} pb={"80px"} bg={"#0A0914"}>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-16">

        {advantage.map((item, index) => (
            <div data-aos="flip-up" data-aos-delay={`${index*50}`} data-aos-duration="1000" key={index} className="col-span-1 max-w-[394.67px] min-h-24 mb-12">
            <div >
              <div className=" mb-2">
                <img src={item.icon} className="" alt="" />
              </div>
              <h4 className=" text-white text-lg font-[640] mb-1">{item.title}</h4>
              <p className="text-sm font-[500] text-[#fafaffa5]">{item.description}</p>
            </div>
          </div>
        ))}
        </div>
      </Container>
    </div>
  );
};

export default Advantage;
