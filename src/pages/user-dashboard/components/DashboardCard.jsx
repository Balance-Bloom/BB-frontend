import React from "react";

const DashboardCard = ({ styles, headerText, mainText, icon }) => {
  return (
    <div>
      <p>{icon}</p>
      <p>{mainText}</p>
      <p>{headerText}</p>
    </div>
  );
};

export default DashboardCard;
