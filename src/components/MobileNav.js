import Link from "next/link";
import React from "react";

import { GiHamburgerMenu } from "react-icons/gi";
const MobileNav = () => {
  return (
    <div className=" drawer drawer-end">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        {/* Page content here */}
        <label htmlFor="my-drawer-4" className="drawer-button btn btn-neutral">
          <GiHamburgerMenu size={20} />
        </label>
      </div>
      <div className="drawer-side">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu px-8 py-6 space-y-4 flex flex-col text-neutral-800 text-xl  justify-start  w-full max-w-[280px] min-h-full bg-yellow-50/40 backdrop-blur-sm ">
          {/* Sidebar content here */}
          
          <li className="btn btn-neutral ">
            <Link href={"/"}>Home</Link>
          </li>
          <li className="btn btn-neutral ">
            <Link href={"/"}>Attorneys</Link>
          </li>

          <li className="btn btn-neutral ">
            <Link href={"/blog/sections"}>Blog</Link>
          </li>
          <li className="btn btn-neutral ">
            <Link href={"/"}> About us</Link>
          </li>

          <li className="btn btn-neutral ">
            <Link href={"/contact"}>Contact</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileNav;
