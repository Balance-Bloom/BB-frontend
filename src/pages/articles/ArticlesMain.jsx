import React, { useState } from "react";
import D from "../../constants";
import MyCalendar from "../../components/MyCalendar";

const ArticlesMain = () => {
  const [selectedInsight, setSelectedInsight] = useState(null);

  const handleSelection = (item) => {
    setSelectedInsight(item.linkName);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      {/* Search Input */}
      <div className="mb-6">
        <input
          type="text"
          className="w-full h-10 px-4 bg-white rounded-full shadow-sm border-gray-300 border-[0.5px] focus:outline-none"
          placeholder="Search insights..."
        />
      </div>
      {/* Insight Links */}
      <div className="flex flex-wrap justify-center gap-4 pb-5">
        {D.INSIGHTLINKS.map((item, index) => {
          const isSelected = selectedInsight === item.linkName;

          return (
            <div
              key={index}
              className={`px-4 py-2 rounded-full shadow-md cursor-pointer transition-all ${
                isSelected ? "bg-deepPink text-white" : "bg-white text-black"
              } hover:bg-deepPink hover:text-white`}
              onClick={() => handleSelection(item)}
            >
              {item.linkName}
            </div>
          );
        })}
      </div>
      {/* Calendar Component */}
      <div className="mb-6">
        <MyCalendar />
      </div>
      {/* Articles Section */}
      {D.INSIGHTLINKS.map((item, index) => (
        <div key={index} className="mb-8">
          <p className="text-2xl font-sans font-semibold mb-4 text-gray-800">
            {item.linkName}
          </p>
          <div className="flex flex-wrap gap-5">
            {[...Array(5)].map((_, index) => (
              <div
                key={index}
                className="w-48 h-48 bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-xl transition-shadow"
              >
                <img
                  src="https://via.placeholder.com/150"
                  alt="Article Thumbnail"
                  className="w-full h-24 object-cover"
                />
                <div className="p-4">
                  <h3 className="font-semibold text-gray-700 text-lg">
                    Article Title
                  </h3>
                  <p className="text-sm text-gray-500">
                    Brief description or excerpt...
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ArticlesMain;
