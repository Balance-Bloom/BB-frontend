import React from "react";
import {
  CircularProgressbarWithChildren,
  buildStyles,
} from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CircularProgressBar = () => {
  const value = 28;

  return (
    <div style={{ width: 300, height: 300 }}>
      <CircularProgressbarWithChildren
        value={value}
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
          <h4
            style={{
              paddingBottom: "12px",
            }}
          >
            <span
              style={{
                fontWeight: "bold",
                fontSize: "14px",
              }}
            >
              Today,
            </span>
            Day {value}
          </h4>
          <h1
            style={{
              textAlign: "center",
              fontWeight: "bolder",
              fontSize: "19px",
            }}
          >
            Your next period is <br /> due in {value} days
          </h1>
        </div>
      </CircularProgressbarWithChildren>
    </div>
  );
};

export default CircularProgressBar;
