import React, { useState } from "react";
import { GiPadlock } from "react-icons/gi";
import { GiPadlockOpen } from "react-icons/gi";
import { IoMdHeartDislike } from "react-icons/io";
import D from "../constants";

const SexDrive = () => {
  // State to keep track of selected items (multiple selections)
  const [selectedSexDrive, setSelectedSexDrive] = useState([]);

  // Funtion to handle the selection of an item
  const handleSelect = (sexDrive) => {
    if (selectedSexDrive.includes(sexDrive)) {
      // If sexDrive is already selected remove it form the selection
      setSelectedSexDrive(selectedSexDrive.filter((item) => item !== sexDrive));
    } else {
      // If sex drive is not selected, add it to the selection
      setSelectedSexDrive([...selectedSexDrive, sexDrive]);
    }
  };
  return (
    <>
      <div className=" bg-white drop-shadow-xl rounded-xl items-center flex-col justify-between p-4 ">
        <div className="flex items-center">
          <p className="text-base font-semibold block mb-3">
            Sex and sex drive
          </p>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex gap-2">
            {D.SEXDRIVE.slice(0, 3).map((item, index) => {
              const isSelected = selectedSexDrive.includes(item);
              return (
                <button
                  key={index}
                  onClick={() => handleSelect(item)}
                  className={`flex font-medium bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-full shadow hover:bg-[#FDE2E2] cursor-pointer transition  ${
                    isSelected
                      ? "bg-white border-[1px] text-[#EC4F4E]"
                      : "bg-[#F4F0FE] border-transparent"
                  }`}
                >
                  {item.icon}
                  {item.text}
                </button>
              );
            })}
          </div>

          <div className="flex gap-1">
            {D.SEXDRIVE.slice(3, 6).map((item, index) => {
              const isSelected = selectedSexDrive.includes(item);

              return (
                <button
                  onClick={() => handleSelect(item)}
                  className={`flex font-medium bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-full shadow hover:bg-[#FDE2E2] cursor-pointer transition  ${
                    isSelected
                      ? "bg-white border-[1px] text-[#EC4F4E]"
                      : "bg-[#F4F0FE] border-transparent"
                  }`}
                >
                  {item.icon}
                  {item.text}
                </button>
              );
            })}
          </div>

          <div className="flex gap-2">
            {D.SEXDRIVE.slice(6, 9).map((item, index) => {
              const isSelected = selectedSexDrive.includes(item);

              return (
                <button
                  onClick={() => handleSelect(item)}
                  className={`flex font-medium bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-full shadow hover:bg-[#FDE2E2] cursor-pointer transition  ${
                    isSelected
                      ? "bg-white border-[1px] text-[#EC4F4E]"
                      : "bg-[#FAC7CA] border-transparent"
                  }`}
                >
                  {item.icon}
                  {item.text}
                </button>
              );
            })}
          </div>

          <div className="flex gap-4">
            {D.SEXDRIVE.slice(9, 12).map((item, index) => {
              const isSelected = selectedSexDrive.includes(item);

              return (
                <button
                  onClick={() => handleSelect(item)}
                  className={`flex font-medium bg-[#FDEDED] px-2 items-center text-sm gap-1 rounded-full shadow hover:bg-[#FDE2E2] cursor-pointer transition  ${
                    isSelected
                      ? "bg-white border-[1px] text-[#EC4F4E]"
                      : "bg-[#F4F0FE] border-transparent"
                  }`}
                >
                  {item.icon}
                  {item.text}
                </button>
              );
            })}
          </div>
          {/* Display the button only if there are selected items */}
          {selectedSexDrive.length > 0 && (
            <div className="mt-4 flex justify-center items-center">
              <button
                className="w-1/2 bg-deepPink text-white py-2 rounded-lg hover:shadow-lg transition"
                // onClick={}
              >
                Proceed
              </button>
            </div>
          )}
        </div>
        {/* Display the selected items at the bottom in a fixed grid */}
        {selectedSexDrive.length > 0 && (
          <div className="mt-4 bg-gray-100 p-4 rounded-lg">
            <h3 className="text-base font-semibold mb-2">
              Selected Sex drive:
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {selectedSexDrive.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center bg-white px-3 py-1 rounded-full shadow"
                >
                  {item.icon}
                  <span className="ml-2">{item.text}</span>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SexDrive;
