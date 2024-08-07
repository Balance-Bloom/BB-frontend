import React from "react";

const DashboardTile = ({ styles, headerText, children }) => {
  return (
    <div className={`${styles}`}>
      <p>{headerText}</p>
      <div>{children}</div>
    </div>
  );
};

export default DashboardTile;
