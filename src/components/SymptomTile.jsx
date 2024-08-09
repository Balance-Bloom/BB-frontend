import React from "react";

const SymptomTile = ({
  height,
  headertext,
  icon,
  icon1,
  icon2,
  icon3,
  icon4,
  icon5,
  styles,
}) => {
  return (
    <div className={`w-[600px] ${styles}`}>
      <p className="self-start">{headertext}</p>
      <div className="flex gap-5">
        <span>{icon}</span>
        <span>{icon1}</span>
        <span>{icon2}</span>
        <span>{icon3}</span>
        <span>{icon4}</span>
        <span>{icon5}</span>
      </div>
    </div>
  );
};

export default SymptomTile;
