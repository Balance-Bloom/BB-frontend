import React from "react";
import InsightCard from "../../../components/InsightCard";
import LogSymptomModal from "./LogSymptomModal";

const Insights = () => {
  return (
    <div className="">
      <h1 className="font-sans font-semibold mb-4">
        How are you feeling today
      </h1>
      <div className="flex flex-row">
        <InsightCard heading="Log your Symptoms" icon={<LogSymptomModal />} />
        <InsightCard heading="Log your Mood" icon={<LogSymptomModal />} />
      </div>
    </div>
  );
};

export default Insights;
