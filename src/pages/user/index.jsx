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
      <div className="grid grid-cols-3 gap-5 pt-5 items-start">
        <div className="col-span-2">
          <div className="flex space-x-4">
            <TrackingSection className="p-8" />
            <div className="">
              <CycleGraph />
            </div>
          </div>
          <Insights />
        </div>
        {/* <Mood /> */}
      </div>
    </div>
  );
};

export default UserPage;
