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
}) => {
  return (
    <div className={`w-[600px] ${height}`}>
      <p>{headertext}</p>
      <p>{icon}</p>
      <p>{icon1}</p>
      <p>{icon2}</p>
      <p>{icon3}</p>
      <p>{icon4}</p>
      <p>{icon5}</p>
    </div>
  );
};

export default SymptomTile;
