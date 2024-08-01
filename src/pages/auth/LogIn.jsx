import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
import Heart from "../../assets/svg/love2.svg";

const LogIn = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-custom-gradient">
      <div className="w-96 h-[450px] p-8 bg-pink rounded-lg shadow-lg flex flex-col items-center gap-8">
        <Link className="font-bold text-lg">Welcome back!</Link>
        <div className="w-1/4">
          <img src={Heart} alt="heart-image" />
        </div>
        <div className="relative w-60">
          <input
            type="text"
            className="w-full p-2 outline-none border-b-2 border-l-2 border-black transition-all rounded-bl-lg bg-transparent text-black"
          />
          <span className="mt-1 absolute left-0 -translate-y-1 ml-[10px] p-[10px] pointer-events-none text-xs text-[#000] uppercase rounded-lg transition-spacing">
            Email or Username
          </span>
        </div>

        <div className="relative w-60">
          <input
            type="password"
            className="w-full p-2 outline-none border-b-2 border-l-2 border-black transition-all rounded-bl-lg bg-transparent text-black"
          />
          <span className="mt-1 absolute left-0 -translate-y-1 ml-[10px] p-[10px] pointer-events-none text-xs text-[#000] uppercase rounded-lg transition-spacing">
            Password
          </span>
        </div>
        <button className="px-4 py-2 border-2 border-black bg-lilac/50 rounded-lg uppercase text-xs tracking-wide transition-all hover:bg-black hover:text-white">
          SUBMIT
        </button>
      </div>
    </div>
  );
};

export default LogIn;
