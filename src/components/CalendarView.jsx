import React, { useState } from "react";
import Calendar from "react-calendar";
import "../App.css";

const CalendarView = () => {
  const [date, setDate] = useState(new Date());
  const cycleDay = 9; // Example cycle day

  return (
    <div className="flex flex-col items-center bg-white p-6 rounded-lg shadow-lg w-full max-w-md">
      <Calendar value={date} />
      <div className="mt-4 p-4 bg-gradient-to-r from-pink-200 via-pink-300 to-purple-200 rounded-lg shadow-md w-full text-center">
        <h2 className="text-2xl font-bold">Current Cycle:</h2>
        <p className="text-xl">Day {cycleDay}</p>
        <p className="text-gray-600">High chance of getting pregnant</p>
        <button className="mt-4 px-4 py-2 rounded-lg">Log period</button>
      </div>
    </div>
  );
};

export default CalendarView;
