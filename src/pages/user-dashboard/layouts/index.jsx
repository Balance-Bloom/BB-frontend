import React from "react";
import Sidebar from "../components/Sidebar";
import { Outlet } from "react-router-dom";
import NavBar from "../../../components/NavBar";

const DashboardLayout = () => {
  return (
    <div className="flex h-screen">
      <div>
        <Sidebar />
      </div>
      <div className="w-full overflow-y-auto">
        <NavBar />
        <div className="bg-bgColor pt-3">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;
