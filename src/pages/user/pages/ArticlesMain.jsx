import React, { useState } from "react";
import D from "../../../constants";
import MyCalendar from "../../../components/MyCalendar";

const ArticlesMain = () => {
  const [selectedInsight, setSelectedInsight] = useState(null);

  const handleSelection = (item) => {
    setSelectedInsight(item.linkName);
  };

  return (
    <div className="">
      <div>
        <input
          type="text"
          className="w-20 h-9 bg-white rounded-full shadow-sm border-gray-300 border-[0.5px]"
        />
      </div>
      <div className="flex flex-row justify-center gap-4 pb-5 ">
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
      <MyCalendar />
      {D.INSIGHTLINKS.map((item, index) => {
        return (
          <>
            <div key={index} className="flex flex-col gap-4">
              <p className="text-lg font-sans font-semibold">{item.linkName}</p>
              <div className="flex gap-5">
                <div className="w-48 h-48 bg-white shadow-md rounded-xl"></div>
                <div className="w-48 h-48 bg-white shadow-md rounded-xl"></div>
                <div className="w-48 h-48 bg-white shadow-md rounded-xl"></div>
                <div className="w-48 h-48 bg-white shadow-md rounded-xl"></div>
                <div className="w-48 h-48 bg-white shadow-md rounded-xl"></div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

export default ArticlesMain;
