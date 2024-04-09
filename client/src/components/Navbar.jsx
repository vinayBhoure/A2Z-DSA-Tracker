import React from "react";
import logo from "../assets/react.svg";
import { Link, NavLink } from "react-router-dom";
import { FiSearch } from "react-icons/fi";
import { CiMenuBurger } from "react-icons/ci";
import Button from "./Button";
import { RxCross2 } from "react-icons/rx";
import { useUserContext } from '../context/context'

export default function Navbar() {
  
  const {authUser} = useUserContext();
  const {showMenu, setShowMenu} = useUserContext();

  const menuHandler = () => {
    setShowMenu(!showMenu);
  }

  return (
    <div className="z-10">
      <div className="flex justify-between items-center shadow-md px-6 py-2 sticky top-0">
      <div className="flex items-center gap-4">

      <div onClick={menuHandler} className="border-2 p-3 rounded-md block lg:hidden">
      { !showMenu ? <CiMenuBurger /> : <RxCross2 />}
      </div>
        <NavLink to='/' className="flex items-center gap-2">
          <img src={logo} alt="React logo" className="h-[3rem]"  />
          <span className="text-[1.5rem] hidden sm:block" > A2Z Tracker</span>
        </NavLink>
      </div>
        <div className="flex gap-6 h-[100%]">
          <label className="flex items-center bg-[#eeeeee] px-4 rounded-3xl border-2 h-10">
            <input
              type="text"
              placeholder="search user"
              className="bg-[#eeeeee] outline-none text-lg hidden sm:block"
            ></input>
            <Link to="/" className="h-full items-center flex w-5 border-l-2 ">
              {" "}
              <FiSearch />{" "}
            </Link>
          </label>
          {authUser && (
            <div className="avatar hover:cursor-pointer">
              <div className="w-10 rounded-full ring ring-primary hover:ring-blue-800 ring-offset-base-100 ring-offset-2">
                <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" className="rounded-[50%]" />
              </div>
            </div>
          ) }
        </div>
      </div>
    </div>
  );
}
