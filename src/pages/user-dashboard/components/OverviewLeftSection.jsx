import React from "react";
import DashboardTile from "./DashboardTile";

const OverviewLeftSection = () => {
  return (
    <div className="grid grid-rows-4">
      <div className="bg-white col-span-1">
        <DashboardTile
          className=""
          children={
            <div>
              <p className="text-sm">
                Today <span>/Tomorrow</span>
              </p>
            </div>
          }
        />
      </div>
      <div className="bg-white col-span-2">
        <DashboardTile
          className=""
          children={
            <div>
              <p className="text-sm">Today mood or symptoms</p>
            </div>
          }
        />
      </div>
      <div className="bg-white col-span-1">
        <DashboardTile
          className=""
          children={
            <div>
              <p className="text-sm">
                Today <span>/Tomorrow</span>
              </p>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default OverviewLeftSection;
