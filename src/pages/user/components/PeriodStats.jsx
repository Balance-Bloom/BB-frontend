import React from "react";
import StatsInfo from "../../../components/StatsInfo";
import Button from "../../../components/Button";
import { useNavigate } from "react-router-dom";

const PeriodStats = () => {
  const navigate = useNavigate();

  return (
    <>
      <h1>My cycles</h1>
      <div className=" rounded-lg bg-white shadow-md w-80 p-3">
        <div className="mb-5">
          <StatsInfo />
          <StatsInfo />
          <StatsInfo />
          <StatsInfo border="border-none" />
        </div>
        <Button
          buttonText="Analysis"
          onClick={() => navigate("/welcome-message")}
        />
      </div>
    </>
  );
};

export default PeriodStats;
