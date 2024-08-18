import React from "react";

const CardOfInsights = () => {
  return (
    <div className="insight-card max-w-sm mx-auto p-6 bg-white rounded-lg shadow-md">
      <div className="title">
        <h2 className="text-lg font-bold mb-4">
          Mood Swings and Emotional Changes
        </h2>
      </div>
      <div className="image">
        <img
          src="mood-graph-image.png"
          alt="Mood Graph"
          className="w-full h-40 object-cover rounded-md mb-4"
        />
      </div>
      <div className="description">
        <p className="text-gray-600 mb-6">
          Understand your emotional ups and downs throughout your cycle
        </p>
      </div>
      <div className="stats">
        <ul className="list-none mb-6">
          <li className="text-gray-600 mb-2">
            80% of users experience mood swings during their cycle
          </li>
          <li className="text-gray-600">Average mood score: 6.5/10</li>
        </ul>
      </div>
      <div className="tip">
        <p className="text-gray-600 mb-6">
          Try relaxation techniques like meditation or deep breathing to manage
          mood swings
        </p>
      </div>
      <div className="cta">
        <button className="bg-teal-500 hover:bg-teal-700 text-white font-bold py-2 px-4 rounded-full transition-colors">
          Track Your Mood →
        </button>
      </div>
    </div>
  );
};

export default CardOfInsights;
