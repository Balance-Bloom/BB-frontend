import React from "react";
import TrackingSection from "./components/TrackingSection";
import Header from "./components/Header";
import NavBar from "../../components/NavBar";

const UserPage = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <NavBar />
      <Header />
      <div className="flex flex-col gap-5">
        <TrackingSection />
        <div></div>
      </div>
    </div>
  );
};

export default UserPage;
