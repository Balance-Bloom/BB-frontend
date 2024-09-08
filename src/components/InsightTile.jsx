import React, { useState } from "react";
import PMS from "../assets/images/diet-img.jpg";

const InsightTile = () => {
  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  const handleButtonClick = () => {
    setIsContentVisible(!isContentVisible);
  };

  const handleMouseOver = () => {
    setIsHovered(true);
  };

  const handleMouseOut = () => {
    setIsHovered(false);
  };

  return (
    <div className="rounded-lg flex justify-end items-center">
      <div>
        <img
          className="w-full rounded-lg"
          src={PMS}
          alt="Image representing mood swings"
        />
      </div>
      <div className="">
        <div className="p-4 flex justify-between items-center">
          <div>
            <p className="text-xl font-bold text-gray-800">Mood Swings</p>
          </div>
        </div>

        <div className="p-4">
          <p className="text-gray-600 mb-4">
            Mood swings are common during your period due to fluctuations in
            estrogen and progesterone levels. These hormonal changes can impact
            neurotransmitters in your brain, leading to changes in mood.
          </p>
          {isContentVisible && (
            <div className="mt-4">
              <p className="text-gray-600">
                These mood changes can range from feeling more irritable or
                anxious to feeling low or even experiencing depressive symptoms.
                Understanding these patterns can help you manage them more
                effectively.
              </p>
            </div>
          )}
        </div>

        <div className="flex justify-between p-4 bg-gray-50">
          <button
            className="bg-deepPink text-white px-4 py-2 rounded-lg hover:bg-orange-700 transition-all duration-300"
            onClick={handleButtonClick}
          >
            {isContentVisible ? "Show Less" : "Learn More"}
          </button>
          <button className="bg-gray-300 text-gray-700 px-4 py-2 rounded-lg hover:bg-gray-400 transition-all duration-300">
            Save Insight
          </button>
        </div>
      </div>
    </div>
  );
};

export default InsightTile;
