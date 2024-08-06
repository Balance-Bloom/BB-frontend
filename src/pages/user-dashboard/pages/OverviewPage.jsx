import React, { useState } from "react";
import CycleGraph from "../components/CycleGraph";
import PeriodStats from "../../user/components/PeriodStats";
import Calendar from "react-calendar";

const OverviewPage = () => {
  return (
    <>
      <div className="grid grid-cols-3">
        <div className="col-span-2">
          <Calendar
            calendarType="gregory"
            view="day"
            className="flex flex-col items-center"
          />
        </div>
        <div className="col-span-1"></div>
      </div>
      <div className="w-1/2">
        <CycleGraph />
      </div>
    </>
  );
};

export default OverviewPage;
