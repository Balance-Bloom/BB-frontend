import React from "react";
import CalendarView from "./components/CalendarView";
import PeriodStats from "./components/PeriodStats";
import MyCalendar from "./components/MyCalendar";

const UserPage = () => {
  return (
    <div className="bg-daisy h-screen flex justify-center">
      <div className="grid grid-cols-3 w-11/12 max-w-7xl mx-auto gap-4">
        <div className="col-span-2">
          <MyCalendar />
        </div>
        <div className="col-span-1">
          <h1>My cycles</h1>
          <PeriodStats />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
