import React from "react";
import { Link } from "react-router-dom";

const PlainButton=({btnText,btnLink,onClick }) => {
  return (
    <Link onClick={onClick} className="font-satoshi" to={btnLink}>
      <button className="border bg-[#FAFAFF05] border-[#FAFAFF1A] rounded-[12px] text-[#FAFAFF] text-sm px-3 py-4 text-start">
        {btnText}
      </button>
    </Link>
  );
};

export default PlainButton;
