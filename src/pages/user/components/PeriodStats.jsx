import React from "react";
import StatsInfo from "../../../components/StatsInfo";

const PeriodStats = () => {
  return (
    <>
      <h1>My cycles</h1>
      <div className="bg-pink/50 rounded-lg shadow-md w-80 p-3">
        <StatsInfo />
        <StatsInfo />
        <StatsInfo />
        <StatsInfo border="border-none" />
      </div>
    </>
  );
};

export default PeriodStats;
