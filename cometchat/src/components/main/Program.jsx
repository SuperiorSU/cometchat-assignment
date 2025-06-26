import { programs } from "../../assets/data/programData"
import Container from "../global/Container"
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Program = () => {

  useEffect(()=>{
    AOS.init({duration:1000, once:false})
  },[])
  return (
    <div className="font-satoshi bg-white">
        <Container pt={'100px'} pb={'64px'}>
            <h5 data-aos="fade-right" data-aos-duration="1000" className="text-sm text-[#6852D6] ">Our programs</h5>
          <h3 data-aos="fade-down" data-aos-duration="1000" className="text-3xl font-semibold text-[#14131D]">
            Types of partnerships <br />programs
          </h3>
        </Container>
        <Container pt={'48px'} pb={'80px'}>
            <div className="grid lg:grid-cols-3 grid-cols-1 gap-x-16">

            {programs.map((item, index) => (
                <div key={index} data-aos="fade-up" data-aos-delay={`${index*250}`} data-aos-duration="1000" className="col-span-1 min-h-24 mb-12">
                        <div >
                          <div className="mb-2">
                            <img src={item.icon} className="" alt="" />
                          </div>
                          <h4 className=" text-[#14131D] text-lg font-[640] mb-1">{item.title}</h4>
                          <p className="text-sm font-[500] text-[#14131D]">{item.content}</p>
                        </div>
                      </div>
                    ))}
                </div>
        </Container>
    </div>
  )
}

export default Program
