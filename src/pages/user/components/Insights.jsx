import React from "react";
import InsightCard from "../../../components/InsightCard";
import { PlusCircleIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
const Insights = () => {
  const navigate = useNavigate();

  return (
    <div className="p-24">
      <h1 className="font-sans font-semibold mb-4">My Insights . Today</h1>
      <div className="flex justify-center gap-5">
        <InsightCard
          heading="Log your symptoms"
          icon={
            <PlusCircleIcon
              width={40}
              className="text-fuschia"
              onClick={() => navigate("/log-symptom")}
            />
          }
          styles="gap-6 text-sm"
        />

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
