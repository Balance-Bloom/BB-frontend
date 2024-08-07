import React from "react";
import CalendarView from "./components/CalendarView";
import PeriodStats from "./components/PeriodStats";
import MyCalendar from "./components/MyCalendar";
import NavBar from "../../components/NavBar";
import Insights from "./components/Insights";

const UserPage = () => {
  return (
    <>
      <NavBar border="shadow-md" />
      <div>
        <div className="grid justify-center grid-cols-3 w-11/12 max-w-7xl mx-auto gap-4">
          <div className="col-span-2 ">
            <MyCalendar />
          </div>
          <div className="col-span-1">
            <PeriodStats />
          </div>
        </div>
        <div className="m-auto">
          <Insights />
        </div>
      </div>
    </>
  );
};

export default UserPage;
