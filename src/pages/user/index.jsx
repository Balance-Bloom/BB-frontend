import React from "react";
import CircularProgressBar from "./components/CircularProgressBar";
import CalendarTile from "../user-dashboard/components/CalendarTile";
import InsightCard from "../../components/InsightCard";
import DashboardTile from "../user-dashboard/components/DashboardTile";
import InfoNav from "../../components/InfoNav";
import Articles from "./components/Articles";

const UserPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <h1 className="text-3xl font-semibold pt-10 mb-5">
        Welcome back Jesslyn
      </h1>
      <div className="flex flex-col mb-4">
        <h1>Insights</h1>
        <div className="flex gap-5">
          <InfoNav
            bgColor=""
            children={
              <div className="">
                <p className="text-center">Luteal phase</p>
                <p className="text-center underline text-blue-500 cursor-pointer">
                  Read more
                </p>
              </div>
            }
          />
          <InfoNav />
          <InfoNav />
          <InfoNav />
          <InfoNav />
        </div>
      </div>
      <div className="flex flex-col gap-5">
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
        <div>
          <Articles />
        </div>
      </div>
    </div>
  );
};

export default UserPage;
