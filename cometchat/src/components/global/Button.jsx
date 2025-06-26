import { Link } from "react-router-dom";

const Button = ({ btnText, btnLink }) => {
  return (
    <Link to={`${btnLink}`}>
      <button className="font-satoshi overflow-hidden relative px-3 py-4 text-sm rounded-[10px] bg-gradient-to-tr from-indigo-600 via-indigo-500 to-[#6852D6] text-[#FAFAFF] text-center transition-all duration-500 hover:bg-gradient-to-l">
        <span className="absolute z-[0] left-1/2 right-1/2 bg-white h-5 top-[-10px] w-5 rounded-full blur-md "></span>
        {btnText?btnText:"Button-Text"}
      </button>
    </Link>
  );
};

export default Button;
