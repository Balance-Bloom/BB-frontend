import moment from "moment";
import React, { useState } from "react";
import "../App.css";

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

  return (
    <div className="bg-white rounded-lg shadow-md mt-7 pb-9">
      <div className="w-full min-w-80">
        <label htmlFor="">Select your cycle length</label>
        <select
          className="m-2"
          onChange={(e) => cycleValue(e.target.value)}
          defaultValue={cycle}
        >
          <option value="28">28</option>
          <option value="29">29</option>
          <option value="30">30</option>
          <option value="31">31</option>
          <option value="32">32</option>
          <option value="33">33</option>
          <option value="34">34</option>
          <option value="35">35</option>
          <option value="36">36</option>
          <option value="37">37</option>
          <option value="38">38</option>
          <option value="39">39</option>
          <option value="40">40</option>
          <option value="41">41</option>
          <option value="42">42</option>
          <option value="43">43</option>
          <option value="44">44</option>
          <option value="45">45</option>
        </select>
        <p>Select Your Last Period Start Date from the Calendar</p>
        {/* <Calendar
          onChange={onChange}
          value={value}
          className="flex justify-center flex-col items-center bg-pink/50"
        /> */}

        <div className="text-center mt-4 p-2">
          <div className="row">
            <div className="flex justify-center">
              <div className="m-3 bg-white drop-shadow-lg p-3 rounded-xl">
                <p>Next Period</p>
                <p>{nextPeriodDate}</p>
              </div>
              <div className="m-3 bg-white drop-shadow-lg p-3 rounded-xl">
                <p>Approximate Ovulation Day</p>
                <p>{ovulationDay}</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <h1>
              <p>Next Period</p>
            </h1>
            <p className="text-2xl font-semibold">Day 20</p>
            <p>Low chance of getting pregnant</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
