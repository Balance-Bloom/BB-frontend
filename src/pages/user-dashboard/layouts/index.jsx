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
      <div className="w-full overflow-y-auto pl-3">
        <NavBar />
        <Outlet />
      </div>
    </div>
  );
};

export default DashboardLayout;
