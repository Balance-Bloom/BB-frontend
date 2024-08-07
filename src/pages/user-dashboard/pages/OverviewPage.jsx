import React, { useState } from "react";
import CycleGraph from "../components/CycleGraph";
import Calendar from "react-calendar";
import CalendarTile from "../components/CalendarTile";
import OverviewLeftSection from "../components/OverviewLeftSection";

const OverviewPage = () => {
  return (
    <div className="flex flex-col justify-center items-center place-content-center">
      <div className="grid grid-cols-3 gap-5">
        <div className="flex flex-row col-span-2 h-64 gap-1">
          <CalendarTile className="" />
          <Calendar
            calendarType="gregory"
            view="day"
            className="flex flex-col bg-white items-center"
          />
        </div>
        <div className="col-span-1">
          <OverviewLeftSection />
        </div>
      </div>
      <div className="w-1/2">
        <CycleGraph />
      </div>
    </div>
  );
};

export default OverviewPage;
