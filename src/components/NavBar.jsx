import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/nav-bar.jpg";

const NavBar = ({}) => {
  return (
    <div>
      <nav className="flex justify-between p-2 px-5 font-sans items-center border-b-2">
        <div className="w-[8%]">
          <img src={Logo} alt="" />
        </div>
        <div className="flex gap-3 text-base ">
          <Link className="hover:text-deepPink">Home</Link>
          <Link className="hover:text-deepPink">My Insights</Link>
          <Link className="hover:text-deepPink">Articles</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
