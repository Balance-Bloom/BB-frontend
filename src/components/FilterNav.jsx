import React from "react";

const FilterNav = ({ text, icon }) => {
  return (
    <div className="text-subText rounded-full p-2 bg-bgColor w-28">
      <p>
        <span className="">{icon}</span> {text}
      </p>
    </div>
  );
};

export default FilterNav;
