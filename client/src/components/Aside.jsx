import React, { useEffect, useState } from "react";
import { AiFillHome } from "react-icons/ai";
import { TbMathSymbols } from "react-icons/tb";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";
import Button from "./Button";
import { useUserContext } from "../context/context";

export default function Aside() {
  const { authUser } = useUserContext();
  const { showMenu } = useUserContext();
  const varShowMenu = showMenu ? "block" : "hidden";

  const [currWindow, setCurrWindow] = useState("/");
  const focusCSS = "bg-blue-300 rounded-lg shadow-inner";
  const hoverCSS = "hover:bg-blue-100 hover:rounded-lg hover:shadow-inner";

  return (
    <div
      className={`absolute sm:static h-full md:min-w-52 lg:min-w-60 ${varShowMenu} lg:block bg-[#E8F1FD] text-[#4F4F4F] text-md py-6 px-6 font-semibold`}
    >
      <div className="px-3 py-4 hover:cursor-default">Main menu</div>
      <ul className="flex flex-col gap-2">
        <Link
          to="/"
          className={`${currWindow === "/" ? focusCSS : hoverCSS}`}
          onClick={() => setCurrWindow("/")}
        >
          <li className="p-2 flex items-center gap-1 hover:text-[#0B6DE0] ">
            <AiFillHome />
            Home
          </li>
        </Link>
        {
          <>
            <Link
              to={authUser ? "/dashboard" : "/login"}
              className={`${currWindow === "/dashboard" ? focusCSS : hoverCSS}`}
              onClick={() => setCurrWindow("/dashboard")}
            >
              <li className="p-2 flex items-center gap-1 hover:text-[#0B6DE0]">
                <CgProfile />
                DashBoard
              </li>
            </Link>
            <Link
              to={authUser ? "/problems" : "/login"}
              className={`${currWindow === "/problems" ? focusCSS : hoverCSS}`}
              onClick={() => setCurrWindow("/problems")}
            >
              <li className="p-2 flex items-center gap-1 hover:text-[#0B6DE0]">
                <TbMathSymbols />
                Problem Solved
              </li>
            </Link>
          </>
        }
      </ul>
      {!authUser ? (
        <div className="flex flex-col gap-2 md:hidden mt-4">
          <Button link={"/login"}>Login</Button>
          <Button link={"/singup"}>SignUp</Button>
        </div>
      ) : (
        <div className="mt-6 px-6">
          <Button link={"/logout"}>Log Out</Button>
        </div>
      )}
    </div>
  );
}
