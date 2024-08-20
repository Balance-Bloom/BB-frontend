import React from "react";
import TrackingSection from "./components/TrackingSection";
import Header from "./components/Header";
import NavBar from "../../components/NavBar";
import Top from "./components/Top";
import Insights from "./components/Insights";
import Mood from "./components/Mood";
import CycleGraph from "../user-dashboard/components/CycleGraph";
import PeriodStats from "../../components/PeriodStats";
import SectionHeader from "./components/SectionHeader";
import MyCalendar from "../../components/MyCalendar";
import MaterialCalendar from "../../components/MaterialCalendar";
import LoggedPeriods from "./components/LoggedPeriods";
import SectionOfInsights from "../../components/SectionOfInsights";
import InsightSectionCard from "../../components/InsightSectionCard";

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
        <Insights />
        <InsightSectionCard
          insightTitle="Abdominal cramps"
          insightIntro="Period cramps, also known as dysmenorrhea, are painful cramps that occur during menstruation."
          insightContent=" Contraction of the uterus to shed its lining
- Prostaglandins, hormone-like substances that cause the uterus to contract
- Other factors like stress, heavy bleeding, and underlying medical conditions
"
        />
      </div>

      {/* <MyCalendar /> */}
    </div>
  );
};

export default UserPage;
