import React, { useState } from "react";
import D from "../constants";
import { CheckIcon } from "@heroicons/react/20/solid";

const VaginalDischarge = () => {
  // State to keep track of the selected items (multiple selections)
  const [selectedDischarge, setSelectedDischarge] = useState([]);

  // Function to handle the selection of an item
  const handleSelect = (discharge) => {
    if (selectedDischarge.includes(discharge)) {
      // If the discharge is already selected, remove it from the selection
      setSelectedDischarge(
        selectedDischarge.filter((item) => item !== discharge)
      );
    } else {
      // If the discharge is not selected, add it to the selection
      setSelectedDischarge([...selectedDischarge, discharge]);
    }
  };

  return (
    <div className="bg-white drop-shadow-xl rounded-xl p-4 flex flex-col justify-between box-">
      <div className="flex items-center">
        <p className="text-base font-semibold block mb-3">Vaginal discharge</p>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {D.VAGINALDISCHARGE.map((item, index) => {
          const isSelected = selectedDischarge.includes(item);
          return (
            <button
              key={index}
              onClick={() => handleSelect(item)}
              className={`relative flex font-medium px-2 items-center text-sm gap-1 rounded-full shadow cursor-pointer transition ${
                isSelected
                  ? "bg-white border-[1px] text-[#8f69e1]"
                  : "bg-[#F4F0FE] border-transparent"
              }`}
              style={{
                borderColor: isSelected ? "#8f69e1" : "transparent",
                borderWidth: isSelected ? "1px" : "0px",
                boxSizing: "border-box",
              }}
            >
              {item.icon}
              {item.text}
            </button>
          );
        })}
      </div>

      {/* Display the button only if there are selected items */}
      {selectedDischarge.length > 0 && (
        <div className="mt-4 flex justify-center items-center">
          <button
            className="w-1/2 bg-deepPink text-white py-2 rounded-lg hover:shadow-lg transition"
            // onClick={}
          >
            Proceed
          </button>
        </div>
      )}

      {/* Display the selected items at the bottom in a fixed grid */}
      {selectedDischarge.length > 0 && (
        <div className="mt-4 bg-gray-100 p-4 rounded-lg">
          <h3 className="text-base font-semibold mb-2">Selected Discharges:</h3>
          <div className="grid grid-cols-3 gap-4">
            {selectedDischarge.map((item, index) => (
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
  );
};

export default VaginalDischarge;
