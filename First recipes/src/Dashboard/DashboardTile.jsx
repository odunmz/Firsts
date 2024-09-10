import React from "react";

const DashboardTile = ({ children }) => {
  return (
    <div className="flex flex-col items-center justify-center rounded bg-gray-50 h-28 dark:bg-gray-800">
      {children}
    </div>
  );
};

export default DashboardTile;
