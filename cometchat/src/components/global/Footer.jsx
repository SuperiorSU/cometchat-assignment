import { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa6";
import stars from '../../assets/icons/Stars.png';
import { footerLinksDesktop, footerLinksMobile } from "../../assets/data/footerLinks";
import logo from '../../assets/icons/cometchat-logo.png';
import divider from '../../assets/icons/Divider.png';
import { Link } from "react-router-dom";
import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Footer=()=>{
  const [openSection,setOpenSection]=useState(null);
  const linkClickHandle=(heading)=>{
    setOpenSection((prev) => (prev===heading?null:heading));
  };

  useEffect(()=>{
    AOS.init({duration:1000,once:false})
  },[])
  return (
    <footer style={{backgroundImage: `url(${stars})`,backgroundRepeat: 'no-repeat',backgroundPositionY: '-200px',overflow: "hidden"}} className="bg-[#0A0914] relative plg:px-16 md:px-16 px-5 pt-[56px] pb-[40px] font-satoshi text-white border-0">
      <div className="absolute lg:right-16 lg:-top-36 -right-20 -top-24 lg:w-[150px] lg:h-[150px] z-[0] w-[131.89px] h-[131.89px] rounded-full bg-[#FFB590] blur-3xl opacity-80 backdrop-blur-2xl"></div>

      <div data-aos="zoom-in" data-aos-duration="1000" className="mb-14 inline-block">
        <img className="lg:h-[26px] md:h-[26px] h-4 object-contain" src={logo} alt="cometchat-logo" />
      </div>

      <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-16">
        {footerLinksDesktop.slice(0,3).map((section, index) => (
          <div key={section.heading} data-aos={(index===1 || index==2)?"fade-up":(index===0?"zoom-in-right":"zoom-in-left")} >
            <h3 className="text-[#6852D6] font-semibold mb-4">{section.heading}</h3>
            {section.categories.map((category)=>(
              <div key={category.subtitle} className="mb-4">
                <h4 className="text-sm text-[#fafaffa5] mb-2">{category.subtitle}</h4>
                <ul className="space-y-1">
                  {category.links.map((link) => (
                    <li key={link.label} className="space-y-4">
                      <a href={link.href} className="text-sm text-[#FAFAFF] hover:underline">
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}

        <div data-aos="zoom-in-left" data-aos-duration="1000">
          {footerLinksMobile.filter((section)=>["Resources", "Competitors", "Company"].includes(section.heading)).map((section) => (
              <div key={section.heading} className="mb-6">
                <h3 className="text-[#6852D6] font-semibold mb-4">{section.heading}</h3>
                {section.categories.map((category)=> (
                  <div key={category.subtitle} className="mb-2">
                    <ul className="space-y-1">
                      {category.links.map((link) => (
                        <li key={link.label} className="space-y-4">
                          <a href={link.href} className="text-sm text-[#FAFAFF] hover:underline">
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            ))}
        </div>
      </div>

      <div className="md:hidden space-y-6 mb-4 relative z-10">
        {footerLinksMobile.map((section, index)=>(
          <div data-aos="fade-up" data-aos-delay={`${index*70}`} data-aos-duration="1000" key={section.heading} className="border-[#ffffff18] pb-4">
            <button onClick={() => linkClickHandle(section.heading)} aria-expanded={openSection === section.heading} className="flex justify-between items-center w-full text-[#6852D6] text-base font-semibold">
              {section.heading}
              {openSection === section.heading?<FiMinus />: <FiPlus />}
            </button>
            <div className={`overflow-hidden transition-all duration-300 ease-in-out ${openSection ===section.heading?'max-h-[1000px] mt-4':'max-h-0'} space-y-4`}>
              {(section.categories||[]).map((category)=> (
                <div key={category.subtitle ||category.label}>
                  {category.subtitle &&(
                    <h4 className="text-sm text-[#fafaffa5] mb-1">{category.subtitle}</h4>
                  )}
                  <ul className="space-y-1">
                    {(category.links || []).map((link)=>(
                      <li key={link.label}>
                        <a href={link.href} className="text-sm text-[#FAFAFF] hover:underline">
                          {link.label}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <img src={divider} className="w-full object-contain object-center h-[2px] mb-9" alt="divider"/>
      <div className="flex justify-between gap-y-5 flex-wrap-reverse items-center">
        <div>
          <div className="flex text-sm items-center gap-x-6 leading-[140%] tracking-[2%] text-[#FAFAFF]">
            <div className="opacity-70">2023 © CometChat</div>
            <div className="opacity-70"><a href="*">Terms of Use</a></div>
            <div className="opacity-70"><a href="*">Privacy Policy</a></div>
          </div>
        </div>

        <div>
          <div className="flex items-center flex-wrap gap-x-6 gap-y-3">
            <Link to="" className="flex items-center gap-x-1">
              <FaFacebook color="#FAFAFF" size={12} />
              <span className="text-sm opacity-85"> Facebook</span>
            </Link>
            <Link to="" className="flex items-center gap-x-1">
              <FaLinkedin color="#FAFAFF" size={12} />
              <span className="text-sm opacity-85"> LinkedIn</span>
            </Link>
            <Link to="" className="flex items-center gap-x-1">
              <FaInstagram color="#FAFAFF" size={12} />
              <span className="text-sm opacity-85"> Instagram</span>
            </Link>
            <Link to="" className="flex items-center gap-x-1">
              <FaTwitter color="#FAFAFF" size={12} />
              <span className="text-sm opacity-85"> Twitter</span>
            </Link>
            <Link to="" className="flex items-center gap-x-1">
              <FaGithub color="#FAFAFF" size={12} />
              <span className="text-sm opacity-85"> GitHub</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
