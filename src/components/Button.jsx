import React from "react";

const Button = ({ buttonText, styles, onClick }) => {
  return (
    <div className="flex justify-center">
      <button
        className={`${styles} px-4 py-1 w-24 bg-lilac/50 rounded-lg uppercase text-xs tracking-wide transition-all hover:bg-black hover:text-white`}
        onClick={onClick}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Button;
{
  /* <button className="px-4 py-1 border-2 w-24 border-black bg-lilac/50 rounded-lg uppercase text-xs tracking-wide transition-all hover:bg-black hover:text-white">
SUBMIT
</button> */
}
