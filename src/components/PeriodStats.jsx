import React from "react";
import { useNavigate } from "react-router-dom";
import AddPeriodModal from "./AddPeriodModal";
import StatsInfo from "./StatsInfo";

const PeriodStats = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>My cycles</h1>
      <div className=" rounded-lg bg-white shadow-md w-80 flex flex-col items-center">
        <div className="mb-5">
          <StatsInfo />
          <StatsInfo />
          <StatsInfo />
          <StatsInfo border="border-none" />
        </div>
        <AddPeriodModal
          modalHeading="Log Your Period"
          buttonText="Log period"
          modalButtonAction=""
          submitButton="Add period"
        />
      </div>
    </>
  );
};

export default PeriodStats;
