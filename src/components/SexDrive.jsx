import React from "react";
import { GiPadlock } from "react-icons/gi";
import { GiPadlockOpen } from "react-icons/gi";
import { IoMdHeartDislike } from "react-icons/io";

const SexDrive = () => {
  return (
    <>
      <div className=" bg-white drop-shadow-xl rounded-xl items-center flex-col justify-between p-4 ">
        <div className="flex items-center">
          <p className="text-base font-semibold block mb-3">
            Sex and sex drive
          </p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          <div className="flex font-medium bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-full shadow hover:bg-[#FDE2E2] cursor-pointer transition">
            <GiPadlock
              size={30}
              className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
            />
            Protected sex
          </div>
          <div className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <GiPadlockOpen
              size={25}
              className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
            />
            Unprotected sex
          </div>
          <div className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
            />
            Didn't have sex
          </div>
          <div className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
            />
            Oral sex
          </div>
          <div className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
            />
            Anal sex
          </div>
          <div className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
            />
            Masturbation
          </div>

          <div className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
            />
            Sensual touch
          </div>
          <div className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
            />
            Sex toys
          </div>
          <div className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
            />
            Orgasm
          </div>
          <div className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
            />
            High sex drive
          </div>
          <div className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
            />
            Neutral sex drive
          </div>
          <div className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
            <IoMdHeartDislike
              size={25}
              className="text-[#EC4F4E] bg-[#FAC7CA] p-1 rounded-full"
            />
            Low sex drive
          </div>
        </div>
      </div>
    </>
  );
};

export default SexDrive;
