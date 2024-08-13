import React from "react";
import TrackingSection from "./components/TrackingSection";
import Header from "./components/Header";
import NavBar from "../../components/NavBar";
import Top from "./components/Top";
import Insights from "./components/Insights";
import Mood from "./components/Mood";
import CycleGraph from "../user-dashboard/components/CycleGraph";

const UserPage = () => {
  return (
    <div className="min-h-screen pt-3 bg-gray-50 ">
      <Header />
      <Top />
      <h1 className="text-lg font-bold text-black">Period Tracking</h1>
      <div className="grid grid-cols-3 gap-5 pt-5 pb-10 items-start">
        <div className="col-span-2">
          <div className="flex space-x-4 items-center content-center">
            <TrackingSection className="pt-8" />
            <div className="">
              <CycleGraph />
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between">
        <Insights />
        <Mood />
      </div>
    </div>
  );
};

export default UserPage;
