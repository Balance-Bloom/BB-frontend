import React from "react";

const Notes = ({ color }) => {
  return (
    <div className={`w-64 h-32 ${color} rounded-xl bg-lilac `}>
      <p> 12/12/24</p>
      <p className="">Mid test exam </p>
      <p></p>
    </div>
  );
};

export default Notes;
