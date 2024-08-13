import React from "react";
import { GiPadlock } from "react-icons/gi";
import { GiPadlockOpen } from "react-icons/gi";
import { IoMdHeartDislike } from "react-icons/io";

const Moods = () => {
  return (
    <div>
      <div className=" bg-white drop-shadow-xl rounded-xl items-center flex-col justify-between p-4 ">
        <div className="flex items-center">
          <p className="text-base font-semibold block mb-3">
            Sex and sex drive
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <button className="flex font-medium bg-[#FFF6ED] px-2 items-center text-sm gap-1 rounded-full shadow hover:bg-[#FDE2E2] cursor-pointer transition">
            <GiPadlock size={30} className="text-[#FDAD65]  p-1 rounded-full" />
            Protected sex
          </button>
          <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <GiPadlockOpen
              size={25}
              className="text-[#FDAD65]  p-1 rounded-full"
            />
            Unprotected sex
          </button>
          <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#FDAD65]  p-1 rounded-full"
            />
            Didn't have sex
          </button>
          <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#FDAD65]  p-1 rounded-full"
            />
            Oral sex
          </button>
          <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#FDAD65]  p-1 rounded-full"
            />
            Anal sex
          </button>
          <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#FDAD65] p-1 rounded-full"
            />
            Masturbation
          </button>

          <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#FDAD65] p-1 rounded-full"
            />
            Sensual touch
          </button>
          <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#FDAD65] p-1 rounded-full"
            />
            Sex toys
          </button>
          <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#FDAD65] p-1 rounded-full"
            />
            Orgasm
          </button>
          <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#FDAD65] p-1 rounded-full"
            />
            High sex drive
          </button>
          <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#FDAD65] p-1 rounded-full"
            />
            Neutral sex drive
          </button>
          <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#FDAD65]  p-1 rounded-full"
            />
            Low sex drive
          </button>
        </div>
      </div>
    </div>
  );
};

export default Moods;
