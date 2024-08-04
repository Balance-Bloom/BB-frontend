import React from "react";
import { Link } from "react-router-dom";

const JournalEntryCard = ({ entry }) => {
  return (
    <div className="p-4 mb-4 bg-white rounded-lg shadow-md">
      <h3 className="text-xl font-semibold">Brown</h3>
      <p className="text-gray-600">Red</p>
      <p className="mt-2 text-gray-800">...</p>
      <Link to="" className="mt-2 text-blue-500">
        Read More
      </Link>
    </div>
  );
};

export default JournalEntryCard;
