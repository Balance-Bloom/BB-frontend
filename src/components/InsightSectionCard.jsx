import React, { useState } from "react";

const InsightSectionCard = ({
  insightTitle,
  insightIntro,
  insightContent,
  imageSrc,
  imageAlt,
}) => {
  const [isContentVisible, setIsContentVisible] = useState(false);

  const handleButtonClick = () => {
    setIsContentVisible(!isContentVisible);
  };

  return (
    <div className="rounded-lg flex justify-end items-center">
      <div>
        <img className="w-full rounded-lg" src={imageSrc} alt={imageAlt} />
      </div>
      <div className="">
        <div className="p-4 flex justify-between items-center">
          <div>
            <p className="text-xl font-bold text-gray-800">{insightTitle}</p>
          </div>
        </div>

        <div className="p-4">
          <p className="text-gray-600 mb-4">{insightIntro}</p>
          {isContentVisible && (
            <div className="mt-4">
              <p className="text-gray-600">{insightContent}</p>
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

export default InsightSectionCard;
