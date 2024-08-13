import moment from "moment";
import React, { useState } from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = () => {
  const [value, onChange] = useState(new Date());
  const [cycle, cycleValue] = useState("28");
  const cycleLength = parseInt(cycle);

  // Calculate the next period date
  const nextPeriodDate = moment(value)
    .add(cycleLength, "days")
    .format("Do MMMM YYYY");

  // Calculate the current day in the cycle (starting from 1)
  const currentDay =
    moment(value).diff(moment(value).startOf("day"), "days") + 1;

  // Calculate progress percentage
  const percentage = (currentDay / cycleLength) * 100;

  return (
    <div style={{ width: 300, height: 300 }}>
      <CircularProgressbarWithChildren
        value={percentage}
        styles={buildStyles({
          trailColor: "#FFCFDB",
          pathColor: "#FF6F91",
        })}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <p
            style={{
              paddingBottom: "12px",
              fontWeight: "bold",
              fontSize: "14px",
            }}
          >
            Today,{" "}
            <span className="text-sm font-normal">
              {moment().format("MMM Do")}
            </span>
          </p>
          <div
            style={{
              textAlign: "center",
              fontWeight: "bolder",
              fontSize: "19px",
            }}
          >
            {/* <p>Next Period</p> */}
            <p>
              more days until <br /> next period
            </p>
            <p>Day, {currentDay}</p>
          </div>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircularProgressBar;
