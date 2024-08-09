import { PlusCircleIcon } from "@heroicons/react/20/solid";
import React, { useState } from "react";
import D from "../../../constants";

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
          <p className="py-4 flex gap-4 justify-center">
            {D.SYMPTOMS.map((item, index) => (
              <button
                key={index}
                onClick={() => handleSelection(item)}
                className={`p-4 text-4xl rounded-lg ${
                  selectedSymptom?.id === item.id
                    ? "bg-yellow-300"
                    : "bg-gray-300"
                }`}
              >
                {item.emoji}
              </button>
            ))}
          </p>
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
