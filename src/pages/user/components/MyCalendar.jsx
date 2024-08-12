import React, { useState } from "react";
import Calendar from "react-calendar";
import AddPeriodModal from "./AddPeriodModal";
import Moment from "react-moment";
// import moment from "moment";

const MyCalendar = () => {
  const [value, onChange] = useState(new Date());
  const [cycle, CycleValue] = useState("28");

  const date = value; // Ensure this is a valid Date object
  console.log(cycle);

  const cycleLength = parseInt(cycle);

  return (
    <div className="bg-white rounded-lg shadow-md mt-7 pb-9">
      <div className="w-full min-w-80">
        <label htmlFor="cycleLength">Select your cycle length</label>
        <select
          onChange={(e) => CycleValue(e.target.value)}
          defaultValue={cycle}
          className="m-2"
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
        <p className="text-center">
          Select Your Last Period Start Date from the Calendar
        </p>
        <Calendar
          onChange={onChange}
          value={value}
          className="flex justify-center flex-col items-center bg-pink/50"
        />
        <div className="text-center mt-4 p-2">
          <div className="row">
            <div className="flex justify-center">
              <div className="">
                <p>Next Period</p>

                {/* <Moment format="Do MMMM YYYY" add={{ days: cycleLength - 1 }}>
                  {date}
                </Moment> */}
              </div>
              <div className="">
                <p>Approximate Ovulation Day</p>

                {/* <Moment
                  format="Do MMMM YYYY"
                  add={{ days: cycleLength - 1 - 14 }}
                >
                  {date}
                </Moment> */}
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-center">
          <h1>Current cycle:</h1>
          <p className="text-2xl font-semibold">Day 20</p>
          <p>Low chance of getting pregnant</p>
          <AddPeriodModal
            modalHeading="Log your period"
            buttonText={<p>Log period</p>}
            submitButton="Add"
          />
        </div>
      </div>
    </div>
  );
};

export default MyCalendar;
