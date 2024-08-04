import React from "react";
import { Link } from "react-router-dom";

const ChatNav = () => {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 py-2 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold">
          Period Tracker
        </Link>
        <div>
          <Link to="/journall" className="mx-2">
            Journal
          </Link>
          <Link to="/view" className="mx-2">
            View Entries
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default ChatNav;
