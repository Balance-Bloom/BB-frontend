import React from "react";
import { GiPadlock } from "react-icons/gi";
import { RiEmotionUnhappyFill } from "react-icons/ri";
import { IoMdHeartDislike } from "react-icons/io";
import { RiEmotionHappyFill } from "react-icons/ri";

const Moods = () => {
  return (
    <div>
      <div className=" bg-white drop-shadow-xl rounded-xl items-center flex-col justify-between p-4 ">
        <div className="flex items-center">
          <p className="text-base font-semibold block mb-3">Moods</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-4">
            <button className="flex font-medium bg-[#FFF6ED] px-2 items-center text-sm gap-1 rounded-full shadow hover:bg-[#FDE2E2] cursor-pointer transition">
              <GiPadlock
                size={30}
                className="text-[#FDAD65]  p-1 rounded-full"
              />
              Calm
            </button>
            <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
              <RiEmotionHappyFill
                size={25}
                className="text-[#FDAD65]  p-1 rounded-full"
              />
              Happy
            </button>
            <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
              <IoMdHeartDislike
                size={25}
                className="text-[#FDAD65]  p-1 rounded-full"
              />
              Energetic
            </button>
          </div>

          <div className="flex gap-3">
            <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
              <IoMdHeartDislike
                size={25}
                className="text-[#FDAD65]  p-1 rounded-full"
              />
              Frisky
            </button>
            <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
              <IoMdHeartDislike
                size={25}
                className="text-[#FDAD65]  p-1 rounded-full"
              />
              Mood swings
            </button>
            <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
              <IoMdHeartDislike
                size={25}
                className="text-[#FDAD65] p-1 rounded-full"
              />
              Irritated
            </button>
          </div>

          <div className="flex gap-2">
            <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
              <RiEmotionUnhappyFill
                size={25}
                className="text-[#FDAD65] p-1 rounded-full"
              />
              Sad
            </button>
            <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
              <IoMdHeartDislike
                size={25}
                className="text-[#FDAD65] p-1 rounded-full"
              />
              Anxious
            </button>
            <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
              <IoMdHeartDislike
                size={25}
                className="text-[#FDAD65] p-1 rounded-full"
              />
              Depressed
            </button>
          </div>

          <div className="flex gap-3">
            <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
              <IoMdHeartDislike
                size={25}
                className="text-[#FDAD65] p-1 rounded-full"
              />
              Feeling guilty
            </button>
            <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
              <IoMdHeartDislike
                size={25}
                className="text-[#FDAD65] p-1 rounded-full"
              />
              Obsessive thoughts
            </button>
            <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
              <IoMdHeartDislike
                size={25}
                className="text-[#FDAD65]  p-1 rounded-full"
              />
              Low energy
            </button>
          </div>
          <div className="flex gap-4">
            <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
              <IoMdHeartDislike
                size={25}
                className="text-[#FDAD65] p-1 rounded-full"
              />
              Apathetic
            </button>
            <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
              <IoMdHeartDislike
                size={25}
                className="text-[#FDAD65] p-1 rounded-full"
              />
              Confused
            </button>
            <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-3xl">
              <IoMdHeartDislike
                size={25}
                className="text-[#FDAD65]  p-1 rounded-full"
              />
              Very self critical
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Moods;
