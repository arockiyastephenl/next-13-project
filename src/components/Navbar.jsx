"use client"
import { navData } from "../constants/navdata";
import Link from "next/link";
// import logo from "../assets/logo.svg";

export function Navbar () {

  console.log("testNavbar");
  console.log(navData)
  return (
    <nav
      className={`px-6 sm:px-16 flex items-center text-white h-14 sm:h-[70px] top-0 left-0 fixed w-full py-6  transition-all justify-between`}
    >
      <Link href="/" className="flex items-center  gap-3 text-inherit">
        {/* <img src={logo} alt="logo" className="w-10  sm:w-10 lg:w-10" /> */}
        <span className={` font-semibold text-2xl sm:text-3xl`}>ERP APP</span>
      </Link>
      <ul className="flex items-center gap-8 xl:gap-12 abc">
        {navData.map((item, i) => (
          <li key={i} className={`text-base lg:text-lg font-medium cursor-pointer `}>
            <Link href={`/${item.link}`} key={i} className="text-inherit ">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
