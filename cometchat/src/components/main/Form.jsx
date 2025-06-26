import mail from '../../assets/icons/mail-01.png'
import Button from '../global/Button';
const Form = () => {
  return (
    <div className="lg:min-w-[528px] md:min-w-[528px] sm:min-w-[420px] min-w-[320px] mx-auto mt-16 relative z-10 font-satoshi max-h-[434px] bg-[#FAFAFF14] backdrop-blur-lg  text-white p-6 rounded-2xl shadow-xl space-y-6">
      <h2 className="lg:text-[32px] md:text-[32px] text-[22px] font-semibold">Become a partner</h2>
      <div className="space-y-4">
        <div>
          <label className="block text-sm mb-1 tracking-[0.5] leading-[112%]">Full name</label>
          <input
            type="text"
            placeholder="Type your name here..."
            className="w-full placeholder:font-satoshi bg-[#FAFAFF14] backdrop-blur-sm tracking-[0.5] leading-[112%] px-4 py-2 rounded-[14px] bg-[#2b1f44] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
        <div>
          <label className="block text-sm mb-1 tracking-[0.5] leading-[112%]">Email address</label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
              <img src={mail} alt="" />
            </span>
            <input
              type="email"
              placeholder="Type your emailsomething..."
              className="w-full pl-10 pr-4 bg-[#FAFAFF14] backdrop-blur-sm tracking-[0.5] leading-[112%] py-2 placeholder:font-satoshi rounded-[14px] bg-[#2b1f44] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
            />
          </div>
        </div>
        <div>
          <label className="block text-sm mb-1 tracking-[0.5] leading-[112%]">Companies name</label>
          <input
            type="text"
            placeholder="Type you company's name"
            className="w-full px-4 bg-[#FAFAFF14] backdrop-blur-sm py-2 rounded-[14px] tracking-[0.5] leading-[112%] placeholder:font-satoshi bg-[#2b1f44] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
          />
        </div>
      </div>
      <div className='mt-3 '>
        <Button btnLink={'/login'} btnText={"Submit application"}/>
      </div>
    </div>
  );
};

export default Form;
