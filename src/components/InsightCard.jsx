import React from "react";

const InsightCard = ({ heading, icon, styles }) => {
  return (
    <div
      className={`w-40 h-36 bg-white rounded-lg shadow-md flex flex-col items-center justify-center ${styles}`}
    >
      <p>{heading}</p>
      <p>{icon}</p>
    </div>
  );
};

export default InsightCard;
