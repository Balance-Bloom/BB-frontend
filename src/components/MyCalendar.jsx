import React, { useState } from "react";
import moment from "moment";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../App.css";
import AddPeriodModal from "./AddPeriodModal"; // Import the AddPeriodModal component

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());
  const [cycle, cycleValue] = useState("28");

  const cycleLength = parseInt(cycle);

  // Calculate next period date
  const nextPeriodDate = moment(value)
    .add(cycleLength, "days")
    .format("Do MMMM YYYY");

  // Calculate approximate ovulation day
  const ovulationDay = moment(value)
    .add(cycleLength - 14, "days")
    .format("Do MMMM YYYY");

  // Example logged periods (these could be fetched from a database)
  const loggedPeriods = [moment(value).subtract(28, "days").toDate(), value];

  const tileContent = ({ date, view }) => {
    if (
      view === "month" &&
      loggedPeriods.find((d) => moment(d).isSame(date, "day"))
    ) {
      return <div className="dot"></div>;
    }
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    // Handle form submission here, e.g., save the period data
    console.log("Form submitted");
  };

  return (
    <div className="bg-gradient-to-r from-purple-100 to-pink-100 rounded-lg shadow-xl p-6 mt-7 max-w-lg mx-auto">
      <div className="w-full">
        <label
          htmlFor="cycleLength"
          className="block text-xl font-bold text-gray-700 mb-2"
        >
          Select Your Cycle Length
        </label>
        <select
          id="cycleLength"
          className="w-full p-3 border border-gray-300 rounded-lg mb-4 bg-white text-gray-800 shadow-sm"
          onChange={(e) => cycleValue(e.target.value)}
          value={cycle}
        >
          {[...Array(18).keys()].map((i) => (
            <option key={i} value={i + 28}>
              {i + 28}
            </option>
          ))}
        </select>
        <p className="mb-4 text-lg text-gray-600">
          Select Your Last Period Start Date from the Calendar
        </p>
        <div className="flex justify-center mb-4">
          <Calendar
            onChange={onChange}
            value={value}
            className="bg-white border border-gray-300 rounded-lg shadow-lg"
            tileContent={tileContent}
          />
        </div>

        <div className="text-center mt-4">
          <div className="flex justify-center mb-4">
            <div className="m-3 bg-white shadow-lg p-4 rounded-lg w-48 flex flex-col items-center">
              <div className="bg-gradient-to-r from-green-400 to-blue-500 p-2 rounded-full mb-2">
                {/* SVG removed */}
              </div>
              <p className="font-semibold text-gray-800">Next Period</p>
              <p className="text-xl font-bold text-gray-900">
                {nextPeriodDate}
              </p>
            </div>
            <div className="m-3 bg-white shadow-lg p-4 rounded-lg w-48 flex flex-col items-center">
              <div className="bg-gradient-to-r from-yellow-400 to-red-500 p-2 rounded-full mb-2">
                {/* SVG removed */}
              </div>
              <p className="font-semibold text-gray-800">
                Approximate Ovulation Day
              </p>
              <p className="text-xl font-bold text-gray-900">{ovulationDay}</p>
            </div>
          </div>

          {/* Add Period Button */}
          <AddPeriodModal
            modalButtonAction={() => {}}
            buttonText="Log Period"
            modalHeading="Log Your Period"
            submitButton="Add"
            onSubmit={handleFormSubmit}
          />
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
