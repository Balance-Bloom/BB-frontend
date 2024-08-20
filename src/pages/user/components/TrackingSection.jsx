import React from "react";
import DashboardTile from "../../user-dashboard/components/DashboardTile";
import InsightCard from "../../../components/InsightCard";
import CalendarTile from "../../user-dashboard/components/CalendarTile";
import CircularProgressBar from "../../../components/CircularProgressBar";

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
