import React from "react";

const BigButton = ({ onClick, buttonText }) => {
  return (
    <div>
      <button
        className=" bg-deepPink text-white w-60 py-3 px-6 rounded-full hover:bg-red-600 transition-colors shadow-md"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default BigButton;
