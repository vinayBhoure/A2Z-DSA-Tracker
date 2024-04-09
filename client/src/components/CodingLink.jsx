import React from "react";
import { Link } from "react-router-dom";
import { IoIosLink } from "react-icons/io";

export default function CodingLink(props) {
  const { link, platform } = props;
  return (
    <div className="flex items-center justify-start w-[100%]">
      <IoIosLink />
      <Link
        to="/"
        className="text-slate-700 ml-1 px-2
        hover:bg-blue-100 hover:rounded-lg hover:shadow-inner "
      >
        {platform}
      </Link>
    </div>
  );
}
