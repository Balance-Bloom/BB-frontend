import React from "react";
import { GiPadlock } from "react-icons/gi";
import { RiEmotionUnhappyFill } from "react-icons/ri";
import { IoMdHeartDislike } from "react-icons/io";
import { RiEmotionHappyFill } from "react-icons/ri";
import { FaToiletPaper } from "react-icons/fa";
import { GiVomiting } from "react-icons/gi";
import { FaToiletPaperSlash } from "react-icons/fa";
import { FaWind } from "react-icons/fa";

const Digestion = () => {
  return (
    <div>
      <div className=" bg-white drop-shadow-xl rounded-xl items-center flex-col justify-between p-4 ">
        <div className="flex items-center">
          <p className="text-base font-semibold block mb-3">
            Digestion and stool
          </p>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-4">
            <button className="flex font-medium bg-[#F9EAF5] px-2 items-center text-sm gap-1 rounded-full shadow hover:bg-[#FDE2E2] cursor-pointer transition">
              <GiVomiting
                size={30}
                className="text-[#C659B6] bg-[#E4C4E0]  p-1 rounded-full"
              />
              Nausea
            </button>
            <button className="flex font-medium bg-[#F9EAF5] px-2 items-center text-sm gap-1 rounded-full shadow hover:bg-[#FDE2E2] cursor-pointer transition">
              <FaWind
                size={30}
                className="text-[#C659B6] bg-[#E4C4E0]  p-1 rounded-full"
              />
              Bloating
            </button>
            <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#F9EAF5] px-2 items-center text-sm gap-1 rounded-3xl">
              <FaToiletPaperSlash
                size={25}
                className="text-[#C659B6] bg-[#E4C4E0]  p-1 rounded-full"
              />
              Constipation
            </button>
            <button className="flex shadow hover:bg-[#FDE2E2] transition bg-[#F9EAF5] px-2 items-center text-sm gap-1 rounded-3xl">
              <FaToiletPaper
                size={25}
                className="text-[#C659B6] bg-[#E4C4E0]  p-1 rounded-full"
              />
              Diarrhoea
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Digestion;
