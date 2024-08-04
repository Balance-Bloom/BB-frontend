import React from "react";

const DashedNote = ({ icon, text }) => {
  return (
    <div className=" border-dashed border-2 w-32 h-24 rounded-xl">
      <p>{icon}</p>
      <p>{text}</p>
    </div>
  );
};

export default DashedNote;
