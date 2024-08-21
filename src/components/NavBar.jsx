import React, { useState } from "react";
import { HiMenuAlt3, HiSearch } from "react-icons/hi";
import { IoMdClose } from "react-icons/io";
import Logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

const NavBar = () => {
  const [dropDown, setDropDown] = useState(false);

  const showDropDown = () => {
    setDropDown(!dropDown);
  };

  return (
    <nav className="w-full lg:pb-8 flex flex-col justify-center items-center lg:relative sticky top-0 z-50 lg:bg-transparent bg-white">
      <div className="container mx-auto lg:w-full w-[95%]">
        <div className="flex items-center justify-between border-b border-[#e8e3da] lg:w-4/5 w-full mx-auto py-4">
          <img src={Logo} alt="" width={80} />
          <span className="flex items-center gap-8">
            {dropDown ? (
              <div
                onClick={showDropDown}
                className="lg:hidden text-[22px] cursor-pointer"
              >
                <IoMdClose />
              </div>
            ) : (
              <div
                onClick={showDropDown}
                className="lg:hidden text-[22px] cursor-pointer"
              >
                <HiMenuAlt3 />
              </div>
            )}
            <HiSearch size={24} />
            <button className="lg:block hidden bg-deepPink text-white text-[10px] font-semibold px-[29px] py-[11px] transition-bg hover:bg-pink">
              GET STARTED
            </button>
          </span>
        </div>
        <div className="lg:w-full mx-auto h-full lg:flex hidden justify-center gap-16 items-center pt-8">
          <ul className="flex items-center xl:gap-12 gap-x-4 max-lg:hidden">
            <a
              href="#"
              className="leading-normal no-underline text-sm hover:text-deepPink"
            >
              HOME
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-sm hover:text-deepPink"
            >
              SERVICES
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-sm hover:text-deepPink"
            >
              PRODUCT
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-sm hover:text-deepPink"
            >
              TESTIMONIAL
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-sm hover:text-deepPink"
            >
              TEAM
            </a>
            <a
              href="#"
              className="leading-normal no-underline text-sm hover:text-deepPink"
            >
              Blog
            </a>
          </ul>
        </div>
        {dropDown && (
          <div className="lg:hidden w-full h-full px-6 fixed top-24 bg-white transition-all ">
            <div className="w-full flex flex-col items-baseline gap-4">
              <ul className="flex flex-col justify-center w-full">
                <a href="#">HOME</a>
                <a href="#">SERVICES</a>
                <a href="#">PRODUCT</a>
                <a href="#">TESTIMONIAL</a>
                <a href="#">TEAM</a>
                <a href="#">Blog</a>
              </ul>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default NavBar;
