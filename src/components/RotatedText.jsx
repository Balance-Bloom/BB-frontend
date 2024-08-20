import React from "react";

const RotatedText = () => {
  const text = "BLOOM DNA ECNALAB";
  const characters = text.split("");

  return (
    <div className="relative flex items-center justify-center w-40 h-40 rounded-full">
      {characters.map((char, index) => (
        <span
          key={index}
          className="absolute"
          style={{
            transform: `rotate(${index * (360 / characters.length)}deg)`,
            transformOrigin: "0 75px", // Reduced to bring text closer to the center
            height: "75px",
            display: "inline-block",
          }}
        >
          <span
            style={{
              transform: `rotate(-${index * (360 / characters.length)}deg)`,
              display: "inline-block",
            }}
          >
            {char}
          </span>
        </span>
      ))}
    </div>
  );
};

export default RotatedText;
