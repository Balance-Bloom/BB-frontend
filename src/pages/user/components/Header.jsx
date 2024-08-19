import React from "react";
import { BiSearchAlt } from "react-icons/bi";
import { TbMessageCircle } from "react-icons/tb";
import { IoNotificationsOutline } from "react-icons/io5";
import AdminImage from "../../../assets/images/beauty.jpg";
import Logo from "../../../assets/logo/nav-bar.jpg";

const Header = () => {
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex items-center">
          <img src={Logo} alt="" className="w-1/6" />
        </div>
        <div className="flex items-center gap-4">
          <div className="flex items-center bg-white rounded-lg gap-4 px-2 py-4 w-96">
            <input
              type="text"
              placeholder="Search"
              className="border-none outline-none bg-none"
            />
          </div>
          <BiSearchAlt className="text-2xl hover:text-deepPink" />
          <TbMessageCircle className="text-2xl hover:text-deepPink bg-white p-[5px] rounded-md" />
          <IoNotificationsOutline className="text-2xl hover:text-deepPink bg-white p-[5px] rounded-md" />
          <div className="border-2 border-white w-10 rounded-lg overflow-hidden">
            <img
              src={AdminImage}
              alt="Admin image"
              className="w-full h-full rounded-[10px]"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
