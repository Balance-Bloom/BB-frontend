import React from "react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo/nav-bar.jpg";
import { IoMdSpeedometer } from "react-icons/io";

const NavBar = ({}) => {
  return (
    <div>
      <nav className="flex justify-between p-2 px-5 font-sans items-center border-b-2">
        <div className="w-[8%]">
          <img src={Logo} alt="" />
        </div>
        <ul className="flex gap-3 text-base ">
          <li>
            <Link className="hover:text-deepPink">
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link className="hover:text-deepPink">My Insights</Link>
          </li>
          <li>
            <Link className="hover:text-deepPink">Articles</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
