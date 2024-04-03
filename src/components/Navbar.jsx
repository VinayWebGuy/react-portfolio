import React from "react";
import { MOBILE, SITE_NAME } from "./../../data";

const Navbar = () => {
  return (
    <div className="navbar navHeight flex justify-between items-center px-[60px] border-b border-zinc-200 sticky top-0 bg-white z-10">
      <span className="logo text-2xl font-bold cursor-pointer text-mainColor font-inter">
        {SITE_NAME}
      </span>

      <ul className="menu flex gap-4 font-[500]">
        <li>
          <abbr
            className="bg-mainColor px-3 py-[6px] text-white rounded-[6px] hover:opacity-75 transition-all"
            href={`tel:${MOBILE}`}
          >
            Discuss Project
          </abbr>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
