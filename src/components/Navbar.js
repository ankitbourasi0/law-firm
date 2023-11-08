import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { useRouter } from "next/router";

import Image from "next/image";
import MobileNav from "./MobileNav";
import useMediaQuery from "@/utils/useCustomScreenSize";

const Navbar = () => {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setmounted] = useState(false);
  const sizes = useMediaQuery(768);
  const route = useRouter();

  return (
    <>
      <nav
        className={` container bg-yellow-50 md:px-0 px-3   w-full font-poppins text-neutral-700 font-semibold flex  items-center  `}
      >
        <div className="max-w-7xl mx-auto w-full flex items-center justify-between py-6">
          <Link href={"/"} className="flex items-center w-28 ">
            <Image
              alt="navbar-logo"
              unoptimized
              src={"/images/nav-logo.png"}
              width={40}
              height={40}
            />
          </Link>
          <div className="">
          {sizes ? (
            <MobileNav />
          ) : (
            <div className="w-full flex items-center space-x-10">
              <ul className={`list-none flex  items-center space-x-10 `}>
                <Link href={"/"}>Home</Link>
                <li>About us</li>
                <li>Attorneys</li>
                <Link href={"/blog/sections"}>Blog</Link>
                <Link href={"/contact"}>Contact</Link>
              </ul>

              <button className=" font-semibold btn bg-[#ebd234] btn-md hover:bg-yellow-400 px-8 ">
                Consult
              </button>
            </div >
          )}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
