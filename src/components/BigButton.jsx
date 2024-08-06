import React from "react";

const BigButton = ({ onClick, buttonText }) => {
  return (
    <div>
      <button
        className="min-w-44 cursor-pointer rounded-full bg-[#FF5A7D] px-14 text-white text-xl font-semibold py-3 mb-2"
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default BigButton;
