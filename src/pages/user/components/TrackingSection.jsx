import React from "react";
import DashboardTile from "../../user-dashboard/components/DashboardTile";
import InsightCard from "../../../components/InsightCard";
import CalendarTile from "../../user-dashboard/components/CalendarTile";
import CircularProgressBar from "../../../components/CircularProgressBar";

const TrackingSection = () => {
  return (
    <div>
      <div className="flex">
        <div className="flex flex-row md:grid-cols-2 gap-1 max-w-6xl mx-3 p-2">
          <CalendarTile />
          <div className="bg-white shadow-md flex justify-center items-center p-6 rounded-r-[6px]">
            <CircularProgressBar />
          </div>
        </div>
        <InsightCard />
        <div>
          <DashboardTile />
        </div>
      </div>
    </div>
  );
};

export default TrackingSection;
