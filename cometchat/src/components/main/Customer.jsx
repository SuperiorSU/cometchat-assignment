import Marquee from "react-fast-marquee";
import { customer } from "../../assets/data/customerData";
const Customer=()=>{
  return (
    <div className="bg-[#0A0914] py-6 overflow-hidden">
      <Marquee speed={50} gradient={false} pauseOnHover={true}>
        {customer.map((partner, index)=>(
          <div key={index} className="mx-10 flex items-center">
            <img src={partner.img} alt={partner.alt} className="h-7  opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition duration-300"/>
          </div>
        ))}
      </Marquee>
    </div>
  )
}

export default Customer;