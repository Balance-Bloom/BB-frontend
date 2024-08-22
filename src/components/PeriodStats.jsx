import React from "react";
import { useNavigate } from "react-router-dom";
import AddPeriodModal from "./AddPeriodModal";
import StatsInfo from "./StatsInfo";

const PeriodStats = () => {
  const navigate = useNavigate();

  return (
    <div className="grid bg-white p-10 shadow-md w-full col-span-1">
      <h1 className="font-bold">My cycles</h1>
      <div className="   flex flex-col ">
        <div className="mb-5">
          <StatsInfo />
          <StatsInfo />
          <StatsInfo />
          <StatsInfo border="border-none" />
        </div>
        {/* <AddPeriodModal
          modalHeading="Log Your Period"
          buttonText="Log period"
          modalButtonAction=""
          submitButton="Add period"
        /> */}
      </div>
    </div>
  );
};

export default PeriodStats;
