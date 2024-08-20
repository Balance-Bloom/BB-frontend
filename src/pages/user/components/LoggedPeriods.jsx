import React from "react";
import MaterialCalendar from "../../../components/MaterialCalendar";
import Mood from "./Mood";

const LoggedPeriods = () => {
  return (
    <div className="flex flex-row gap-10 pb-7">
      <MaterialCalendar />
      <Mood />
    </div>
  );
};

export default LoggedPeriods;
