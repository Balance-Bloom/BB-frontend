import React from "react";
import D from "../constants";

const Feelings = () => {
  return (
    <div>
      <div className=" bg-white drop-shadow-xl rounded-xl items-center flex-col justify-between p-4 ">
        <div className="flex items-center">
          <p className="text-base font-semibold block mb-3">Symptoms</p>
        </div>
        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            {D.FEELINGS.slice(0, 3).map((item, index) => {
              return (
                <button
                  key={index}
                  className="flex font-medium bg-[#F8ECF6] px-2 items-center text-sm gap-1 rounded-full shadow hover:bg-[#FDE2E2] cursor-pointer transition"
                >
                  {item.icon}
                  {item.text}
                </button>
              );
            })}
          </div>
          <div className="flex gap-4">
            {D.FEELINGS.slice(3, 6).map((item, index) => {
              return (
                <button
                  key={index}
                  className="flex font-medium bg-[#F8ECF6] px-2 items-center text-sm gap-1 rounded-full shadow hover:bg-[#FDE2E2] cursor-pointer transition"
                >
                  {item.icon}
                  {item.text}
                </button>
              );
            })}
          </div>
          <div className="flex gap-3">
            {D.FEELINGS.slice(6, 9).map((item, index) => {
              return (
                <button
                  key={index}
                  className="flex font-medium bg-[#F8ECF6] px-2 items-center text-sm gap-1 rounded-full shadow hover:bg-[#FDE2E2] cursor-pointer transition"
                >
                  {item.icon}
                  {item.text}
                </button>
              );
            })}
          </div>
          <div className="flex gap-1">
            {D.FEELINGS.slice(9, 12).map((item, index) => {
              return (
                <button
                  key={index}
                  className="flex font-medium bg-[#F8ECF6] px-2 items-center text-sm gap-1 rounded-full shadow hover:bg-[#FDE2E2] cursor-pointer transition"
                >
                  {item.icon}
                  {item.text}
                </button>
              );
            })}
          </div>
          <div className="flex">
            {D.FEELINGS.slice(10, 12).map((item, index) => {
              return (
                <button
                  key={index}
                  className="flex font-medium bg-[#F8ECF6] px-2 items-center text-sm gap-1 rounded-full shadow hover:bg-[#FDE2E2] cursor-pointer transition"
                >
                  {item.icon}
                  {item.text}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feelings;
