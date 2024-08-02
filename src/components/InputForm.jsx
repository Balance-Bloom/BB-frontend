import React from "react";

const InputForm = ({ type, placeholder }) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-2 placeholder-style outline-none border-b-2 border-l-2 border-black transition-all rounded-bl-lg bg-transparent text-black"
      />
    </div>
  );
};

export default InputForm;
