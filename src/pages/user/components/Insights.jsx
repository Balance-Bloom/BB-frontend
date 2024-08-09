import React from "react";
import InsightCard from "../../../components/InsightCard";
import LogSymptomModal from "./LogSymptomModal";

const Insights = () => {
  return (
    <div className="p-24">
      <h1 className="font-sans font-semibold mb-4">My Insights . Today</h1>
      <div className="flex justify-center gap-5">
        <InsightCard heading="Log your Symptoms" icon={<LogSymptomModal />} />
        <InsightCard />
        <InsightCard />
        <InsightCard />
        <InsightCard />
        <InsightCard />

        <InsightCard />
      </div>
    </div>
  );
};

export default Insights;
