import React from "react";

const DashboardTile = ({ styles, headerText, children }) => {
  return (
    <div className="rounded-l-[6px] shadow-md bg-white flex flex-col items-center gap-7 pt-3 ">
      <p>Insights</p>
      <div>{children}</div>
    </div>
  );
};

export default DashboardTile;
