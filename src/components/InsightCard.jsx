import React from "react";

const InsightCard = ({ heading, icon }) => {
  return (
    <div className="w-40 h-36 bg-white rounded-lg shadow-md flex flex-col items-center justify-center p-4">
      {/* Heading above the icon */}
      <h3 className="text-center font-semibold mb-4">{heading}</h3>
      {icon}
    </div>
  );
};

export default InsightCard;
