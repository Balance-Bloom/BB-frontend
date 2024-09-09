import React from "react";
import TrackingSection from "./components/TrackingSection";
import Header from "./components/Header";
import Top from "./components/Top";
import PeriodStats from "../../components/PeriodStats";
import SectionHeader from "./components/SectionHeader";
import LoggedPeriods from "./components/LoggedPeriods";
import CycleGraph from "../../components/CycleGraph";
import PeriodInsights from "./components/PeriodInsights";

const UserPage = () => {
  return (
    <div className="min-h-screen pt-3 bg-gray-50 flex flex-col gap-10 px-20">
      <Header />
      <Top />

      <div className="grid  gap-5 pt-5 pb-10 items-start">
        <SectionHeader title="Period Tracking" />
        <TrackingSection className="pt-8" />
      </div>

      <div className="flex flex-col gap-5">
        <SectionHeader title="Logged periods" />
        <LoggedPeriods />
      </div>

      <div className="flex flex-col gap-10">
        <SectionHeader title="Cycle Statistics" />
        <div className="grid grid-cols-3 gap-10">
          <CycleGraph />
          <PeriodStats />
        </div>
      </div>

      <div className="flex flex-col justify-between">
        <PeriodInsights />
      </div>

      {/* <MyCalendar /> */}
    </div>
  );
};

export default UserPage;
