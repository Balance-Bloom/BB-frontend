import React from "react";

const SectionHeader = ({ title, subtext }) => {
  return (
    <div className="flex flex-col ">
      <h1 className="text-3xl font-bold">{title}</h1>
      {subtext && <p className="text-lg font-bold">{subtext}</p>}
    </div>
  );
};

export default SectionHeader;
