import React from "react";
import InsightTile from "../../../components/InsightTile";

const PeriodInsights = () => {
  return (
    <div className=" p-6 bg-gray-50">
      {/* Heading Section */}
      <div className="heading flex w-full justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-gray-800">Period Insights</h1>
      </div>

      {/* Insights Container */}
      <div className="gap-6">
        {/* Insight Item: Mood Tracking */}
        <InsightTile />
      </div>
    </div>
  );
};

export default PeriodInsights;
