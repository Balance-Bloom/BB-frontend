import React from "react";
import Calendar from "react-calendar";
import AddPeriodModal from "./AddPeriodModal";

const MyCalendar = () => {
  return (
    <div className="bg-white rounded-lg shadow-md mt-7 pb-9">
      <div className=" w-full min-w-80">
        <Calendar className="flex justify-center flex-col items-center bg-pink/50 " />

        <div className="flex flex-col items-center">
          <h1>Current cycle:</h1>
          <p className="text-2xl font-semibold">Day 20</p>
          <p>Low chance of getting pregnant</p>
          <AddPeriodModal
            buttonText={<p>Log period</p>}
            submitButton="Add"
            modalHeading="Add new period"
          />
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
