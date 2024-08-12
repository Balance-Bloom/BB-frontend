import React, { useState } from "react";
import "../App.css";
import D from "../constants/index";
import { Link } from "react-router-dom";

const Articles = () => {
  const [selectedInsight, setSelectedInsight] = useState(null);

  const handleSelection = (item) => {
    setSelectedInsight(item.linkName);
  };

  return (
    <div className="py-20 ">
      <div className="">
        <p className="font-sans font-semibold mb-4">Expert Insight</p>
        <div className="flex flex-row justify-center gap-4 pb-5">
          {D.INSIGHTLINKS.map((item, index) => {
            const isSelected = selectedInsight === item.linkName;

            return (
              <div
                key={index}
                style={{
                  backgroundColor: isSelected ? "deeppink" : "white",
                  color: isSelected ? "white" : "black",
                  padding: "8px 16px",
                  borderRadius: "9999px", // To simulate `rounded-badge`
                  boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  cursor: "pointer",
                  transition: "background-color 0.3s, color 0.3s",
                }}
                onClick={() => handleSelection(item)}
              >
                {item.linkName}
              </div>
            );
          })}
        </div>
        <div className="flex flex-row gap-4">
          {D.INSIGHTS.map((name, index) => {
            return (
              <div key={index} className="w-80 h-48 articleBg shadow-md">
                <div className="articleOverlay">
                  <p className="text-white">{name.title}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <Link to="/articles">View more</Link>
    </div>
  );
};

export default Articles;
