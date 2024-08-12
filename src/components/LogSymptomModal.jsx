import { PlusCircleIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import D from "../constants/index";

const LogSymptomModal = () => {
  const [selectedSymptom, setSelectedSymptom] = useState(null);

  // List of symptoms with corresponding emojis
  const symptoms = [];

  // Handle symptom selection
  const handleSelection = (item) => {
    setSelectedSymptom(item);
  };

  return (
    <>
      {/* Only the button is rendered as the icon */}
      <button
        onClick={() => document.getElementById("my_modal_1").showModal()}
        className="focus:outline-none"
      >
        <PlusCircleIcon width={30} className="text-deepPink" />
      </button>

      {/* Modal structure outside the card */}
      <dialog id="my_modal_1" className="modal modal-bottom sm:modal-middle ">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Select a Symptom</h3>
          <p className="py-4 gap-4 bg-white rounded-lg shadow-md flex flex-row p-4 justify-center">
            {D.SYMPTOMS.MOOD.map((item, index) => (
              <button
                key={index}
                onClick={() => handleSelection(item)}
                className={`px-2 py-1 rounded-full ${
                  selectedSymptom?.id === item.id
                    ? "bg-yellow-300"
                    : "bg-gray-300"
                }`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="">{item.name}</span>
              </button>
            ))}
          </p>
          <h3 className="font-bold text-lg">Select a Symptom</h3>
          {/* <p className="py-4 gap-4 bg-white rounded-lg shadow-md flex flex-row p-4 justify-center">
            {D.SYMPTOMS.map((item, index) => (
              <button
                key={index}
                onClick={() => handleSelection(item)}
                className={`px-2 py-1 rounded-full ${
                  selectedSymptom?.id === item.id
                    ? "bg-yellow-300"
                    : "bg-gray-300"
                }`}
              >
                <span className="text-2xl">{item.emoji}</span>
                <span className="">{item.name}</span>
              </button>
            ))}
          </p> */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default LogSymptomModal;
