import React from "react";
import { Link } from "react-router-dom";

const NavBar = ({ border, navLink1, navLink2, navLink3 }) => {
  return (
    <div className={`navbar bg-base-100 ${border}`}>
      <div className="flex-1">
        <Link to="/" className="btn btn-ghost text-xl">
          B&B
        </Link>
      </div>
      <div className="flex-none gap-2">
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Avatar" src="" />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
          >
            <li>
              <Link className="justify-between">{navLink1}</Link>
            </li>
            <li>
              <Link>{navLink2}</Link>
            </li>
            <li>
              <Link>{navLink3}</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
