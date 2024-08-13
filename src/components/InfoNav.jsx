import React from "react";
import "../App.css";

const InfoNav = ({ children, bgColor }) => {
  return (
    <div className={`${bgColor} w-48 h-20 rounded-2xl bg-white`}>
      <div>{children}</div>
    </div>
  );
};

export default InfoNav;
