import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({}) => {
  return (
    <div>
      <nav className="flex justify-between p-2 px-5 font-sans ">
        <p>B&B</p>
        <div className="flex gap-3 text-base">
          <Link className="">Home</Link>
          <Link>My Insights</Link>
          <Link>Articles</Link>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
