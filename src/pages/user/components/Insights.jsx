import React from "react";
import { BsArrowRightShort } from "react-icons/bs";
import { AiFillHeart } from "react-icons/ai";
import { IoIosHappy } from "react-icons/io";
import LogSymptomModal from "../../../components/LogSymptomModal";

const Insights = () => {
  return (
    <div className="listing sectiion basis-[70%] ">
      <div className="heading flex w-full justify-between">
        <h1 className="text-lg font-bold text-black">My Insights</h1>
        <button className="border-[1px] border-transparent hover:border-[1px] hover:border-deepPink">
          See all Insights <BsArrowRightShort />
        </button>
      </div>

      <div className="secContainer w-full my-4 mx-0 flex-wrap gap-4 justify-between flex">
        <div className="singleitem relative w-40 h-44 flex items-center flex-col p-4 bg-white rounded-[10px] hover:shadow-lg">
          <AiFillHeart className="absolute right-2 top-2 text-deepPink" />
          <IoIosHappy size={80} className="" />
          <h3 className="text-base pt-5">Feeling Happy</h3>
        </div>
        <div className="singleitem relative w-40 h-44 flex items-center flex-col p-4 bg-white rounded-[10px] hover:shadow-lg">
          <AiFillHeart className="absolute right-2 top-2 text-deepPink" />
          <IoIosHappy size={80} className="" />
          <h3 className="text-base pt-5">Feeling Happy</h3>
        </div>

        <div className="singleitem relative w-40 h-44 flex items-center flex-col p-4 bg-white rounded-[10px] hover:shadow-lg">
          <AiFillHeart className="absolute right-2 top-2 text-deepPink" />
          <IoIosHappy size={80} className="" />
          <h3 className="text-base pt-5">Feeling Happy</h3>
        </div>

        <div className="singleitem relative w-40 h-44 flex items-center flex-col p-4 bg-white rounded-[10px] hover:shadow-lg">
          <AiFillHeart className="absolute right-2 top-2 text-deepPink" />
          <IoIosHappy size={80} className="" />
          <h3 className="text-base pt-5">Feeling Happy</h3>
        </div>

        <div className="singleitem relative w-40 h-44 flex items-center flex-col p-4 bg-white rounded-[10px] hover:shadow-lg">
          <AiFillHeart className="absolute right-2 top-2 text-deepPink" />
          <IoIosHappy size={80} className="" />
          <h3 className="text-base pt-5">Feeling Happy</h3>
        </div>
      </div>
    </div>
  );
};

export default Insights;
