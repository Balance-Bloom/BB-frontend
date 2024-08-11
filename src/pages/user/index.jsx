import React from "react";
import PeriodStats from "./components/PeriodStats";
import Insights from "./components/Insights";
import Articles from "./components/Articles";
import CircularProgressBar from "./components/CircularProgressBar";
import AddPeriodModal from "./components/AddPeriodModal";
import CalendarTile from "../user-dashboard/components/CalendarTile";
import CycleGraph from "../user-dashboard/components/CycleGraph";

const UserPage = () => {
  return (
    <>
      <div className="">
        <h1 className="text-2xl my-5 ml-4">Hello Jesslyn, Welcome back</h1>
        <div className="flex max-w-7xl mx-auto gap-4">
          <div className="flex flex-col justify-center items-center bg-white shadow-md p-5 rounded-lg">
            <div className="pb-8">
              <CircularProgressBar />
            </div>
          </div>
          <CalendarTile />
          <CycleGraph />
        </div>
        <div className="m-auto">
          <Insights />
          <Articles />
        </div>
      </div>
    </>
  );
};

export default UserPage;
