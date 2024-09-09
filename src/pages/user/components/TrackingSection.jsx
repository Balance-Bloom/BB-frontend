import React from "react";
import CircularProgressBar from "../../../components/CircularProgressBar";
import CalendarTile from "../../../components/CalendarTile";

const TrackingSection = () => {
  return (
    <div className="">
      <div className="grid grid-cols-3 gap-1  mx-3 ">
        <CalendarTile />
        <div className="bg-white col-span-2 shadow-md flex justify-center items-center p-6 rounded-r-[6px]">
          <CircularProgressBar />
        </div>
      </div>
    </div>
  );
};

export default TrackingSection;
