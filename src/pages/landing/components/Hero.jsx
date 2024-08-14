import React from "react";
import "../../../App.css";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="hero-image">
        <div className="overlay flex justify-center items-center">
          <div className="">
            <p className="text-white text-6xl font-bold">
              Welcome to Bloom and Balance
            </p>
            <p className="text-white text-2xl">
              "Embrace your journey, find your balance, bloom through every
              stage"
            </p>
            <div className="mt-9 flex gap-5">
              <button
                className="bg-deepPink drop-shadow-lg text-white px-8 py-3 rounded-3xl text-base tracking-wider hover:bg-white hover:text-deepPink"
                onClick={() => navigate("/sign-up")}
              >
                Get Started
              </button>
              <button
                className=" text-white px-14 drop-shadow-lg py-3 rounded-3xl text-base tracking-wider border-deepPink border-2 hover:bg-white hover:text-deepPink hover:border-none"
                onClick={() => navigate("/login")}
              >
                Login
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Hero;
