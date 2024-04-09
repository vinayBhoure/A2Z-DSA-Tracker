import React from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function Button({ children, link }) {
  const navigate = useNavigate();
  const navigateHandler = () =>{
    console.log(link)
         navigate(link)
  }
  return (
    <div onClick={navigateHandler}
      className="text-slate-200 rounded-3xl flex items-center text-center bg-[#2f80ed] px-2 py-1 text-base 
      hover:text-white  hover:cursor-pointer
      hover:ring hover:ring-[#2f80ed] ring-offset-2
      md:px-6 md:py-2 md:text-lg
      "
    >
      {children}
    </div>
  );
}

export default Button;
