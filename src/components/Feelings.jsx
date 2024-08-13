import React from "react";
import D from "../constants";

const Feelings = () => {
  return (
    <div>
      <div className=" bg-white drop-shadow-xl rounded-xl items-center flex-col justify-between p-4 ">
        <div className="flex items-center">
          <p className="text-base font-semibold block mb-3">Symptoms</p>
        </div>
        <div className="grid grid-cols-3 gap-6">
          {D.FEELINGS.map((item, index) => {
            return (
              <button
                key={index}
                className="flex font-medium bg-[#F4F0FE] px-2 items-center text-sm gap-1 rounded-full shadow hover:bg-[#FDE2E2] cursor-pointer transition"
              >
                {item.icon}
                {item.text}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Feelings;
