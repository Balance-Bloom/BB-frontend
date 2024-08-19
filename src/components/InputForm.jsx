import React, { forwardRef } from "react";

const InputForm = forwardRef(({ type, placeholder, ...rest }, ref) => {
  return (
    <div className="relative w-full flex justify-center mb-3">
      <input
        type={type}
        placeholder={placeholder}
        className="w-full p-2 placeholder-style outline-none border-b-2 border-l-2 border-black transition-all rounded-bl-lg bg-transparent text-black"
        ref={ref} // Attach the ref to the input element
        {...rest}
      />
    </div>
  );
});

export default InputForm;
